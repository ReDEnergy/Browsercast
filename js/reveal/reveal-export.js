define(function(require, exports, module) {
	'use strict';

	// Load Modules
	var Utils = require('utils');
	var JSZip = require('jszip');
	var JSZipUtils = require('jszip-utils');
	var saveFileAs = require('file-saver');
	var RevealUtils = require('reveal/reveal-utils');
	var AppTemplate = require('templates');
	var GlobalEvent = require('core/GlobalEvents');
	var Presentation = require('app/config');

	var zip;
	requestRevealZip();

	function requestRevealZip() {
		JSZipUtils.getBinaryContent('js/reveal/reveal.zip', function(err, data) {
			if(err)
				throw err;
			zip = new JSZip(data);
		});
	}

	function requestFile(url, onSuccess, onTimeout) {
		if (typeof(onSuccess) !== 'function') {
			console.log('error: onSuccess parameter is not a function');
			return;
		}

		function onLoad(e) {
			if (this.status == 200) {
				// var MIME = this.getResponseHeader('content-type');
				onSuccess(this.response);
			}
			else {
				onTimeout();
			}
		}

		var xhr = new XMLHttpRequest();
		xhr.open('GET', url, true);
		xhr.timeout = 5000;
		xhr.responseType = 'arraybuffer';
		xhr.onload = function onLoad(e) {
			if (this.status == 200) {
				// var MIME = this.getResponseHeader('content-type');
				onSuccess(this.response);
			}
			else {
				onTimeout();
			}
		};
		xhr.ontimeout = (typeof(onTimeout) === 'function') ? onTimeout : function(){};
		xhr.send();
	}

	var audioTracks = [];

	function parseAudioInfo(audioInfo) {
		var info = JSON.parse(audioInfo);
		var audio = document.createElement('audio');
		audio.src = info[0];
	}

	function prepareZipFile() {
		// Slides Info
	 	var slides = document.querySelector('#scene .reveal .slides').cloneNode(true);
		RevealUtils.cleanupSlides(slides);

		// Search for images
		var imgs = slides.querySelectorAll('img');

		// Audio info
		var bcAudio = document.querySelector('#bc-audio code');
		var tracks = JSON.parse(bcAudio.textContent);

		// Request count
		var reqCount = imgs.length + tracks.length;
		var reqDone = 0;

		// Zip folders
		var imgFolder = zip.folder("reveal/images");
		var audioFolder = zip.folder("reveal/audio");

		GlobalEvent.emit('download-start');
		function finishRequest() {
			reqDone++;
			if (reqDone === reqCount) {
				finishZip();
			}
			GlobalEvent.emit('download-progress', (reqDone/reqCount)*100);
		}

		function finishZip() {
			var revealData = {
				title: Presentation.getProperty('title'),
				author: Presentation.getProperty('author'),
				description: Presentation.getProperty('description'),
				audio: JSON.stringify(tracks),
				slides: slides.innerHTML.replace(/					/g, '	')
			};

			zip.file("reveal/index.html", AppTemplate['reveal-export'](revealData));
			downloadZipFile();
			GlobalEvent.emit('download-end');
		};

		// Save resources
		[].forEach.call(imgs, function(image) {
			requestFile(image.src, function(data) {
				var fileName = image.src.split('/').pop();
				image.src = 'images/' + fileName;
				imgFolder.file(fileName, data);
				finishRequest();
			}, function() {
				finishRequest();
			});
		});

		tracks.forEach(function(track) {
			requestFile(track[0], function(data) {
				var fileName = track[0].split('/').pop();
				track[0] = 'audio/' + fileName;
				audioFolder.file(fileName, data);
				finishRequest();
			}, function () {
				finishRequest();
			});
		});
	}

	function downloadZipFile(callback) {
		var content = zip.generate({type:"blob"});
		saveFileAs(content, "reveal.zip");
	}

	// Public API
	exports.download = prepareZipFile;
});