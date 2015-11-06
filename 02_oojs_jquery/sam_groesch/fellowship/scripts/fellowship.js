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
    $('body').prepend('<section id="middle-earth"></section>'); //Check if problems later
    for (var i = 0; i < lands.length; i++) {
      $('#middle-earth').append('<article><h1>'+lands[i]+'</h1></article>');
    };
};
makeMiddleEarth();

var makeHobbits = function () {
  $('article:nth-child(1)').append('<ul></ul>')
  for (var i = 0; i < hobbits.length; i++) {
    $('ul').append('<li class="hobbit">'+hobbits[i]+'</li>')
  }
};
makeHobbits();

var keepItSecretKeepItSafe = function () {
  $('.hobbit:nth-child(1)').append('<div id="the-ring" class="magic-imbued-jewelry"></div>');
};
keepItSecretKeepItSafe();

var makeBuddies = function () {
  $('article:nth-child(2)').append('<aside><ul></ul></aside>');
    for (var i = 0; i < buddies.length; i++) {
      $('aside > ul').append('<li>'+buddies[i]+'</li>');
    }
};
makeBuddies();

var beautifulStranger = function () {
  $('aside>ul>li:nth-child(4)').html('Aragorn')
};
beautifulStranger();

var leaveTheShire = function () {
  $('.hobbit').detach().appendTo('aside>ul');
};
leaveTheShire();

var forgeTheFellowShip = function () {
  $('article:nth-child(2)').append('<div>the-fellowship</div>');
  var numberOfFollowers = $('aside>ul>li').length;
  for (var i = 0; i < numberOfFollowers; i++) {
    $('aside>ul>li:nth-child(1)').detach().appendTo('article>div');
    alert($('article>div>li:last-child').html() + ' has joined the party');
  }
   // create a new div called `'the-fellowship'` within `rivendell`
   // add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
   // after each character is added make an alert that they // have joined your party
};
forgeTheFellowShip();
