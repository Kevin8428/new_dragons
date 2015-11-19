$(document).ready(function(){
  console.log('rocked and roaded');

  // for use in rC()
  function r() {
    return parseInt(256 * Math.random());
  }

  // quick random RGB
  function rC() {

    return 'rgb('+r()+','+r()+','+r()+')'
  }

  // change header color
  //$('header').css("background","repeating-radial-gradient("+rC()+", "+rC()+" 5px, "+rC()+" 5px, "+rC()+" 10px)")

  // change box color
//  $('.box1').css("background","repeating-radial-gradient("+rC()+", "+rC()+" 5px, "+rC()+" 5px, "+rC()+" 10px)")

  var setRGBA = function(){
           red = Math.floor(Math.random()*256);
           green = Math.floor(Math.random()*256);
           blue = Math.floor(Math.random()*256);
           alpha = (Math.random());
           return 'rgba('+red+','+green+','+blue+','+alpha+')';
         };

  $('h1').fadeIn(3000);
  $('header').css('background',"repeating-radial-gradient("+rC()+", "+rC()+" 5px, "+rC()+" 5px, "+rC()+" 10px)")
  $('#btnR').click(function(){
    console.log('git clicked bitsh');
    $('#box1').animate({'left': '+=50px'}, 'slow');
    $('header').css("background-color", setRGBA);
  });
  $('#btnL').click(function(){
    console.log('git clicked bitsh');
    $('#box1').animate({'left': '-=50px'}, 'slow');
    $('header').css("background-color", setRGBA);

  });
  $('#btnD').click(function(){
    console.log('git clicked bitsh');
    $('#box1').animate({'top': '+=50px'}, 'slow');
    $('header').css("background-color", setRGBA);

  });
  $('#btnU').click(function(){
    console.log('git clicked bitsh');
    $('#box1').animate({'top': '-=50px'}, 'slow');
    $('header').css("background-color", setRGBA);

  });

  $('a').click(function(e){
    e.preventDefault();

    var link = $('a').prop('href');
    console.log(link);

  });




});
