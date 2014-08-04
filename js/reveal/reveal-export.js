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

	function requestFile(source, onSuccess, onTimeout) {
		var xhr = new XMLHttpRequest();
		xhr.open('GET', source, true);
		xhr.timeout = 5000;
		xhr.responseType = 'arraybuffer';

		xhr.onload = function(e) {
			if (this.status == 200) {
				// var MIME = this.getResponseHeader('content-type');
				onSuccess(this.response);
			}
			else {
				onTimeout();
			}
		};
		xhr.ontimeout = onTimeout;
		xhr.send();
	}
	
	function prepareZipFile() {
		var audioInfo = document.getElementById('bc-audio-tracks').cloneNode(true);
	 	var slides = document.querySelector('#scene .reveal .slides').cloneNode(true);
		var imgs = slides.querySelectorAll('img');
		var audios = audioInfo.querySelectorAll('source');
		
		RevealUtils.cleanUpSlides(slides);

		var count = imgs.length;
		count += audios.length;

		var imgFolder = zip.folder("images");
		var audioFolder = zip.folder("audio");

		function saveResource(zipFolder, folderName, source) {
			var fileName = source.src.split('/').pop();
			requestFile(source.src, function(data) {
				console.log('SUCCESS:', fileName);
				source.src = folderName + '/' + fileName;
				zipFolder.file(fileName, data);
				finishRequest();
			}, function() {
				console.log('ERROR:', fileName);
				finishRequest();
			});
		}

		var saveImage = saveResource.bind(null, imgFolder, 'images');
		var saveAudio = saveResource.bind(null, audioFolder, 'audio');

		[].forEach.call(imgs, saveImage);
		[].forEach.call(audios, saveAudio);


		function finishRequest() {
			count--;
			console.log('REQUESTS TO COMPLETE:', count);
			if (count === 0) {
				finishZip();
			}
		}

		function finishZip() {
			var revealData = {
				title: 'Exported Presentation',
				author: 'Gabriel Ivanica',
				description: 'a presentation done with Browsercast Editor',
				audio: audioInfo.innerHTML,
				slides: slides.innerHTML.replace(/					/g, '	')
			};

			zip.file("index.html", AppTemplate.reveal(revealData));
			downloadZipFile();
		};
	}

	function downloadZipFile(callback) {
		var content = zip.generate({type:"blob"});
		saveFileAs(content, "reveal.zip");
	}

	var save_test = document.getElementById('save-test');
	save_test.addEventListener('click', prepareZipFile);

});