///////////////////////////////////////////////
///////   Grogg Quiz Logic ////////////////////
///////////////////////////////////////////////

// build basic functionality of quiz questions
//1. welcome to________ (data)

// put divs in variables
var quizArea = $('.quizArea');
var quizQuestion = $('.quizQuestion');

// define variables to call
var names = ['Kathy', 'Howard', 'Renee', 'Adam'];
// var questionSentence = 'Type ' + names[i] + '\'s name and press GO.';

// define functions to call
// function showQuestion(names) {
//    quizQuestion.append(questionSentence)
// };
////////////////////////////////////////
// doc ready : inside is where action happens
$(document).ready(function() {
   // display quiz background div
   // quizArea.append(quizQuestion);

   //display question
   // showQuestion();
   // //display question text
   //    //type _____'s name
   // for (var i = 0; i < names.length; i++) {
   //       quizQuestion.append('<p>Welcome. Type the name of ' + names[i] + '.</p>');
   //    }
   // //display next question button
   //
   // for (var i = 0; i < names.length; i++) {
   //    quizQuestion.append('<p>Welcome. Type the name of ' + names[i] + '.</p>');
   // }



}); // end of doc.ready
////////////////////////////////////////


//2. message who lives here? hint: enter grandma's name
//3. form field and button to enter
//4. button to submit
   //a. message, field, button dissappear
   //b. great job! message appears
   //c. next question appears (repeat)
