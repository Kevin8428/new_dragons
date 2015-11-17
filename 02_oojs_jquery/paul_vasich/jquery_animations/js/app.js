$(document).ready(function() {

  $('h1').fadeIn(3000);
  (setInterval(function() {

    $('header').css("background","repeating-radial-gradient("+rC()+", "+rC()+" 5px, "+rC()+" 5px, "+rC()+" 10px)")

    $('#btnRight').click(function() {
      $('.box1').animate({'left': '+=50px'}, 'slow');
      $('.box1').css("background","repeating-radial-gradient("+rC()+", "+rC()+" 5px, "+rC()+" 5px, "+rC()+" 10px)")
      $('header').css("background","repeating-radial-gradient("+rC()+", "+rC()+" 5px, "+rC()+" 5px, "+rC()+" 10px)")
    });
    $('#btnLeft').click(function() {
      $('.box1').animate({'left': '-=50px'}, 'slow');
      $('.box1').css("background","repeating-radial-gradient("+rC()+", "+rC()+" 5px, "+rC()+" 5px, "+rC()+" 10px)")
      $('header').css("background","repeating-radial-gradient("+rC()+", "+rC()+" 5px, "+rC()+" 5px, "+rC()+" 10px)")
    });
    $('#btnUp').click(function() {
      $('.box1').animate({'top': '-=50px'}, 'slow');
      $('.box1').css("background","repeating-radial-gradient("+rC()+", "+rC()+" 5px, "+rC()+" 5px, "+rC()+" 10px)")
      $('header').css("background","repeating-radial-gradient("+rC()+", "+rC()+" 5px, "+rC()+" 5px, "+rC()+" 10px)")
    });
    $('#btnDown').click(function() {
      $('.box1').animate({'top': '+=50px'}, 'slow');
      $('.box1').css("background","repeating-radial-gradient("+rC()+", "+rC()+" 5px, "+rC()+" 5px, "+rC()+" 10px)")
      $('header').css("background","repeating-radial-gradient("+rC()+", "+rC()+" 5px, "+rC()+" 5px, "+rC()+" 10px)")
    });
  }, 50))();
})

function r() {
  return parseInt(256 * Math.random());
}

function rC() {

  return 'rgb('+r()+','+r()+','+r()+')'
}
