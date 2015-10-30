window.onload= function(){
  alert('window loaded!');

  var askGuess= function () {
    var number=parseInt(10*(Math.random()));
    var ans;
    var win;
    console.log('the number is :'+number);

    var guess=function(){
      ans=parseInt(prompt('Guess a number between 1-10'));
      console.log('guess:'+ans);
      return ans;
    }
    console.log(guess);
    guess();
    for (var i = 0; i < 2; i++) {
        if(ans>number){
          console.log('A little lower');
          return guess();
        }
        else if (ans<number){
          console.log('A little higher');
          return guess();
        }
        else if(ans==number){
          win=true;
          return console.log('Congrats you got it right!');
        } // end of if else if esle statments
    } // end of for loop
    if(!win){
      console.log('sorry you lost');
    }//win conditoin
    else {
      console.log('you won great job!');
    }
  } // end of askGuess
  askGuess();
} //end of window.onload()
