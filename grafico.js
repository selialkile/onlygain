/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Cmd-R),
 * 2. Inspect to bring up an Object Inspector on the result (Cmd-I), or,
 * 3. Display to insert the result in a comment after the selection. (Cmd-L)
 http://www.flotcharts.org/flot/examples/resize/index.html
 */


s = document.createElement('script');
s.src = 'https://raw.githubusercontent.com/selialkile/onlygain/master/jquery-ui.min.js';
document.body.appendChild(s);

s = document.createElement('script');
s.src = 'https://raw.githubusercontent.com/selialkile/onlygain/master/jquery.flot.js';
document.body.appendChild(s);

s = document.createElement('script');
s.src = 'https://raw.githubusercontent.com/selialkile/onlygain/master/jquery.flot.resize.js';
document.body.appendChild(s);

$('body').prepend('<div id="graficopah" style="position:absolute; top:300px; left1px; width: 500px; height: 300px; z-index: 2000; background-color: white;" class=".demo-container"><div style="width: 500px; height: 300px; position: relative;" id="placeholder"></div></div>');

$(function() {

	var d1 = [];
	for (var i = 0; i < 14; i += 0.5) {
		d1.push([i, Math.sin(i)]);
	}

	var d2 = [[0, 3], [4, 8], [8, 5], [9, 13]];
	var d3 = [[0, 12], [7, 12], null, [7, 2.5], [12, 2.5]];

	var placeholder = $("#graficopah #placeholder");
	var plot = $.plot(placeholder, [d1, d2, d3]);

	$("#graficopah").resizable({
		maxWidth: 350,
		maxHeight: 200,
		minWidth: 150,
		minHeight: 50
	});

});