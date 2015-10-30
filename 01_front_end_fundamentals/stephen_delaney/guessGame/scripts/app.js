window.onload = function(){

  var guessOne = prompt('I have a number between one and twenty. Guess what it is.');

    respondOne()

    function respondOne(){
      if (guessOne == 17) {
      return 'You got it on the first try! Wow!';
    }  else if (guessOne > 17) {
      var guessTwo = prompt('Too high! Try one more time.');
      respondTwo();
    }
      else if (guessOne < 17) {
        var guessTwo = prompt('Too low! Try one more time.');
        respondTwo();
      }
      function respondTwo(){
        if (guessTwo == 17) {
        alert('You got it! Good job!');
      }  else {
        alert('Sorry, you lost the game.');
      }
    }
  }





}
// end of window.onLoad
