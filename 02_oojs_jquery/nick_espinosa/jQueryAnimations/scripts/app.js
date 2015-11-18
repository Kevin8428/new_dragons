function randomColor() {
var red = Math.floor(Math.random() * 255);
var blue = Math.floor(Math.random() * 255);
var green = Math.floor(Math.random() * 255);
var alpha = Math.random();
var color = 'rgba(' + red + ',' + blue + ',' + green + ',' + alpha + ')';
return color;
}

$(document).ready(function(){
console.log("loaded");

  $('h1').fadeIn(5000);

  $('#btnRight').click(function(){
    console.log('my button is working')
    $('.box1').animate({'left': '+=50px'}, 'fast')
    $('header').css("background-color", randomColor());
  });
  $('#btnLeft').click(function(){
    console.log('my left button is working')
    $('.box1').animate({'left': '-=50px'}, 'fast');
    $('header').css("background-color", randomColor());
  });
  $('#btnUp').click(function(){
    console.log('my up button is working')
    $('.box1').animate({'top': '-=50px'}, 'fast');
    $('header').css("background-color", randomColor());
  });
  $('#btnDown').click(function(){
    console.log('my down button is working')
    $('.box1').animate({'top': '+=50px'}, 'fast');
    $('header').css("background-color", randomColor());
  });

});//end of $(document).ready
