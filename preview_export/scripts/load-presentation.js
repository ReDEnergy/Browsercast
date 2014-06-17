var loadPresentation = function(callback) {
	var presentation = localStorage.getItem('preview-string');
	console.log("Presentation:", presentation);

	// This seems to do ... well nothing
	// var config = JSON.parse(localStorage.getItem('preview-config'));
	// console.log("Config:", config);

	if (presentation) {
		container = document.getElementById('impress');
		container.innerHTML = presentation;
		callback();
	}
};