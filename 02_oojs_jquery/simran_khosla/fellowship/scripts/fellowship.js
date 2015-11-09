console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise',
  'Merry',
  'Pippin'
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

//Part 1
var makeMiddleEarth = function () {
  $(body).append('<section id = "middle-earth"><article id "rivendell"><h1>Rivendell</h1></article><article id ="shire"><h1>The Shire</h1></article><article id = "mordor"><h1>Mordor</h1></article></section>');

  makeMiddleEarth();

//Part 2
var makeHobbits = function () {
  $('#shire').append('<ul><li id = 'frodo' class = 'hobbit'> Frodo Baggins</li><li id='samwise' class='hobbit'>Samwise</li><li id='merry' class = 'hobbit'>Merry</li><li id='pippin' class = 'hobbit'>Pippin</li></ul>');
};

makeHobbits();

//Part 3
var keepItSecretKeepItSafe = function () {
  $('#frodo').appendChild('<div id = 'the-ring' class='magic-imbued-jewelry'>The Ring</div>');
};

keepItSecretKeepItSafe();


//Part 4
var makeBuddies () {
$('rivendell').append('<aside><ul><li id = 'gandalf'>Gandalf the Grey</li><li id = 'legolas'>Legolas</li><li id ='gimli' >Gimli</li><li id="strider">Strider</li><li id = 'boramir'>Boramir</li></ul></aside>')
};

makeBuddies();



//Part 5
var beautifulStranger = function () {
  $('#strider').remove();
  $('ul').append('<li id='aragon'>Aragon</li>');
};

beautifulStranger();

//Part 6
var leaveTheShire = function () {
  $('aside').append('rivendell');
};

leaveTheShire();


//Part 7
var forgeTheFellowShip = function () {
  $('rivendell').append('<div id = "the-fellowship">The Fellowship</div>');

  $('the-fellowship').append('#frodo');
  alert('Frodo Baggins has joined The Fellowship');

  $('the-fellowship').append ('#samwise');
  alert('Samwise has joined The Fellowship');

  $('the-fellowship').append ('#pippin');
  alert('Pippin has joined The Fellowship');

  $('the-fellowship').append ('#merry');
  alert('Merry has joined The Fellowship');

  $('the-fellowship').append ('#gandalf');
  alert('Gandalf the Grey has joined The Fellowship');

  $('the-fellowship').append ('#legolas');
  alert('Legolas has joined The Fellowship');

  $('the-fellowship').append ('#gimli');
  alert('Gimli has joined The Fellowship');

  $('the-fellowship').append ('#aragon');
  alert('Aragon has joined The Fellowship');

  $('the-fellowship').append ('#boromir');
  alert('Boramir has joined The Fellowship');

};


//Part 8

var theBalrog=function(){
  $('#gandalf').text('Gandalf the White');
};

theBalrog();

//Part 9
var hornOfGondor = function () {
  alert('The Horn of Gondor has been Blown!');
  $('the-fellowship').remove('#boramir');
};

hornOfGondor ();

//Part 10

var itsDangerousToGoAlone = function () {
  $('#frodo').append('#mordor');
  $('#samwise').append('#mordor');
  $('#mordor').append('<div id = 'mount-doom'> Mount Doom </div>');
};

itsDangerousToGoAlone();


//Part 11
var weWantsIt = function () {

  $('#mordor').append('<div id = "gollum"> Gollum </div>');
  $('#the-ring').append('#gollum');
  $('#gollum').append('#mount-doom');


};


//Part 12
var thereAndBackAgain = function () {
  $('#the-ring').remove();
  $('#gollum').remove();

  $('#frodo').append('#shire');
  $('#samwise').append('#shire');
    $('#merry').append('#shire');
    $('#pippin').append('#shire');
};

  thereAndBackAgain();
