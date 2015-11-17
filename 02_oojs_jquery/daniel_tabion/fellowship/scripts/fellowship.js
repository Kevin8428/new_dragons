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

// create a section tag with an id of `middle-earth`
// add each land as an `article` tag
// inside each `article` tag include an `h1` with the name of the land
// append `middle-earth` to your document `body`
//  var section = '<section id='middle-earth'></section>';
var makeMiddleEarth = function () {

  console.log('makeMiddleEarth');
  var middleEarth = "<section id='middle-earth'></section>";
  $(body).append(middleEarth);
  for (var i in lands) {
    console.log('adding land: ' + lands[i]);
    $("#middle-earth").append("<article><h1>" + lands[i] + "</h1></article>");
  }
};

makeMiddleEarth();

// display an `unordered list` of hobbits in the shire
   // (which is the second article tag on the page)
// give each hobbit a class of `hobbit`
var makeHobbits = function () {
    console.log('adding hobbits!!!');
    console.log('test1' + $('article')[0]);
    console.log( 'test2' + $('article:nth-child(1)') );
    $('article:nth-child(1)').append('<ul></ul>');

    // var theShire = $('article')[0]; // why does this work???
    // $(theShire).append("<ul></ul>");

    // $('article')[0].append("<ul></ul>");  // why doesn't this work???

    for (var i in hobbits) {
      $('ul').append("<li class='hobbit'>" + hobbits[i] + "</li>");
      console.log('adding: ', hobbits[i] );
    }
};

makeHobbits();


// create a div with an id of `'the-ring'`
// give the div a class of `'magic-imbued-jewelry'`
// add the ring as a child of `Frodo`
var keepItSecretKeepItSafe = function () {
  console.log('keepItSecretKeepItSafe!!!');
  console.log('trying to get frodo: ' + $('ul li:first-child'));
  $('ul li:nth-child(1)').append("<div id='the-ring' class='magic-imbued-jewelry'></div>");
};

keepItSecretKeepItSafe();

// create an `aside` tag
// attach an `unordered list` of the `'buddies'` in the aside
// insert your aside as a child element of `rivendell`
var makeBuddies = function () {
  $('section article:nth-child(2)').append('<aside></aside>');
  $('aside').append('<ul></ul>');

  for(var i in buddies) {
    console.log(i + buddies[i]);
    $('aside ul:nth-child(1)').append('<li>' + buddies[i] + '</li>');
  }

};

makeBuddies();

// change the `'Strider'` text to `'Aragorn'`
var beautifulStranger = function () {
  // Check out these experiments
  // $('aside :nth-child(4)').append('<p></p>');  // should this work???
  // $('aside ul li:nth-child(4)').append('<p></p>');  // should this work???

  // This works!!
  // $('aside ul li:nth-child(4)').empty(); // This Works
  // $('aside ul li:nth-child(4)').append('Aragorn');
  // console.log(   $('ul li':nth-child(4))   );  // this selects 4th in both ul's
  // console.log( $('aside ul li:nth-child(4)') );  // This selects strider
  // $('aside :nth-child(4)').append('<p></p>');  // should this work???

  $('article:nth-child(2) aside ul li:nth-child(4)').empty();
  $('article:nth-child(2) aside ul li:nth-child(4)').append('Aragorn');

};
beautifulStranger();


// assemble the `hobbits` and move them to `rivendell`
var leaveTheShire = function () {
  var numHobbits = $('article:nth-child(1) ul li').length;
  console.log(numHobbits + ' hobbits in the shire');

  for (var i=0; i<numHobbits; i++) {
    console.log('moving hobbit: ' + i );
    // console.log( $('article:nth-child(1) ul li:nth-child(4)') );

    $('article:nth-child(1) ul li:nth-child(1)').appendTo('article:nth-child(2) aside ul');
  }
};

leaveTheShire();

// create a new div called `'the-fellowship'` within `rivendell`
// add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
// after each character is added make an alert that they // have joined your party
var forgeTheFellowShip = function () {
   $('article:nth-child(2) aside ').append('<div></div>');
   $('article:nth-child(2) aside > div').append('<ul></ul>');

   var numInRivendell = $('article:nth-child(2) aside ul li').length;
   console.log('Which of you ' + numInRivendell + ' fools are joining the gang?');


   for(var i=0; i<numInRivendell; i++) {
      // $('article:nth-child(2) aside ul li:nth-child('+(i+1)')')
      // $('article:nth-child(2) aside div')
      console.log('joining:' + i);
      console.log($('article:nth-child(2) aside ul li:nth-child(1)'));

      $('article:nth-child(2) > aside > ul:nth-child(1) > li:nth-child(1)' ).appendTo('article:nth-child(2) > aside > div > ul');
   }

};

forgeTheFellowShip();


// change the `'Gandalf'` text to `'Gandalf the White'`
// apply the following style to the element, make the
// background 'white', add a grey border
var theBalrog = function () {
  var dood = $('article:nth-child(2) > aside > div > ul li:first-child');
  console.log(dood);
  $('article:nth-child(2) > aside > div > ul li:first-child').replaceWith('<li>Gandalf the White</li>');
  $('article:nth-child(2) > aside > div > ul li:first-child').css("background", "white");
  $('article:nth-child(2) > aside > div > ul li:first-child').css("border", "3px solid grey");
  };

theBalrog();

// pop up an alert that the horn of gondor has been blown
// Boromir's been killed by the Uruk-hai!
// Remove `Boromir` from the Fellowship
var hornOfGondor = function () {
  alert('The horn of gondor has been blown!  Boromir has been killed by the Uruk-hai!');
  //$('article:nth_child(2) aside > ul:nth-child(1) > div > ul > li:nth-child(5)').remove();
  $('li:nth-child(5)').remove();
};
hornOfGondor();

// take `Frodo` and `Sam` out of the fellowship and move
// them to `Mordor`
// add a div with an id of `'mount-doom'` to `Mordor`
var itsDangerousToGoAlone = function (){

  var frodo = $('li').filter(':contains("Frodo Baggins")');
  var sam = $('li').filter(':contains("Sam")');
  console.log(frodo);
  console.log(sam);
  $('article:nth-child(3)').append('<ul></ul>');
  $('article:nth-child(3)').append('<div></div>');

  sam.appendTo('article:nth-child(3) > ul');
  frodo.appendTo('article:nth-child(3) > ul');

  var mordor = $('article > div');
  mordor.attr('id', "mount-doom");
};
itsDangerousToGoAlone();

var weWantsIt = function () {
  // Create a div with an id of `'gollum'` and add it to Mordor
  $('article:nth-child(3)').append('<div></div>');
  $('article:nth-child(3) > div:last-child').attr('id', "gollum");

  // Remove `the ring` from `Frodo` and give it to `Gollum`
  $('#the-ring').appendTo('article:nth-child(3) > div:last-child');

  // Move Gollum into Mount Doom
  $('#gollum').appendTo('#mount-doom');
};
weWantsIt();

// remove `Gollum` and `the Ring` from the document
// Move all the `hobbits` back to `the shire`
var thereAndBackAgain = function () {
  $('#gollum').remove();

  $('.hobbit').appendTo('article:nth-child(1) > ul');
};

thereAndBackAgain();
