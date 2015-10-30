window.onload = function(){

  function randomNumber() {
      return Math.random() * (1000 - 1) + 1;
  }

var guessNumber = prompt('Hey. Guess a number.');

if (guessNumber == randomNumber()) {
  contentContainer.innerHTML = "Holy shit!  You picked the right number.  Congratulations!"
} else if (guessNumber !== randomNumber()) {
  contentContainer.innerHTML = "You picked the wrong number.  Guess again."
}


var contentContainer = document.getElementById('content');

content.innerHTML = 'ok.';
} // end of window.onLoad
