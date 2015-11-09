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

// 1. create a section tag with an id of `middle-earth`
// add each land as an `article` tag
// inside each `article` tag include an `h1` with the name of the land
// append `middle-earth` to your document `body`

var makeMiddleEarth = function () {

   $('body').append('<section id = "middle-earth"></section>');
   for (var i = 0; i < lands.length; i++) {
   $('#middle-earth').append('<article id="'+ lands[i] + '"><h1> '+ lands[i] +' </h1></article>');
  }
};

makeMiddleEarth();

// 2. display an `unordered list` of hobbits in the shire
// (which is the second article tag on the page)
// give each hobbit a class of `hobbit`

  var makeHobbits = function () {
  var hobbitFriends = '<ul id="hf">'

  for (var h in hobbits) {
    hobbitFriends += '<li>' + hobbits[h] + '</li>';
  }
    hobbitFriends += '</ul>';
    $('article').first().append(hobbitFriends);
};
makeHobbits();

// 3. create a div with an id of `'the-ring'`
// give the div a class of `'magic-imbued-jewelry'`
// add the ring as a child of `Frodo`

var keepItSecretKeepItSafe = function () {
  $('li').first().append('<div id="the-ring" class="#magic-imbued-jewelry"></div>')
};
keepItSecretKeepItSafe();

// 4. create an `aside` tag
// attach an `unordered list` of the `'buddies'` in the aside
// insert your aside as a child element of `rivendell`

var makeBuddies = function () {
  var buddyList = $('<ul>');
  for (var b in buddies) {
    buddyList.append('<li id="' + buddies[b] + '">' + buddies[b] + '</li>');
  }
  $("article:eq(1)").append(buddyList);
};
makeBuddies();

// 5. change the `'Strider'` text to `'Aragorn'`

var beautifulStranger = function () {
$('#Strider').text('Aragon')
};
beautifulStranger();

// 6. assemble the `hobbits` and move them to `rivendell`

var leaveTheShire = function () {
$('#hf').appendTo('#Rivendell');

};
leaveTheShire();

// 7. create a new div called `'the-fellowship'` within `rivendell`
// add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
// after each character is added make an alert that they // have joined your party

var forgeTheFellowShip = function () {
var the_fellowship = $('<div id="the-fellowship">');
$('ul').appendTo(the_fellowship);
$('#Rivendell').append(the_fellowship);
};
forgeTheFellowShip();

// 8. change the `'Gandalf'` text to `'Gandalf the White'`
// apply the following style to the element, make the // background 'white', add a grey border

var theBalrog = function () {
$('#Gandalf\\ the\\ Grey').text('Gandalf the White');
$('#Gandalf\\ the\\ Grey').css("border-color","grey");
$('#Gandalf\\ the\\ Grey').css("border-style","solid");
$('#Gandalf\\ the\\ Grey').css("background-color","white");
};
theBalrog();

// 9. pop up an alert that the horn of gondor has been blown
// Boromir's been killed by the Uruk-hai!
// Remove `Boromir` from the Fellowship

var hornOfGondor = function () {
  alert('The Horn of Gondor Has Been Blown!');
  $( "#Boromir" ).remove();
};
hornOfGondor();

// 10. take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
// add a div with an id of `'mount-doom'` to `Mordor`

var itsDangerousToGoAlone = function (){
$('#hf li').first().appendTo('#Mordor');
$('#hf li').first().appendTo('#Mordor');
$('#Mordor').append('<div id="mount-doom"></div>')
};
itsDangerousToGoAlone();
