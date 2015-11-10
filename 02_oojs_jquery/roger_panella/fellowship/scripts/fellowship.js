$(document).ready(function(){
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

// Part 1
var makeMiddleEarth = function(){
  $('body').append("<section id='middle-earth'></section>");
  for (var i=0;i<lands.length;i++) {
  $('#middle-earth').append("<article><h1>" + lands[i] + "</h1></article>");
  };
};
makeMiddleEarth();

// Part 2
var makeHobbits = function(){
  $('article:nth-child(1)').append('<ul></ul>');
  for (var i=0;i<hobbits.length;i++){
  $('ul').append("<li class='hobbit'>" + hobbits[i] + "</li>")
  };
};
makeHobbits();

// Part 3
var keepItSecretKeepItSafe = function() {
  $("<div id='the-ring' class='magic-imbued-jewelry'></div>").appendTo('li:nth-child(1)');
  // $('li:nth-child(1)').append('.magic-imbued-jewelry');
};
keepItSecretKeepItSafe();

// Part 4
var makeBuddies = function(){
  $('<aside></aside>').appendTo('body');
  $('<ul></ul>').appendTo('aside');
  for (var i=0;i<buddies.length;i++) {
  $('aside>ul').append('<li>' + buddies[i] + '</li>')
  };
  // $('aside').appendTo('article:nth-child(2)');
  $('aside').appendTo($('article').eq(1));
  };
  makeBuddies();

// Part 5
var beautifulStranger = function() {
  $('aside>ul>li:nth-child(4)').text('Aragorn');
};
beautifulStranger();

// Part 6
var leaveTheShire = function() {
  $($('ul').eq(0)).appendTo($('article').eq(1));
 // $('.hobbit').appendTo($('article').eq(1));
 };
leaveTheShire();

// Part 7
var forgeTheFellowShip = function() {
  $("<div class='the fellowship'></div>").prependTo($('article').eq(1));
  var hobbitParty = $('li').toArray();
  for (var i = 0;i < hobbitParty.length;i++) {
   $(hobbitParty[i]).appendTo($('div').eq(1));
   console.log(hobbitParty[i].innerText + 'has joined the party!');
  }
};
forgeTheFellowShip();

// Part 8
var theBalrog = function() {
  $($('li').eq(0)).text("Gandalf the White");
  $($('li').eq(0)).css({"width" : "200px", "background-color" : "white", "border" : "5px solid grey"});
};
theBalrog();

// Part 9
var hornOfGondor = function() {
  alert("The Horn of Gondor has been blown!  Boromir has been killed by the Uruk-hai!");
  $($('li').eq(4)).remove();
};
hornOfGondor();

// Part 10
var itsDangerousToGoAlone = function(){
  $("<div id='mount-doom'></div>").appendTo($('article').eq(2));
  $('li:eq(4), li:eq(5)').appendTo($('article').eq(2));
};
itsDangerousToGoAlone();

// Part 11
var weWantsIt = function(){
 $("<div id='gollum'></div").appendTo($('article').eq(2));
 $('#the-ring').appendTo('#gollum');
 $('#gollum').appendTo('#mount-doom');
};
weWantsIt();

// Part 12
var thereAndBackAgain = function() {
$('#gollum').remove();
$('.hobbit').appendTo($('article').eq(0));
};
thereAndBackAgain();


})//end
