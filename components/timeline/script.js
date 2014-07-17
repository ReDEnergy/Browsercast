'use strict';

var timeline = new Timeline();

var container = document.getElementById('timeline-sync');
container.appendChild(timeline.timeline);

timeline.computeLayout();
timeline.addMark(20);
timeline.addMark(32);
timeline.addMark(11);
timeline.addMark(51);
timeline.addMark(47);
timeline.sortMarks();
