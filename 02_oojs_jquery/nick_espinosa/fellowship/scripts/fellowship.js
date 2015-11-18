$(document).ready(function() {

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
  // $('body').append('<section id="middle-earth"></section>');
  // for ( var i = 0; i < lands.length; i++ ) {
  // $('#middle-earth').append('<article><h1>' + lands[i] + ' </h1></article>');
  var middleEarth = $('<section>');
  for (var i = 0; i < lands.length; i++) {
    var land = $('<article>');
    var landName = $('<h1>');
    landName.text(lands[i]);
    land.append(landName);
    middleEarth.append(land);
  }
  $('body').append(middleEarth);
};
makeMiddleEarth();

var theShire = $('article').eq(0);
var rivendell = $('article').eq(1);
var mordor= $('article').eq(2);
var makeHobbits = function () {
  var hobbitsList = $('<ul>');
  for (var i = 0; i < hobbits.length; i++) {
    var hobbit = $('<li>');
    hobbit.addClass('hobbit');
    hobbit.text(hobbits[i]);
    hobbitsList.append(hobbit);
  }
  theShire.append(hobbitsList);
  // $('article:nth-child(1)').append('<ul></ul>');
  // for (var i = 0; i < hobbits.length; i++) {
  //   $('ul').append('<li class="hobbit">' + hobbits[i] + '</li>');
};
makeHobbits();

var frodo = $('li').eq(0);

var keepItSecretKeepItSafe = function () {
   // create a div with an id of `'the-ring'`
   // give the div a class of `'magic-imbued-jewelry'`
   // add the ring as a child of `Frodo`
  //  $('li:nth-child(1)').append('<div id="the-ring" class="magic-imbued-jewelry"></div>')
   var theRing = $('<div>');
   theRing.prop('id', 'the-ring');
   theRing.addClass('magic-imbued-jewelry');
   frodo.append(theRing);
};
keepItSecretKeepItSafe();
var makeBuddies = function () {
   // create an `aside` tag
   // attach an `unordered list` of the `'buddies'` in the aside
   // insert your aside as a child element of `rivendell`
  //  $('article:nth-child(2)').append('<aside></aside>');
  // //  $('aside').append('<ul></ul>');
  //  for (var i = 0; i < buddies.length; i++) {
  //    $('aside').append('<li class="buddies">' + buddies[i] + '</li>');
  //  }
  var aside = $('<aside>');
  var buddyList = $('<ul>');
  for (var i = 0; i < buddies.length; i++) {
    var buddy = $('<li>');
    buddy.text(buddies[i]);
    buddyList.append(buddy);
  }
  aside.append(buddyList);
  rivendell.append(aside);
 };
 makeBuddies();

var strider = rivendell.find('li').eq(3);

var beautifulStranger = function () {
   // change the `'Strider'` text to `'Aragorn'`
  //  $("li:contains('Strider')").html("Aragorn");
  strider.text('Aragorn');
};
beautifulStranger();

var hobbits = theShire.find('ul').eq(0);
var leaveTheShire = function () {
   // assemble the `hobbits` and move them to `rivendell`
  //  $('ul').appendTo('article:nth-child(2)');
  rivendell.append(hobbits);

};
leaveTheShire();

var fellowShipMembers = rivendell.find('li');

var forgeTheFellowShip = function () {
   // create a new div called `'the-fellowship'` within `rivendell`
   // add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
   // after each character is added make an alert that they // have joined your party
 //   $('body').append('<div id="the-fellowship"></div>');
 //   for ( var i = 0; i < lands.length; i++ ) {
 //   $('#the-fellowship').appendTo('<article><h1>' + lands[i] + ' </h1></article>');
 // }
 var theFellowship = $('<div>');
 theFellowship.prop('id', 'the-fellowship');
 for (var i = 0; i < fellowShipMembers.length; i++) {
   theFellowship.append(fellowShipMembers.eq(i));
   alert(fellowShipMembers.eq(i).text() + ' has joined the fellowship ');
 }
 rivendell.append(theFellowship);
 };
 forgeTheFellowShip();

var gandalf = fellowShipMembers.eq(0);

var theBalrog = function () {
   // change the `'Gandalf'` text to `'Gandalf the White'`
   // apply the following style to the element, make the // background 'white', add a grey border
  //  $("li:contains('Gandalf')").html('<p class="gandalf">Gandalf the White</p>');
  gandalf.text('Gandalf the White');
  gandalf.css('border', '5px solid slategrey');
  gandalf.css('background', 'white');
};
theBalrog();

var boromir = fellowShipMembers.eq(4);

var hornOfGondor = function () {
   // pop up an alert that the horn of gondor has been blown
   // Boromir's been killed by the Uruk-hai!
   // Remove `Boromir` from the Fellowship
   alert('the horn of gondor has been blown');
   boromir.css('text-decoration', 'line-through');
   alert('Boromir has been SLAIN');
   rivendell.append(boromir);
};
hornOfGondor();


var sam = fellowShipMembers.eq(6);
var itsDangerousToGoAlone = function (){
   // take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
   // add a div with an id of `'mount-doom'` to `Mordor`
mordor.append(frodo);
mordor.append(sam);
var mountDoom = $('<div>');
mountDoom.prop('id', 'mount-doom');
mordor.append(mountDoom);
};
itsDangerousToGoAlone();

var gollum;
var theRing;

var weWantsIt = function () {
  // Create a div with an id of `'gollum'` and add it to Mordor
  // Remove `the ring` from `Frodo` and give it to `Gollum`
  // Move Gollum into Mount Doom
  var gollum = $('<div>');
  gollum.prop('id', 'gollum');
  mordor.append(gollum);
  theRing = frodo.find('#the-ring').eq(0);
  gollum.append(theRing);
  var mountDoom = mordor.find('#mount-doom').eq(0);
};
weWantsIt();

var thereAndBackAgain = function () {
   // remove `Gollum` and `the Ring` from the document
   // Move all the `hobbits` back to `the shire`
  //  gollum.remove();
   var hobbitsList = $('<ul>');
   var hobbits = $('.hobbit');
   for (var i = 0; i < hobbits.length; i++) {
     hobbitsList.append(hobbits.eq(i));
   }
   theShire.append(hobbitsList);
   gollum.remove();
};
thereAndBackAgain();
}); //end of document.ready
