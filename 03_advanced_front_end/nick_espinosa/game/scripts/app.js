var url = '';
var questionInc = 0;
var playerOneName = '';
var playerOneCorrect = 0;
var playerOneWrong = 0;
// var playerTwoName = '';
// var playerTwoCorrect = 0;
// var playerTwoWrong = 0;
var currentCorrectAnswer;

function checkAnswerAndAddScore(usersAnswer) {

  if (usersAnswer == currentCorrectAnswer) {
    // add points
    // tell them they were right
    playerOneCorrect ++;
    console.log('right');
  } else {
    // tell them they were wrong
    playerOneWrong ++;
    console.log('wrong');
  }
  if (questionInc == 6) {
    return alert('End of the Game');
  }
}


$(document).ready(function(){ //start of document ready function
  // playerOneName = prompt('please enter player 1 name');
  // playerTwoName = prompt('please enter player 2 name');
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
  var selectedAnswer = $(this).html();
  checkAnswerAndAddScore(selectedAnswer);
  console.log(selectedAnswer);
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
  currentCorrectAnswer = questions[questionInc].correctAnswer;
  var youTubeTemplate = '<iframe width="640" height="385px" src="' + url + '" frameborder="0" allowfullscreen></iframe>'
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


function displayInfo() { // start of display info function
  $('.questionNumber').text('Question # ' + (questionInc + 1));

  $('#player_one').html(playerOneName + '<br>' + 'Correct: '+ '<span>' + playerOneCorrect +'</span>' + ' Wrong: ' + '<span>' + playerOneWrong + '</span>');


  // $('#player_two').html(playerTwoName + '<br>' + 'Correct: '+ playerTwoCorrect + ' Wrong: ' + playerTwoWrong);

  var currentPlayer = playerOneName;
  $('#currentPlayer').text('Current Player: ' + currentPlayer);
}// end of display info function


var questions = [ // start of questions array
  {
    youtubeUrl: "https://www.youtube.com/embed/wM1P7GMnd38?modestbranding=1&showinfo=0&rel=0",
    question: 'What is the name of the actor in this clip?',
    aOne: 'Heath Ledger',
    aTwo: 'Luke Wilson',
    aThree: 'Sean Connery',
    correctAnswer: 'Luke Wilson'
  },
  {
    youtubeUrl: "https://www.youtube.com/embed/JmxK_pBaG4E?modestbranding=1&showinfo=0&rel=0",
    question: 'What is the name of the CIA project Jason Bourne was recruited for?',
    aOne: 'Treadstone',
    aTwo: 'Coldstone',
    aThree: 'Black-Ops',
    correctAnswer: 'Treadstone'
  },
  {
    youtubeUrl: "https://www.youtube.com/embed/gHBhKbF2xMA?modestbranding=1&showinfo=0&rel=0",
    question: 'Why did Wesley Snipes go to prison?',
    aOne: 'Wire Fraud',
    aTwo: 'Insider Trading',
    aThree: 'Tax Evasion',
    correctAnswer: 'Tax Evasion'
  },
  {
    youtubeUrl: "https://www.youtube.com/embed/ZwJKKOa_RHg?modestbranding=1&showinfo=0&rel=0",
    question: 'What is the name of the actress in this clip?',
    aOne: 'Selma Hayek',
    aTwo: 'Denise Richards',
    aThree: 'Claire Danes',
    correctAnswer: 'Denise Richards'
  },
  {
    youtubeUrl: "https://www.youtube.com/embed/WjeptaI2T8E?modestbranding=1&showinfo=0&rel=0",
    question: 'What is Johny-5\'s favorite thing?',
    aOne: 'Input',
    aTwo: 'Books',
    aThree: 'Music',
    correctAnswer: 'Input'
  },
  {
    youtubeUrl: "https://www.youtube.com/embed/ylRqJapI0wQ?modestbranding=1&showinfo=0&rel=0",
    question: 'What is the actors name that plays Floyd?',
    aOne: 'Adam Sandler',
    aTwo: 'Norm McDonald',
    aThree: 'Jim Carrey',
    correctAnswer: 'Jim Carrey'
  },
  {
  youtubeUrl: "",
  question: 'End of the fucking game',
  aOne: 'fuck',
  aTwo: 'fuck',
  aThree: 'fuck',
  correctAnswer: 'fuck'
}
] // end of questions array
