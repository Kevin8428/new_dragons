$(document).ready(function(){

  console.log('everything is loaded');

  $('h1').fadeIn(5000);

  $('#btnRight').click(function(){
    console.log('my button is working')
    $('.box1').animate({'left': '+=50px'}, 'slow');

    $('header').css("background-color", "red");
  })

  $('#btnLeft').click(function(){
    console.log('my button is working')
    $('.box1').animate({'left': '-=50px'}, 'slow')
  })
  $('#btnUp').click(function(){
    console.log('my button is working')
    $('.box1').animate({'top': '-=50px'}, 'slow')
  })
  $('#btnDown').click(function(){
    console.log('my button is working')
    $('.box1').animate({'top': '+=50px'}, 'slow')
  })



})//end of document.ready
