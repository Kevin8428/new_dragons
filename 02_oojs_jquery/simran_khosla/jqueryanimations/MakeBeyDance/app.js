
$(document).ready(function(){


console.log('Everything has loaded.');

  $('li').fadeIn(2000);

  $('#btnRight').click(function(){
    console.log('mybuttonisworking');
    $('.box1').css("background-image", "url(beyRight.png)");
    $('.box1').animate({'left':'+=50px'}, 'slow');
  });

  $('#btnLeft').click(function(){
    console.log('mybuttonisworking');
    $('.box1').css("background-image", "url(beyLeft.png)");
    $('.box1').animate({'left':'-=50px'}, 'slow');
  });


  $('#btnShake').click(function(){
    console.log('mybuttonisworking');
    $('.box1').css("background-image", "url(beybutt.gif)");
  });

  body.addEventListener('keyup', function(event) {
  // look for specific keys to be pressed




});

}) // end of document.ready
