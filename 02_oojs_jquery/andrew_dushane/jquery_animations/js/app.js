$(document).ready( function() {
  $('h1').fadeIn(2000);
  $('#btnRight').click( function() {
    $('.box1').animate({'left': '+=50px'}, 'slow' );
    $('header').css('background-color', 'red');
  });
  $('#btnLeft').click( function() {
    $('.box1').animate({'left': '-=50px'}, 'slow' );
  });
  $('#btnUp').click( function() {
    $('.box1').animate({'top': '-=50px'}, 'slow' );
  });
  $('#btnDown').click( function() {
    $('.box1').animate({'top': '+=50px'}, 'slow' );
  });
  $('#doStuff').click( function() {
    $('header').css({
      height: randomHeight(200,300)
     }, 4000 );
  });

  function randomHeight( min, max ) {
    return (Math.random() * (max - min) + min ).toString();
  }
});
