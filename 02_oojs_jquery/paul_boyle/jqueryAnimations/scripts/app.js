$(document).ready(function(){
  console.log('jQuery looks good');

  $('h1').fadeIn(5000);

  $('#btnRight').click(function(){
    console.log('my button is working');
    $('.box1').animate({'left':randomDistance('+=')},'fast')
  })

  $('#btnLeft').click(function(){
    console.log('my button is working');
    $('.box1').animate({'left':randomDistance('-=')},'fast')
  })

  $('#btnUp').click(function(){
    var move = randomDistance('-=');
    console.log(move);
    $('.box1').animate({'top':move},'fast')

  })

  $('#btnDown').click(function(){
    console.log('my button is working');
    $('.box1').animate({'top':randomDistance('+=')},'fast')
  })
});


var randomDistance = function(sign) {
  var str = ''+sign
  var num=Math.floor(Math.random()*101)+100;
  return sign+num;
}
