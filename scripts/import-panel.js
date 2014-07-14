"use strict";

/**
 * Import Panel
 */

(function ImportPanel() {
	"use strict";

	var import_editor = initAceEditor('import-editor', 'html');
	var import_slides_count = document.getElementById('import-slides-count');
	var reveal_content = document.createElement('div');
	var import_info = document.getElementById('import-info');
	var import_button = document.getElementById('import-slides');

	function getNumberOfDirectChilds(elem, tag) {
		var count = 0;
		var childs = elem.getElementsByTagName(tag);
		Array.prototype.forEach.call(childs, function (child) {
			if (child.parentElement === elem)
				count++;
		});
		return count;
	};

	function findSlidesCount() {
		var n_slides = 0;
		var slides = reveal_content.querySelector('.slides');
		if (slides) {
			Array.prototype.forEach.call(slides.children, function (slide) {
				if (slide.tagName === 'SECTION');
					n_slides += 1;
				var count = getNumberOfDirectChilds(slide, 'section');
				if (count)
					n_slides += count - 1;
			});
		}
		return n_slides;
	}

	import_editor.addEventListener('change', function() {
		reveal_content.innerHTML = import_editor.getValue();
		var count = findSlidesCount();
		if (count > 0) {
			import_info.setAttribute('state', 'ok');
			import_slides_count.textContent = 'Found ' + count + ' slides';
		}
		else {
			import_info.setAttribute('state', 'error');
			import_slides_count.textContent = ":( Can't find '.slides' element";
		}
	});

	// TODO: Bug when import press 2 times
	import_button.addEventListener('click', function() {
		reveal_content.innerHTML = import_editor.getValue();
		var scene = document.getElementById('scene');
		var reveal = scene.children[0];
		var slides = reveal_content.querySelector('.slides');
		reveal.textContent = '';
		reveal.appendChild(slides);

		panels[0].hideAll();
		loadReveal();
		Reveal.slide(0);
	});
})();