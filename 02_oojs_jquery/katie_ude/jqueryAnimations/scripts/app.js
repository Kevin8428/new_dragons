$(document).ready(function() {

  console.log('everything is loaded');

  $('h1').fadeIn(5000);

  $('#btnRight').click(function(){
    console.log('my button is working');
    $('.box1').animate({'left': '+=50px'}, 'slow');

    $('header').css('background-color', 'red');
  }) //end of btnRight.click
  $('#btnLeft').click(function(){
    console.log('my button is working');
    $('.box1').animate({'left': '-=50px'}, 'slow');
  }) //end of btnLeft.click
  $('#btnUp').click(function(){
    console.log('my button is working');
    $('.box1').animate({'top': '-=50px'}, 'slow');

    $('body').css('background-color', 'purple');
  }) //end of btnUp.click
    $('#btnDown').click(function(){
      console.log('my button is working');
      $('.box1').animate({'top': '+=50px'}, 'slow');
  }) //end of btnDown.click

  randomColor function(r, g, b) {
    for 'r' {
      return parseInt(Math.Random())*255
      return parseInt(Math.Random())*255
      return parseInt(Math.Random())*255
  }

}) //end of document.ready
