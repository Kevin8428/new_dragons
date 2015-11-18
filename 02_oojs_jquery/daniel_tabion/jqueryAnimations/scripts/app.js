$(document).ready(function(){


  console.log('everything loaded');
  var image = document.getElementById('pic');
  console.log(image.src);

  $('h1').fadeIn(1600);

  // Click functions
  $('#btnRight').click(function() {
    console.log('btnRight pushed');
    image.src = 'pics/roachRight.jpeg';
    $('.box1').animate({'left': '+=50px'})
  });

  $('#btnLeft').click(function() {
    console.log('btnLeft pushed');
    image.src = 'pics/roachLeft.png';
    $('.box1').animate({'left': '-=50px'})

  });

  $('#btnUp').click(function() {
    console.log('btnUp pushed');
    image.src = 'pics/roachUP.png';
    $('.box1').animate({'top': '-=50px'})
  });

  $('#btnDown').click(function() {
    console.log('btnDown pushed');
    image.src = 'pics/roachDown.jpeg'
    $('.box1').animate({'top': '+=50px'})
  });




}); // end of document.ready
