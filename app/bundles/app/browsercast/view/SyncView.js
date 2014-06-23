define(['libs/backbone'],
function(Backbone) {
	'use strict';

	return Backbone.View.extend({
		id: 'browsercast-editor',

		initialize: function() {
			console.log("=== BROWSERCAST VIEW === INITIALIZED");
			this.template = JST['browsercast/sync'];
			this._editorModel = this.options.editorModel;
			this._deck = this._editorModel._deck;
			this.model = this._deck._BrowsercastModel;
			this.model.on('change:audiocast', this.initAudioCast, this);
			this.model.on('change:transitions', this.offerSaveSync, this);
			console.log("BROWSERCAST: ", this);
		},

		events: {
			'click #play-button': 'playFragment',
			'click #stop-button': 'stopAudio',
			'click #load-button': 'showPanel',
			'click #sync-button': 'toggleSyncPanel',
			'click #bc-sync-reset': 'resetSync',
			'click #bc-sync-finish': 'finishSync',
			'keyup #bc-load-input-url': 'previewAudio',
			'click #bc-load-audiocast': 'loadAudioURL',
			'loadeddata #bc-audiocast-source': 'onLoadAudioCast',
		},

		hidePanel: function hidePanel () {
			this.$load_panel.modal('hide');
			this.$audio_preview[0].pause();
		},

		showPanel: function showPanel() {
			this.$load_panel.modal('show');
			this.$audio_preview.hide();
			this.$load_ok.addClass('disabled');
		},

		initAudioCast: function initAudioCast() {
			this.$audiocast[0].src = this.model.get('audiocast');
		},

		previewAudio : function previewAudio(e) {
			this.$audio_preview[0].src = e.target.value;
			this.$audio_preview.hide();
			this.$load_ok.addClass('disabled');
		},

		loadAudioURL: function loadAudioURL() {
			console.log("BROWSERCAST: Load AudioCast");
			this._deck.set('audiocast', this.$audio_preview[0].src);
			this.hidePanel();
		},

		onLoadAudioPreview : function onLoadAudioPreview() {
			this.$audio_preview.show();
			this.$load_ok.removeClass('disabled');
		},

		onLoadAudioCast: function onLoadAudioCast(e) {
			console.log('BROWSERCAST: AudioFile Loaded', this);
			BcAudio.init();
			var track = BcAudio.getTrackInfo(0);
			BcSync.set({scale: track.audio.duration});
			BcSync.onResize();
		},

		stopAudio: function stopAudio() {
			BcAudio.stop();
		},

		playFragment: function playFragment() {
			var fragment = BcSync.get();
			BcAudio.set(fragment.start, fragment.length, 0);
			BcAudio.play();
			this._deck.get('activeSlide').assignAudioFragment(fragment);
		},

		// Sync AudioCast with presentation

		toggleSyncPanel: function toggleSyncPanel() {
			this.$sync_panel.toggle();
		},

		finishSync: function finishSync() {
			this.$sync_panel.hide();
			this.$sync_audio[0].pause();
		},

		setTransition: function setTransition(e) {
			if (e.keyCode === 82) {
				var transitionTime = this.$sync_audio[0].currentTime;
				console.log("ADD MARK:", transitionTime);
				this.model.addSlideTransition(transitionTime);
				var fragment = this.model.getLastFragment();
				this._deck.get('activeSlide').assignAudioFragment(fragment);
				this._deck.nextSlide();
			}
		},

		resetSync: function resetSync() {
			this.model.clearTransitions();
			this._deck.activateSlideByIndex(0);
			this.$sync_audio[0].src = this.$audiocast[0].src;
			this.$sync_finish.hide();
		},

		offerSaveSync: function offerSaveSync() {
			if (this.model.get('transitions').length === this._deck.get('slides').length)
				this.$sync_finish.show();
			else
				this.$sync_finish.hide();
		},

		render: function render() {
			this.$el.html(this.template());
			this.$play_button = this.$el.find("#play-button");
			this.$play_stop = this.$el.find("#stop-button");
			this.$load_ok = this.$el.find("#bc-load-audiocast");
			this.$load_panel = this.$el.find("#bc-load-panel");
			this.$sync_panel = this.$el.find("#bc-sync-panel");
			this.$sync_finish = this.$el.find("#bc-sync-finish");
			this.$sync_audio = this.$el.find("#bc-sync-audio");
			this.$audiocast = this.$el.find("#bc-audiocast-source");
			this.$audio_preview = this.$el.find("#bc-audiocast-preview");

			// all of this should be moved somewhere else not in render
			// No idea why this events are not triggered if declared in events
			this.$audiocast[0].addEventListener('loadeddata', this.onLoadAudioCast.bind(this));
			this.$audio_preview[0].addEventListener('loadeddata', this.onLoadAudioPreview.bind(this));

			this.$load_panel.on('hidden', this.hidePanel.bind(this));

			var setTransition = this.setTransition.bind(this);
			this.$sync_audio[0].addEventListener('play', function() {
				document.addEventListener('keydown', setTransition);
			});
			this.$sync_audio[0].addEventListener('pause', function() {
				document.removeEventListener('keydown', setTransition);
			});

			var elem = BcSync.create();
			this.el.appendChild(elem);
			return this;
		},

		constructor: function SyncView() {
			Backbone.View.prototype.constructor.apply(this, arguments);
		}
	});
});