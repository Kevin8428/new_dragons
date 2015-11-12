var url = '';
var questionInc = 0;
var playerOneName = '';
var playerOneCorrect = 0;
var playerOneWrong = 0;
var playerTwoName = '';
var playerTwoCorrect = 0;
var playerTwoWrong = 0;

// var ui = {};
// ui.questionBox = $('#question_box'); // update with $(ui.questionBox).html('new content');
// ui.firstAnswer = $('#answer1') //
// //questions[0].youtubeUrl
// // var currentQuestion = questions[i]
// // currentQuestion.youtubeUrl

$(document).ready(function(){ //start of document ready function
  playerOneName = prompt('please enter player 1 name');
  playerTwoName = prompt('please enter player 2 name');
  displayQuestion();
  displayAnswer();
  displayInfo();

// start of click functions
// $( "#answer1" ).click(function() {
//   console.log('answer1clicked');
// });
// $( "#answer2" ).click(function() {
// console.log('answer2clicked');
// });
// $( "#answer3" ).click(function() {
// console.log('answer3clicked');
// });
$(".btn").click(function(){
  // checkAnswer
    questionInc ++;
    displayQuestion();
    displayAnswer();
    displayInfo();
});
// end of click functions

}); // end of document ready function

function displayQuestion(){ // start of display question function
  // we take in a question and change h1 text
  url = questions[questionInc].youtubeUrl;
  var youTubeTemplate = '<iframe width="560" height="315" src="' + url + '" frameborder="0" allowfullscreen></iframe>'
  $('#youtube_box').html(youTubeTemplate);

  var q = questions[questionInc].question;
  $('#question_box').text(q);
} // end of display question function

function displayAnswer() { //start of display answer function
  var answerOne = questions[questionInc].aOne;
  var answerTwo = questions[questionInc].aTwo;
  var answerThree = questions[questionInc].aThree;
  $('#answer1').text(answerOne);
  $('#answer2').text(answerTwo);
  $('#answer3').text(answerThree);
} // end of display answer function


//select the button clicked
// grab the text of btn
// compare to the correct answer

function checkAnswer(){  // start of check answer function


}//end of check answer function

function displayInfo() { // start of display info function
  $('#roundNumber').text('Round Number ' + (questionInc + 1));

  $('#player_one').html(playerOneName + '<br>' + 'Correct: '+ playerOneCorrect + ' Wrong: ' + playerOneWrong);


  $('#player_two').html(playerTwoName + '<br>' + 'Correct: '+ playerTwoCorrect + ' Wrong: ' + playerTwoWrong);

  var currentPlayer = playerOneName;
  $('#currentPlayer').text('Current Player: ' + currentPlayer);
}// end of display info function


var questions = [ // start of questions array
  {
    youtubeUrl: "https://www.youtube.com/embed/wM1P7GMnd38",
    question: 'What is the actors name in the clip?',
    aOne: 'Heath Ledger',
    aTwo: 'Owen Wilson',
    aThree: 'Sean Connery',
    correctAnswer: 'Owen Wilson'
  },
  {
    youtubeUrl: "https://www.youtube.com/embed/JmxK_pBaG4E",
    question: 'What is the name of the CIA project Jason Bourne Works for?',
    aOne: 'Treadstone',
    aTwo: 'Coldstone',
    aThree: 'Black-Ops',
    correctAnswer: 'Treadstone'
  },
  {
    youtubeUrl: "https://www.youtube.com/embed/EmUIfX9TSJs",
    question: 'What is the name of Rico\'s squad?',
    aOne: 'Thunders',
    aTwo: 'Gremlins',
    aThree: 'Roughnecks',
    correctAnswer: 'Roughnecks'
  },
  {
    youtubeUrl: "https://www.youtube.com/embed/ZwJKKOa_RHg",
    question: 'What is the Actress name in this clip?',
    aOne: 'Selma Hayek',
    aTwo: 'Denise Richards',
    aThree: 'Claire Danes',
    correctAnswer: 'Denise Richards'
  },
  {
    youtubeUrl: "https://www.youtube.com/embed/WjeptaI2T8E",
    question: 'What is Johny-5\'s favorite thing?',
    aOne: 'Input',
    aTwo: 'Books',
    aThree: 'Music',
    correctAnswer: 'Input'
  },
  {
    youtubeUrl: "https://www.youtube.com/embed/ylRqJapI0wQ",
    question: 'What is the actors name that plays Floyd?',
    aOne: 'Adam Sandler',
    aTwo: 'Norm McDonald',
    aThree: 'Jim Carrey',
    correctAnswer: 'Jim Carrey'
  }
] // end of questions array
