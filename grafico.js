/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Cmd-R),
 * 2. Inspect to bring up an Object Inspector on the result (Cmd-I), or,
 * 3. Display to insert the result in a comment after the selection. (Cmd-L)
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

$('body').prepend('<div id="graficopah" style="position:absolute; top:1px; left1px; width: 500px; height: 300px; z-index: 2000; background-color: red;" class=".demo-container"><div style="padding: 0px; position: relative;" id="placeholder"></div></div>');

$(function() {

		var d5 = [];
		for (var i = 0; i < 14; i += 0.5) {
			d5.push([i, i-1]);
		}

    $("#graficopah").width(350);
    $("#graficopah").height(250);

		$.plot("#graficopah #placeholder", [{
			data: d5,
			lines: { show: true },
			points: { show: true }
		}]);

  	$(".demo-container").resizable({
			maxWidth: 350,
			maxHeight: 250,
			minWidth: 150,
			minHeight: 100
		});

	});