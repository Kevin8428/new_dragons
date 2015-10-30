


var randNum = Math.floor(Math.random()*100);
var guessTracker = 0;
var userGuess;
var limit = 0;

var getGuess = function(){
  var userGuess = prompt('Guess a number between 1 and 100');
}

var compareGuess = function(){

  getGuess();
  console.log(userGuess);
  for(i=0; i <= limit; i++){
    if ( == randNum){
      alert('You guessed it right!');
      break;
    }else if (userGuess != randNum){
      guessTracker++;
      limit++;
      alert('Try again' + ', you\'ve guessed '+guessTracker+' times.');
      return getGuess();
    }else{
      alert('something went wrong');
    }
  }
}
compareGuess();
