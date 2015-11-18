console.log("Linked.");

$(document).ready(function(){

    makeMiddleEarth();
    makeHobbits();
    keepItSecretKeepItSafe();
    makeBuddies();
    beautifulStranger();
    leaveTheShire();
    forgeTheFellowShip();
    // theBalrog();
    // hornOfGondor();
    // itsDangerousToGoAlone();
    // weWantsIt();
    // thereAndBackAgain();
    console.log(document);

});

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

var makeMiddleEarth = function () {
   // create a section tag with an id of `middle-earth`
   // add each land as an `article` tag
   // inside each `article` tag include an `h1` with the name of the land
   // append `middle-earth` to your document `body`
 $('body').append('<section id="middle-earth"></div>');
  for (i = 0; i < lands.length; i++) {
    $('#middle-earth').append('<article class="land"></article>');
    $('#middle-earth article:eq(' + i + ')').append('<h1 name=' + lands[i] + '></h1>');
  }
};

var makeHobbits = function () {
// display an `unordered list` of hobbits in the shire
// (which is the second article tag on the page)
// give each hobbit a class of `hobbit`
  $('article:eq(1)').append('<ul></ul>');
    for (i = 0; i < hobbits; i++) {
      $('article:eq(1) ul').append('<li class="hobbit">' + hobbits[i] + '</li>');
    }
};

var keepItSecretKeepItSafe = function () {
   // create a div with an id of `'the-ring'`
   // give the div a class of `'magic-imbued-jewelry'`
   // add the ring as a child of `Frodo`
   $('#Frodo').append('<div id="the-ring" class="magic-imbued-jewelry"></div>');
};

var makeBuddies = function () {
   // create an `aside` tag
   // attach an `unordered list` of the `'buddies'` in the aside
   // insert your aside as a child element of `rivendell`
   $('article:eq(2)').append('<aside></aside>');
   $('article:eq(2) aside').append('<ul></ul');
   for (i = 0; i < buddies; i++) {
     $('article:eq(2) aside ul').append('<li class="buddies">' + buddies[i] + '</li`>');
   }
};

var beautifulStranger = function () {
   // change the `'Strider'` text to `'Aragorn'`
   $('.buddies:eq(3)').html('Aragorn');
};

var leaveTheShire = function () {
   // assemble the `hobbits` and move them to `rivendell`
   $('.hobbit').appendTo('article:eq(2)');
};

var forgeTheFellowShip = function () {
   // create a new div called `'the-fellowship'` within `rivendell`
   // add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
   // after each character is added make an alert that they // have joined your party
   $('article:eq(2)').append('<div name="the-fellowship"></div>');
   $
};

var theBalrog = function () {
   // change the `'Gandalf'` text to `'Gandalf the White'`
   // apply the following style to the element, make the // background 'white', add a grey border
};

var hornOfGondor = function () {
   // pop up an alert that the horn of gondor has been blown
   // Boromir's been killed by the Uruk-hai!
   // Remove `Boromir` from the Fellowship
   console.log('The Horn of Gondor has been blown!!!!');
   $('#buddies li').remove('#Boromir');
   console.log('Boromir is dead bro! Oh-noes!');
};

var itsDangerousToGoAlone = function (){
   // take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
   // add a div with an id of `'mount-doom'` to `Mordor`
   $('#hobbits li:eq(0)').appendTo('#Mordor');
   $('#hobbits li:eq(0)').appendTo('#Mordor');
   $('<div id="mount-doom"></div>').appendTo('#Mordor');
};

var weWantsIt = function () {
  // Create a div with an id of `'gollum'` and add it to Mordor
  // Remove `the ring` from `Frodo` and give it to `Gollum`
  // Move Gollum into Mount Doom
  $('<div id="Gollum"></div>').appendTo('#Mordor');
  $('#the-ring').appendTo('#Gollum');
  $('#Gollum').appendTo('#mount-doom');
};

var thereAndBackAgain = function () {
   // remove `Gollum` and `the Ring` from the document
   // Move all the `hobbits` back to `the shire`
   $('#Gollum').remove();
   $('#the-ring').remove();
   $('.hobbit').appendTo('#middle-earth article:eq(0)');
};
