$('document').ready(function(){

makeMiddleEarth();

makeHobbits();

keepItSecretKeepItSafe();

makeBuddies();

console.log("Linked.");
})
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

var makeMiddleEarth = function() {
  console.log('I am in middle-earth');
  $('body').append("<section id='middle-earth'>Middle Earth</section>");
  for (var i = 0; i < lands.length; i++){
    console.log('I am still working');
    var land= "<article><h1>"+lands[i]+"</h1></article>";
    $('section').append(land);
  }
};

var makeHobbits = function() {
  for (var i = 0; i < hobbits.length; i++) {
  var hobbitNames = "<ul class='hobbit'>"+ hobbits[i] +"</ul>";
  $('article h1:first').append(hobbitNames);
  }
}

var keepItSecretKeepItSafe = function() {
  $('.hobbit:first').append("<div id='the-ring' class='magic-imbued-jewelry'></div>");
}

var makeBuddies = function() {
  $('article h1:eq(1)').append("<aside></aside>");
  for (var i = 0; i < buddies.length; i++) {
    console.log(buddies[i]);
    var buddyNames = "<ul>" + buddies[i] + "</ul>";
    $('aside').append(buddyNames);
  }
}
