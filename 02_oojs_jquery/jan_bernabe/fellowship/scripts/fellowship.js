console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took',
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

var makeMiddleEarth = function () {

   $('body').append('<section id = "middle-earth"></section>');
   for (var i = 0; i < lands.length; i++) {
   $('#middle-earth').append('<article><h1> '+ lands[i] +' </h1></article>');
  }
};

makeMiddleEarth();

// display an `unordered list` of hobbits in the shire
// (which is the second article tag on the page)
// give each hobbit a class of `hobbit`

  var makeHobbits = function () {
  var hobbitFriends = '<ul>'

  for (var h in hobbits) {
    hobbitFriends += '<li>' + hobbits[h] + '</li>';
  }
    hobbitFriends += '</ul>';
    $('article').first().append(hobbitFriends);
};
makeHobbits();

// create a div with an id of `'the-ring'`
// give the div a class of `'magic-imbued-jewelry'`
// add the ring as a child of `Frodo`

var keepItSecretKeepItSafe = function () {
  '<div id="the-ring" class="#magic-imbued-jewelry"></div>'
};
