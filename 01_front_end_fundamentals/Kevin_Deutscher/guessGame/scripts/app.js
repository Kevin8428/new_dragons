window.onload = function(){
//all happens after page loads


console.log ("test")


function getUserGuess(userGuess) {

    console.log("Please choose a number between 1 and 4.");
    guess = userGuess;
    randomNumber():
    return prompt();
}

function randomNumber() {
    console.log("test");
    var genNumber = math.random();
      if(genNumber > .25){
        genNumber = 1;
      }
      else if (genNumber >.5){
        genNumber = 2;
      }
      else if (genNumber >.75){
        genNumber = 3;
      }
      else{
        genNumber = 4;
      }
      console.log("computer number is: " + genNumber);
      getWinner();
      return genNumber

}

function getWinner(){
    if(guess === genNumber){
      console.log("you are correct.");
    }
    else {
      console.log("you are wrong.");
    }
}

//run getUserGuess

getUserGuess();






}//this is the end of window.unload
