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

s = document.createElement('script');
s.src = 'https://raw.githubusercontent.com/selialkile/onlygain/master/jquery.flot.categories.js';
document.body.appendChild(s);

$('body').prepend('<div id="graficopah" style="position:absolute; top:300px; left1px; width: 500px; height: 300px; z-index: 2000; background-color: white;" class=".demo-container"><div style="width: 500px; height: 300px; position: relative;" id="placeholder"></div></div>');

window.superGrafico = window.super_grafico || {};
window.superGrafico = {
  init: function () {

    superGrafico.render();
  },

  add_data: function(group, data){
  	superGrafico.stored_data = superGrafico.stored_data || {};

  	if(superGrafico.stored_data[group]==undefined){
  		superGrafico.stored_data[group] = [];
  	}
  	superGrafico.stored_data[group].push(data)
  },
  get_stored_data_to_array: function(){
		return $.map(window.superGrafico.stored_data , function(value, index) {
		    return [value];
		});
  },
  render: function () {
		var placeholder = $("#graficopah #placeholder");
		var plot = $.plot(placeholder, superGrafico.get_stored_data_to_array());

		$("#graficopah").resizable({
			maxWidth: 350,
			maxHeight: 200,
			minWidth: 150,
			minHeight: 50
		});
  },
  add_candle: function(candle, min, max){
  	var size = superGrafico.stored_data.length + 1;
		window.superGrafico.add_data(candle, [size,min]);
		window.superGrafico.add_data(candle, [size,max]);
  },
  add_serie: function(name, value){
  	var size = 0;
  	if(superGrafico.stored_data[name]!=undefined){
	  	size = superGrafico.stored_data[name].length + 1;
  	}
  	window.superGrafico.add_data(name, ["testando" + size,value]);
  }
};

//exemplo de dados em grafico
window.superGrafico.stored_data = {};
window.superGrafico.add_serie('1m', 3950);
window.superGrafico.add_serie('1m', 3951);
window.superGrafico.add_serie('1m', 3952);
window.superGrafico.add_serie('1m', 3952);
window.superGrafico.add_serie('1m', 3950);
window.superGrafico.add_serie('1m', 3952);
window.superGrafico.add_serie('1m', 3955);

window.superGrafico.add_data('c0', [1,3950]);
window.superGrafico.add_data('c0', [2,3952]);
window.superGrafico.add_data('c0', [3,3953]);
window.superGrafico.add_data('c0', [4,3952]);
window.superGrafico.add_data('c0', [5,3953]);
window.superGrafico.add_data('c0', [6,3954]);
window.superGrafico.add_data('c0', [7,3956]);
window.superGrafico.add_data('c0', [8,3962]);
window.superGrafico.add_data('c0', [9,3965]);
window.superGrafico.render();

//exemplos de candles...
window.superGrafico.stored_data = {};
window.superGrafico.add_data('c0', [0,0]);
window.superGrafico.add_data('c0', [0,0]);
window.superGrafico.add_data('c1', [10,3950]);
window.superGrafico.add_data('c1', [10,3955]);
window.superGrafico.add_data('c2', [11,3958]);
window.superGrafico.add_data('c2', [11,3962]);
window.superGrafico.add_data('c3', [12,3958]);
window.superGrafico.add_data('c3', [12,3962]);
window.superGrafico.add_data('c4', [13,3962]);
window.superGrafico.add_data('c4', [13,3950]);
window.superGrafico.render();