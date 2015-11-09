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
  var sec = $('<section id="middle-earth"></section>');
  $.each(lands, function(i, val) {
    sec.append('<article><h1>' + val + '</h1></article>')
  });
  $(body).append(sec);
};
makeMiddleEarth();

var makeHobbits = function () {
  var art = $('article:nth-child(1)');
  art.append('<ul></ul>');
  $.each(hobbits, function(i, val) {
    art.children('ul').append('<li class="hobbit">' + val + '</li>');
  });
   // display an `unordered list` of hobbits in the shire
      // (which is the second article tag on the page)
   // give each hobbit a class of `hobbit`
};
makeHobbits()

var keepItSecretKeepItSafe = function () {
  var ring = $('<div class="magic-imbued-jewelry" id="the-ring"></div>');
  $('.hobbit:first-child').append(ring);
   // create a div with an id of `'the-ring'`
   // give the div a class of `'magic-imbued-jewelry'`
   // add the ring as a child of `Frodo`
};

keepItSecretKeepItSafe();

var makeBuddies = function () {
  var tag = $('<aside> <ul></ul> </aside>');
  $.each(buddies, function(i, val) {
    tag.children('ul').append('<li>' + val + '</li>')
  });
  $('article:nth-child(2)').append(tag);
   // create an `aside` tag
   // attach an `unordered list` of the `'buddies'` in the aside
   // insert your aside as a child element of `rivendell`
};

makeBuddies();

var beautifulStranger = function () {
  $('aside li:nth-child(4)').text('Aragorn');
   // change the `'Strider'` text to `'Aragorn'`
};

beautifulStranger();

var leaveTheShire = function () {
  var hobbits = $('article:nth-child(1) ul');
  $('article:nth-child(2)').append(hobbits);
   // assemble the `hobbits` and move them to `rivendell`
};

leaveTheShire();

var forgeTheFellowShip = function () {
  $('article:nth-child(2)').append('<div id="the-fellowship"></div>');
  $('article:nth-child(2) ul li').each(function(i, val) {
    $('#the-fellowship').append(val);
  });
  alert('Fellowship has joined the party!');
   // create a new div called `'the-fellowship'` within `rivendell`
   // add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
   // after each character is added make an alert that they // have joined your party
};

forgeTheFellowShip();

var theBalrog = function () {
  $('#the-fellowship li:first-child').text('Gandalf the White').css({
    'background': 'white',
    'border': '6px solid grey'
  });
   // change the `'Gandalf'` text to `'Gandalf the White'`
   // apply the following style to the element, make the // background 'white', add a grey border
};

theBalrog();


var hornOfGondor = function () {
  alert("yo dawg the horn of Gondor is a blowin'");
  alert("Boromir just got owned.");
  $('#the-fellowship li:nth-child(5)').remove();
   // pop up an alert that the horn of gondor has been blown
   // Boromir's been killed by the Uruk-hai!
   // Remove `Boromir` from the Fellowship
};

hornOfGondor();

var itsDangerousToGoAlone = function (){
  var frodo = $('.hobbit:first');
  var sam = $('.hobbit:eq(1)');
  $('article:last-child').append(frodo, sam, '<div id="mount-doom"></div>');
   // take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
   // add a div with an id of `'mount-doom'` to `Mordor`
};

itsDangerousToGoAlone();

var weWantsIt = function () {
  var gollum = $('<div id="gollum"></div>');
  var ring = $('article:last-child .hobbit:first .magic-imbued-jewelry');
  $('#mount-doom').append(gollum);
  $(gollum).append(ring);
  // Create a div with an id of `'gollum'` and add it to Mordor
  // Remove `the ring` from `Frodo` and give it to `Gollum`
  // Move Gollum into Mount Doom
};

weWantsIt();


var thereAndBackAgain = function () {
  $('#gollum').remove();
  $('article:first-child').append($('.hobbit'));
   // remove `Gollum` and `the Ring` from the document
   // Move all the `hobbits` back to `the shire`
};

thereAndBackAgain();
