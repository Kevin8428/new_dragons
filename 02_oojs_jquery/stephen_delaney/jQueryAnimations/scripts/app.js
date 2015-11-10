$(document).ready(function(){

console.log('Everything has loaded.');

$('h1').fadeIn(5000);

// $('#btnRight').fadeOut(5000);

$('#btnRight').click(function(){
  console.log('My button is working.');
  $('.box1').animate({'left': '+=50px'}, 'fast');
})

$('#btnLeft').click(function(){
  $('.box1').animate({'left': '-=50px'}, 'fast');
})

$('#btnUp').click(function(){
  $('.box1').animate({'top': '-=50px'}, 'fast');
})

$('#btnDown').click(function(){
  $('.box1').animate({'top': '+=50px'}, 'fast');
})

  $('#changeheader').click(function(){
    $('header').css('background-color', 'rgb(6, 71, 40)');
  })

  $('#trippy').click(function(){
    console.log('Trippy button');
      $('body').animate({'background-position': '3px -70px, 3px -70px, 15px -80px, 15px -80px'});
  })



}) // end of document.ready
