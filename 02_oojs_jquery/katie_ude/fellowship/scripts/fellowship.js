$('document').ready(function(){

makeMiddleEarth();

makeHobbits();

keepItSecretKeepItSafe();

makeBuddies();

beautifulStranger();

leaveTheShire();

forgeTheFellowship();

theBalrog();

hornOfGondor();

itsDangerousToGoAlone();

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
    var buddyNames = "<ul class='buddies'>" + buddies[i] + "</ul>";
    $('aside').append(buddyNames);
  }
}

var beautifulStranger = function() {
  $('aside ul:eq(3)').html('Aragorn');
}

var leaveTheShire = function() {
  $('article:eq(1) h1').append("<ul id='elfHobbits'></ul>");
  for (var i = 0; i < '.hobbit.length'; i++);
  var travelingHobbits = $('.hobbit').detach();
  $('#elfHobbits').append(travelingHobbits);
}

var forgeTheFellowship = function() {
  $('article:eq(1) h1').append("<div id='the-fellowship'></div>");
  $('.hobbit').each(function(){
    for (var i = 0; i < 'hobbit.length'; i++);
    console.log($(this).text());
    var fellowHobbits = $('.hobbit').detach();
    $('#the-fellowship').append(fellowHobbits);
    alert($(this).text() + ' has joined the fellowship.');
  })
    $('.buddies').each(function(){
      for (var i = 0; i < 'buddies.length'; i++);
      console.log($(this).text());
      var fellowBuddies = $('.buddies').detach();
      $('#the-fellowship').append(fellowBuddies);
      alert($(this).text() + ' has joined the fellowship.');
    })
}

var theBalrog = function() {
  $('article:eq(1) h1 div ul:eq(4)').html('Gandalf the White');
  $('article:eq(1) h1 div ul:eq(4)').css({"background-color": "white", "border": "grey 3px"});
}

var hornOfGondor = function() {
  alert('The horn of Gondor has been blown!!');
  $("div ul:nth-child(9)").remove();
}

var itsDangerousToGoAlone = function() {
  var Frodo = $("div ul:nth-child(1)").detach();
  var Sam = $("div ul:nth-child(2)").detach();
  $('article:eq(2) h1').append(Frodo);
  $('article:eq(2) h1').append(Sam);
  $('article:eq(2) h1').append("<div id='mount-doom'></div>");
}
