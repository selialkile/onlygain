
s = document.createElement('script');
s.src = 'https://code.jquery.com/jquery-1.11.3.js';
document.body.appendChild(s);

var s = document.createElement('script');
s.src = 'https://raw.githubusercontent.com/selialkile/onlygain/master/jquery-ui.min.js';
document.body.appendChild(s);

var s = document.createElement('script');
s.src = 'https://raw.githubusercontent.com/selialkile/onlygain/master/jquery.flot.js';
document.body.appendChild(s);

var s = document.createElement('script');
s.src = 'https://raw.githubusercontent.com/selialkile/onlygain/master/jquery.flot.resize.js';
document.body.appendChild(s);

var s = document.createElement('script');
s.src = 'https://raw.githubusercontent.com/selialkile/onlygain/master/jquery.flot.categories.js';
document.body.appendChild(s);

var style = document.createElement('style');
style.innerHTML = '#graficopah{position:absolute; top:300px; left1px; width: 500px; height: 300px; z-index: 2000; background-color: white; border: 8px ridge #0FE0C9}';
document.head.appendChild(style);

setTimeout(function(){ $('body').prepend('<div id="graficopah" class=".demo-container"><div style="width: 500px; height: 300px; position: relative;" id="placeholder"></div></div>'); }, 3000);



window.superGrafico = window.superGrafico || {};
window.superGrafico = (function() {
 'use strict';

  var data = {};

  function candle (){
    var min = null;
    var max = null;
    var in = null;
    var out = null;
  }

  function serie (){
    var name = null;
    var candles = [];
  }

  function add_candle(candle, serie){
    console.log('teste');
    this.data[serie].push(candle);
  }

  return {
    candle: candle,
    serie: serie,
    add_candle: add_candle
  };
//   add_serie: function(name, value){
//     var size = 0;
//     if(superGrafico.stored_data[name]!=undefined){
//       size = superGrafico.stored_data[name].length + 1;
//     }
//     window.superGrafico.add_data(name, ["testando" + size,value]);
//   }

//   init: function () {
//     this.render();
//   },

  // get_stored_data_to_array: function(){
		// return $.map(this.stored_data , function(value, index) {
		//     return [value];
		// });
  // },

  // render: function () {
		// var placeholder = $("#graficopah #placeholder");
		// var plot = $.plot(placeholder, superGrafico.get_stored_data_to_array());

		// $("#graficopah").resizable({
		// 	maxWidth: 350,
		// 	maxHeight: 200,
		// 	minWidth: 150,
		// 	minHeight: 50
		// });
  // },

}());

// tendencia de baixa 1m
var candle = new window.superGrafico.candle();
candle.in = 10
candle.min = 5;
candle.max = 12
candle.out = 7;
window.superGrafico.add_candle( candle, '1m');

var candle = new window.superGrafico.candle();
candle.in = 7
candle.min = 1;
candle.max = 9
candle.out = 2;
window.superGrafico.add_candle( candle, '1m');

var candle = new window.superGrafico.candle();
candle.in = 3
candle.min = 0;
candle.max = 5
candle.out = 0;
window.superGrafico.add_candle( candle, '1m');

