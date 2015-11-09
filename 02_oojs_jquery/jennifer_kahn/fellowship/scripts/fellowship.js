
$(document).ready(function() {

  console.log('Linked.');

});//end of console



// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.body;


//1.

var makeMiddleEarth = function () {
$('body').append('<section id = 'middle-earth'</section>');
for(var i = 0; i < lands.length; i++) {
$('#middle-earth').append('<article><h1> '+ lands[i] +' </h1></article>');
}

makeMiddleEarth();

//2.
var makeHobbits = function () {
  $('#middle-earth article:nth-child(1)' ).append( '<ul class= 'hobbits'></ul' > );
  for(var i = 0; i < hobbits.length; i++) {
  $('.hobbits').append(' <li class = 'hobbit'> '+ hobbits[i] +' </li>')
};

makeHobbits();


//3.
var keepItSecretKeepItSafe = function() {
  $('.hobbit:nth-child(1)').append('<div id = 'the-ring' class = 'magic-imbued-jewelry'></div>');
};
keepItSecretKeepItSafe();

//4.


var makeBuddies = function () {
   // create an `aside` tag
    $('#middle-earth article:nth-child(2)').append( '<aside><ul class = 'buddies'></ul></aside>');
    for (var i = 0; i < buddies.length; i++) {
     $('.buddies').append('<li class = 'buddy'> '+ buddies[i] +' </li>' );
     }
   };

   makeBuddies();


//5.

var beautifulStranger = function () {
$('.buddy:nth-child(4)').text('aragorn');
};

beautifulStranger();


//6.
var leaveTheShire = function () {
    $('hobbits').appendTo('#middle-earth article:nth-child(2)');
};

//7.

var forgeTheFellowShip = function () {
  $('middle-earth article:nth-child(2)').append('<div id = 'the-fellowship'></div>');
  for (var i = 0; i < hobbits.length + 1; i++) {
  $('.hobbits:nth-child('+ i + ')').appendTo('#the-fellowship');
    alert(hobbits[i - 1] + ' we are in!')};

  for (var i = 0; i < buddies.length + 1; i++) {
  $('buddies:nth-child('+ i + ')').appendTo(#'the-fellowship');
      alert(buddies[i - 1] + 'Buddies are here!');
    }
   // create a new div called `'the-fellowship'` within `rivendell`
   // add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
   // after each character is added make an alert that they // have joined your party
};

forgeTheFellowShip();

//8.
var theBalrog = function () {
  $(".buddy:nth-child)(1)").text('Gandolf the White');
  $(".buddy:nth-child)(1)").css('background', 'white');
  $(".buddy:nth-child)(1)").css('border', 'grey');

   // change the `'Gandalf'` text to `'Gandalf the White'`
   // apply the following style to the element, make the // background 'white', add a grey border
};
theBalrog();

//9.
var hornOfGondor = function () {
   // pop up an alert that the horn of gondor has been blown
   // Boromir's been killed by the Uruk-hai!
   // Remove `Boromir` from the Fellowship
   alert('The horn has been blown');
   alert('Boromir has been killed');
   $('.buddies').find(':contains('Boromir')').remove();
};
hornOfGondor();



//10.
var itsDangerousToGoAlone = function (){
  $('.hobbits'.find(':contains'Frodo')').appendTo('#middle-earth:nth-child(3)');
  $('.hobbits'.find(':contains'Sam')').appendTo('#middle-earth:nth-child(3)');
  $('#middle-earth article:nth-child(3)').append('<div id='mount-doom'></div>');
};
itsDangerousToGoAlone();

//11.
 var weWantsIt = function () {
  $('#middle-earth article:nth-child(3)').append(' <div id ='gollum'></div>');
  $('#the-ring').appendTo('#gollum');
  $('#gollum').appendTo('#mount-doom');


   // Create a div with an id of `'gollum'` and add it to Mordor
   // Remove `the ring` from `Frodo` and give it to `Gollum`
   // Move Gollum into Mount Doom
};
weWantsIt();

//12.
var thereAndBackAgain = function () {
  $('#gollum').remove();
  $('.hobbit').each(function(i){
    $(this).appendTo('#middle-earth article:nth-child(1)');

  });

   // remove `Gollum` and `the Ring` from the document
   // Move all the `hobbits` back to `the shire`
};
thereAndBackAgain();
