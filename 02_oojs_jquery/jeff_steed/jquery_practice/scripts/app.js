$(document).ready(function() {
  console.log('Everything is loaded');

  $('h1').fadeIn(2000);

  $('#btnRight').click(function() {
    console.log("My button is working.");
    $('.box1').animate({'left':'+=200px'}, 'fast');
    $('header').css("background-color", getColor);
    $('.box1').css("background-color", getColor);
    $('button').css('background-color', getColor);
  });
  $('#btnLeft').click(function() {
    console.log("My button is working.");
    $('.box1').animate({'left':'-=200px'}, 'fast');
    $('header').css("background-color", getColor);
    $('.box1').css("background-color", getColor);
    $('button').css('background-color', getColor);
  });
  $('#btnUp').click(function() {
    console.log("My button is working.");
    $('.box1').animate({'top':'-=200px'}, 'fast');
    $('header').css("background-color", getColor);
    $('.box1').css("background-color", getColor);
    $('button').css('background-color', getColor);
  });
  $('#btnDown').click(function() {
    console.log("My button is working.");
    $('.box1').animate({'top':'+=200px'}, 'fast');
    $('header').css("background-color", getColor);
    $('.box1').css("background-color", getColor);
    $('button').css('background-color', getColor);
  });

  var getColor = function() {
    var red = Math.floor(Math.random() * 256 + 1);
    var green = Math.floor(Math.random() * 256 + 1);
    var blue = Math.floor(Math.random() * 256 + 1);
    return "rgb(" + red + ", " + green + ", " + blue + ")";
  }

}); // End of $(document).ready() --------------------------------------------//
