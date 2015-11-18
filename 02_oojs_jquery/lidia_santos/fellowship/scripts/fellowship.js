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

var makeMiddleEarth = function () {
  $('body').append("<section id='middle-earth'></section>");
  for (var i = 0; i < lands.length; i++) {
    $('#middle-earth').append('<article><h1>' +lands[i]+ '</h1></article>');
  };
};

makeMiddleEarth();

var makeHobbits = function () {
     $('article:nth-child(1)').append('<ul></ul>')
for (var i = 0; i < hobbits.length; i++){
       $('ul').append("<li class= 'hobbit'>"+ hobbits[i]+ "</li>")
     };
 };

makeHobbits();

var keepItSecretKeepItSafe = function () {

  $("<div id='the-ring' class='magic-imbued-jewelry'></div>").appendTo('li:nth-child(1)') ;
};

keepItSecretKeepItSafe();


var makeBuddies = function () {
  $('<aside></aside>').appendTo('body');
  $('<ul></ul>').appendTo('aside');
  for (var i=0; i < buddies.length; i++){
    $('aside>ul').append('<li>' + buddies[i] + '</li>')
  };
  $('aside').appendTo($('article').eq(1));
  };

makeBuddies();

var beautifulStranger = function () {
  $('aside>ul>li:nth-child(4)').text('Aragorn');
};

beautifulStranger();

var leaveTheShire = function () {
  $($('ul').eq(0)).appendTo($('article').eq(1));
   // assemble the `hobbits` and move them to `rivendell`
};

leaveTheShire();

var forgeTheFellowShip = function () {
  $("<div class='the fellowship'></div>").prependTo($('article').eq(1));
  var hobbitsAreHere = $('li').toArray();
  for (var i =0; i < hobbitsAreHere.length; i++) {
    $(hobbitsAreHere[i]).appendTo($('div').eq(1));
    console.log(hobbitsAreHere[i].innerText + 'has joined the party');
  }
   // create a new div called `'the-fellowship'` within `rivendell`
   // add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
   // after each character is added make an alert that they // have joined your party
};
forgeTheFellowShip();


var theBalrog = function () {
   $($('li').eq(0)).text("Gandalf the White");
   $($('li').eq(0)).css({"width" : "200px", "background-color":"white", "border" : "2px solid grey" })
};
theBalrog();

var hornOfGondor = function () {
   alert("The horn of Gondor has been blown! Boromir has been killed by the Uruk-hai");
   $($('li').eq(4)).remove();
};
hornOfGondor();

var itsDangerousToGoAlone = function (){
  $('<div id="mount-doom"></div>').appendTo($('article').eq(2));
  $('li:ew(4), li:eq(5)').appendTo($('article').eq(2));
   // take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
   // add a div with an id of `'mount-doom'` to `Mordor`
};

itsDangerousToGoAlone();

var weWantsIt = function () {
 $("<div id='gollum'></div").appendTo($('article').eq(2));
 $('#the-ring').appendTo('#gollum');
 $('#gollum').appendTo('#mount-doom');
};
weWantsIt();

var thereAndBackAgain = function() {
  $('#gollum').remove();
  $('.hobbit').appendTo($('article').eq(0));
  };
thereAndBackAgain();


})
