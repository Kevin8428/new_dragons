console.log("Linked.");

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
   $(body).append('<section id="middle-earth"></section>');
   for (var variable in lands) {
     $('#middle-earth').append('<article id="' + lands[variable] + '"><h1>' + lands[variable] + '</h1></article>');
   }
};

makeMiddleEarth();

var makeHobbits = function () {
   // display an `unordered list` of hobbits in the shire
      // (which is the second article tag on the page)
   // give each hobbit a class of `hobbit`
   for (var variable in hobbits) {
     $('<ul class="hobbit">'+ hobbits[variable] + '</ul>').appendTo('#The\\ Shire');
   }
};

makeHobbits();

var keepItSecretKeepItSafe = function () {
   // create a div with an id of `'the-ring'`
   // give the div a class of `'magic-imbued-jewelry'`
   // add the ring as a child of `Frodo`
   var oneRing = '<div id="the-ring" class="magic-imbued-jewelry"></div>'
   $('.hobbit:first').append(oneRing);
};

keepItSecretKeepItSafe();

var makeBuddies = function () {
   // create an `aside` tag
   // attach an `unordered list` of the `'buddies'` in the aside
   // insert your aside as a child element of `rivendell`
   var asidetag = $('<aside>');
   for (var variable in buddies) {
     $(asidetag).append('<ul>' + buddies[variable] + '</ul>');
   }
   $('#Rivendell').append(asidetag);
};

makeBuddies();

var beautifulStranger = function () {
   // change the `'Strider'` text to `'Aragorn'`
    $( 'ul' ).html(function( index, oldHtml ) {
      if (oldHtml == 'Strider') {
          return 'Aragorn';
      }
    });
};

beautifulStranger();

var leaveTheShire = function () {
   // assemble the `hobbits` and move them to `rivendell`
   $( ".hobbit" ).clone().appendTo( "#Rivendell" );
   $( '#The\\ Shire .hobbit' ).remove();
};

leaveTheShire();

var forgeTheFellowShip = function () {
   // create a new div called `'the-fellowship'` within `rivendell`
   // add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
   // after each character is added make an alert that they // have joined your party
   $('<div>', {'class' : 'the-fellowship'}).appendTo('#Rivendell');
   $('.hobbit').appendTo('.the-fellowship');
   $('.hobbit').each(function(index, el) {
     alert(el.innerHTML + ' has joined your party');
   });
   $('aside').appendTo('.the-fellowship');
   $('aside ul').each(function(index, el) {
     alert(el.innerHTML + ' has joined your party');
   });
};

forgeTheFellowShip();

var theBalrog = function () {
   // change the `'Gandalf'` text to `'Gandalf the White'`
   // apply the following style to the element, make the // background 'white', add a grey border
   $( 'ul' ).html(function( index, oldHtml ) {
     if (oldHtml == 'Gandalf the Grey') {
         return 'Gandalf the White';
     }
   });
   $('aside ul:first').css({'background': 'white', 'border': '3px solid grey'});
};

theBalrog();

var hornOfGondor = function () {
   // pop up an alert that the horn of gondor has been blown
   // Boromir's been killed by the Uruk-hai!
   // Remove `Boromir` from the Fellowship
   alert('The horn of Gondor has been blown, Boromir\'s been killed by the Uruk-hai!');
   $('aside ul:last').remove();
};

hornOfGondor();

var itsDangerousToGoAlone = function (){
 // take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
 // add a div with an id of `'mount-doom'` to `Mordor`
 $('.hobbit:first').appendTo('#Mordor');
 $('.hobbit:first').appendTo('#Mordor');
 $('<div>', {'id' : 'mount-doom'}).appendTo('#Mordor');
};

itsDangerousToGoAlone();

var weWantsIt = function () {
  // Create a div with an id of `'gollum'` and add it to Mordor
  // Remove `the ring` from `Frodo` and give it to `Gollum`
  // Move Gollum into Mount Doom
  $('<div>', {'id' : 'Gollum'}).appendTo('#mount-doom');
  $('#Gollum').html('Gollum');
  $('#the-ring').appendTo('#Gollum');
};

weWantsIt();

var thereAndBackAgain = function () {
   // remove `Gollum` and `the Ring` from the document
   // Move all the `hobbits` back to `the shire`
   $('#Gollum').remove();
   $('.hobbit').appendTo('#The\\ Shire');
};

thereAndBackAgain();
