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

var lands = ['The_Shire', 'Rivendell', 'Mordor'];
var body = document.body;

$(document).ready(function(){ // start

var makeMiddleEarth = function () {
$("body").append("<section id='middle-earth'></section>");
for (var i = 0; i < lands.length; i++) {
$( "#middle-earth" ).append("<article id=\"" + lands[i] + "\"><h1>" + lands[i] +"</article>");
}
};

makeMiddleEarth();

var makeHobbits = function () {
  for (var inc in hobbits) {
    $("#The_Shire").append("<li class='hobbit'>" + hobbits[inc] + "</li>");
  };
};
makeHobbits();

var keepItSecretKeepItSafe = function () {
  $("li:eq(0)").append("<div id='the-ring' class='magic-imbued-jewelry'></div>");
};
keepItSecretKeepItSafe();

var makeBuddies = function () {
  $("#Rivendell").append("<aside id='buds'></aside>");
  for (var inc in buddies) {
  $("#buds").append("<li>" + buddies[inc] + "</li>");
};
};
makeBuddies();

var beautifulStranger = function () {
  $("li:eq(7)").replaceWith('<li>Aragorn</li>');
};
beautifulStranger();

var leaveTheShire = function () {
  $(".hobbit").appendTo('#Rivendell');

   // assemble the `hobbits` and move them to `rivendell`
};
leaveTheShire();
//
var forgeTheFellowShip = function () {

  $("#Rivendell").append("<div id='the-fellowship'></div>");
  $( "li" ).each(function( index ) {
    $(this).appendTo('#the-fellowship');
    var content = $( this ).text() + ' has joined the party!';
alert(content)
  });
};
forgeTheFellowShip();

var theBalrog = function () {
  $("li:eq(0)").replaceWith('<li>Gandalf the White</li>');
  $("li:eq(0)").css({
    "background-color": "white",
              "border-color": "gray",
               "border-width":"2px",
               "border-style":"solid"});
};
theBalrog();

var hornOfGondor = function () {
  alert('The horn of gondor has been blown. Boromir\'s been killed by the Uruk-hai!');
  $("li:eq(4)").remove();
   // Remove `Boromir` from the Fellowship
};
hornOfGondor();

var itsDangerousToGoAlone = function (){
  $("li:eq(4)").appendTo('#Mordor');
  $("li:eq(4)").appendTo('#Mordor');
  $("#Mordor").append("<div id='mount-doom'></div>");
};
itsDangerousToGoAlone();

var weWantsIt = function () {
  $("#Mordor").append("<div id='gollum'></div>");
  $("#the-ring").appendTo("#gollum");
  $("#gollum").appendTo("#mount-doom");
};
weWantsIt();

var thereAndBackAgain = function () {
  $("#gollum").remove();


  $( ".hobbit" ).each(function( index ) {
    console.log(this);
    $(this).appendTo("#The_Shire");
});

};




thereAndBackAgain();

}); // end
// TURN BACK ON THE ALERTS -- LINE 71 and 87
