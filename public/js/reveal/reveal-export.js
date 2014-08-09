define(function(require, exports, module) {
	'use strict';

	// Load Modules
	var Utils = require('utils');
	var JSZip = require('jszip');
	var JSZipUtils = require('jszip-utils');
	var saveFileAs = require('file-saver');
	var RevealUtils = require('reveal/reveal-utils');

	// TODO
	// add a node.js fallback in case of XHR errors for images or audio
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
		console.log(url);
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
		RevealUtils.cleanUpSlides(slides);

		// Search for images
		var imgs = slides.querySelectorAll('img');

		// Audio info
		var bcAudio = document.querySelector('#bc-audio code');
		var tracks = JSON.parse(bcAudio.textContent);

		// Request count
		var reqCount = imgs.length + tracks.length;

		// Zip folders
		var imgFolder = zip.folder("images");
		var audioFolder = zip.folder("audio");

		function finishRequest() {
			reqCount--;
			console.log('REQUESTS TO COMPLETE:', reqCount);
			if (reqCount === 0) {
				finishZip();
			}
		}

		function finishZip() {
			var revealData = {
				title: 'Exported Presentation',
				author: 'Gabriel Ivanica',
				description: 'a presentation done with Browsercast Editor',
				audio: JSON.stringify(tracks),
				slides: slides.innerHTML.replace(/					/g, '	')
			};

			zip.file("index.html", AppTemplate.reveal(revealData));
			downloadZipFile();
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

	var save_test = document.getElementById('save-test');
	save_test.addEventListener('click', prepareZipFile);

});