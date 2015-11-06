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
  $('body').append('<section id="middle-earth"></section>');
  for (var land in lands){
    $('#middle-earth').append('<article><h1>' + lands[land] + '</h1></article>');
  }
};

makeMiddleEarth();


var makeHobbits = function () {
      $('article:nth-child(1)').append('<ul></ul>');
      for (var hobbit in hobbits){
        $('ul').append('<li class="hobbit">' + hobbits[hobbit] + '</li>');
      }
};

makeHobbits();


var keepItSecretKeepItSafe = function () {
  ringDiv = '<div id="the-ring" class="magic-imbued-jewelry"></div>';
  $('body').append(ringDiv);
  $(ringDiv).appendTo('li.hobbit:nth-child(1)');
   // create a div with an id of `'the-ring'`
   // give the div a class of `'magic-imbued-jewelry'`
   // add the ring as a child of `Frodo`
};

keepItSecretKeepItSafe();


var makeBuddies = function () {
  $('<aside id="asideTag"></aside>').appendTo('#middle-earth article:nth-child(2)');
  $('#asideTag').append('<ul id="listOfBuddies"></ul>');
  for (var dude in buddies){
  $('#listOfBuddies').append('<li>' + buddies[dude] + '</li>');
  }
   // create an `aside` tag
   // attach an `unordered list` of the `'buddies'` in the aside
   // insert your aside as a child element of `rivendell`
};

makeBuddies();


var beautifulStranger = function () {
  $('#listOfBuddies li:nth-child(4)').html('Aragorn');
   // change the `'Strider'` text to `'Aragorn'`
};

beautifulStranger();
