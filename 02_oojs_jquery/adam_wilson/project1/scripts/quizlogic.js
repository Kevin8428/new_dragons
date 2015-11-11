///////////////////////////////////////////////
///////   Grogg Quiz Logic ////////////////////
///////////////////////////////////////////////

// build basic functionality of quiz questions
//1. welcome to________ (data)

// put divs in variables
var ui = {}; // object to hold dom variables
var quizArea = $('.quizArea');
var quizBackground = $('.quizBackground');

// define variables to call
var names = ['Grandma Kathy', 'Grandpa Howard', 'Aunt Renee', 'Uncle Adam'];
var states = ['Ohio', 'Ohio', 'Illinois', 'Illinois'];
var images = ['<img src="images/family_photo.jpg" />', '<img src="images/family_photo.jpg" />', '<img src="images/family_photo.jpg" />', '<img src="images/family_photo.jpg" />'];
var inc = 0;
var img = $('img')
var imageLocation = $('#imageLocation');





 /////////////////////////////////////////////
 // doc ready : inside is where action happens
 $(document).ready(function() {
   //  img.hide();







/////////button action calls function/////////
    $('button').click( function() {

      $("p").remove();

      if (inc < names.length) {
         quizBackground.append('<p>Welcome to ' + states[inc] + '.</p>');
        quizBackground.append('<p>' + names[inc] + ' lives in ' + states[inc] + '.</p>');

        //display images using inc to select in array
        imageLocation.append(images[inc]);

        // put markers on map (put map above.....)
        // gmpaps create an array of
        // set lat, long for api











        inc += 1; // increment at end of loop
     } else {
        quizBackground.append('The Family is All Here!');
     }

     }) // end button click function

























    // display quiz background div
    // quizArea.append(quizBackground);
    //display question
    // showQuestion();
    // //display question text
    //    //type _____'s name
    // for (var i = 0; i < names.length; i++) {
    //       quizBackground.append('<p>Welcome. Type the name of ' + names[i] + '.</p>');
    //    }
    // //display next question button
    //
    // for (var i = 0; i < names.length; i++) {
    //    quizBackground.append('<p>Welcome. Type the name of ' + names[i] + '.</p>');
    // }
 }); // end of doc.ready
 ////////////////////////////////////////




// var questionSentence = 'Type ' + names[i] + '\'s name and press GO.';
// inc += 1 in order to update question name
/*function incrementName() {*/
  /*inc += 1;
  var questionText = '<p>Type the name ' + names[inc] + '.</p>';*/
/*};*/

// display a question and button
/*$('.quizBackground').append(questionText);
$('.quizBackground').append('<button>Go</button>');*/




  /*var questionText = '<p>Type the name ' + names[inc] + '.</p>';
  $('.quizBackground').append(questionText);
  inc += 1;*/









// define functions to call
// function showQuestion(names) {
//    quizBackground.append(questionSentence)
// };



//2. message who lives here? hint: enter grandma's name
//3. form field and button to enter
//4. button to submit
   //a. message, field, button dissappear
   //b. great job! message appears
   //c. next question appears (repeat)
