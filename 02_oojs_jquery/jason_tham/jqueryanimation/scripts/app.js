// function returns a random integer between min and max
function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
//function returns a string to pass to the jquery .animate method, with a random number of pixels to increment in the direction passed
function randomPixel(direction, min, max){
  var value = direction + '=' + getRandomIntInclusive(min,max); + 'px';
  return value;
}
//returns a string in the rgb format with the numbers randomized
function randomColor(){
  return 'rgb\(' + getRandomIntInclusive(0,255) + ',' + getRandomIntInclusive(0,255) + ',' + getRandomIntInclusive(0,255) + '\)' ;
}
//returns a string to pass to the repeating-radial-gradient css property with the colors randomized
function randomGradient(){
 return 'repeating-radial-gradient\(' + randomColor() + ' , ' + randomColor() + ' 5px, ' + randomColor() + ' 5px, ' + randomColor() + ' 10px\)';
}
//returns a string to pass to the border css element with the color randomized
function randomBorder(){
  return '6px solid ' + randomColor();
}

//function to move the box element and randomize all colors on each click, moves in the direction of the argument passed to it
function moveBox(direction){
  $('h1').toggle();
  $('header').css('background-color', randomColor());
  $('.box1').css('background', randomGradient());
  $('.box1').css('border', randomBorder());
  switch (direction) {
    case 'right':
    $('.box1').animate({'left': randomPixel('+',1, 250)}, 'slow');
      break;
    case 'left':
      $('.box1').animate({'left': randomPixel('-',1, 250)}, 'slow');
        break;
    case 'up':
      $('.box1').animate({'top': randomPixel('-',1, 250)}, 'slow');
        break;
    case 'down':
      $('.box1').animate({'top': randomPixel('+',1, 250)}, 'slow');
        break;
    default:
  }
}

$(document).ready(function() {
  // body...
  console.log('everything is loaded');

  $('.on').fadeIn('slow');

  $('#btnRight').click(function(){
    moveBox('right');
  });

  $('#btnLeft').click(function(){
    moveBox('left');
  });

  $('#btnUp').click(function(){
    moveBox('up');
  });

  $('#btnDown').click(function(){
    moveBox('down');
  });

}); //end document ready
