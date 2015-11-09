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

var mordorDiv = '#middle-earth article:nth-child(3)';
var ringDiv = '<div id="the-ring" class="magic-imbued-jewelry"></div>';
var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.body;


var makeMiddleEarth = function () {
  $('body').append('<section id="middle-earth"></section>');
  for (var land in lands){
    $('#middle-earth').append('<article id="' + land +'"><h1>' + lands[land] + '</h1></article>');
  }
};

makeMiddleEarth();


var makeHobbits = function () {
      $('article:nth-child(1)').append('<ul class="hobbitul"></ul>');
      $('ul.hobbitul').append('<li id="Frodo" class="hobbit">' + hobbits[0] + '</li>');
      for (var i = 1; i < hobbits.length; i++) {
        $('ul.hobbitul').append('<li class="hobbit">' + hobbits[i] + '</li>');
      }
};

makeHobbits();


var keepItSecretKeepItSafe = function () {
  ringDiv = '<div id="the-ring" class="magic-imbued-jewelry"></div>';
  // $('body').append(ringDiv);
  $(ringDiv).appendTo('#Frodo');
   // create a div with an id of `'the-ring'`
   // give the div a class of `'magic-imbued-jewelry'`
   // add the ring as a child of `Frodo`
};

keepItSecretKeepItSafe();
//
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
//
var beautifulStranger = function () {
  buddies[3] = 'Aragorn';
  $('#listOfBuddies li:nth-child(4)').html('Aragorn');
   // change the `'Strider'` text to `'Aragorn'`
};

beautifulStranger();
//
var leaveTheShire = function () {
   // assemble the `hobbits` and move them to `rivendell`
   $('ul.hobbitul').detach();
   $('#middle-earth article:nth-child(2)').append('<ul id="hobbitul"></ul>');
   $('#hobbitul').append('<li id="Frodo" class="hobbit">' + hobbits[0] + '</li>');
 for (var i = 1; i < hobbits.length; i++) {
   $('#hobbitul').append('<li class="hobbit">' + hobbits[i] + '</li>');
 }
  $(ringDiv).appendTo('#Frodo')
   //use empty() instead of remove();
};

leaveTheShire();

var forgeTheFellowShip = function () {
    $('#listOfBuddies').detach();
    $('#hobbitul').detach();
    $('#middle-earth article:nth-child(2)').append('<div id="the-fellowship"></div>');
    for (var i in buddies){
        $('<li>' + buddies[i] + '</li>').appendTo('#the-fellowship');
        window.alert(buddies[i] + " has joined the party.");
     }
    for (var i in hobbits){
        $('<li class="hobbit">' + hobbits[i] + '</li>').appendTo('#the-fellowship');
        window.alert(hobbits[i] + " has joined the party.");

    }
   // create a new div called `'the-fellowship'` within `rivendell`
   // add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
   // after each character is added make an alert that they // have joined your party
};

forgeTheFellowShip() ;
//
//
var theBalrog = function () {
    buddies[0] = 'Gandalf the White';
    $('#the-fellowship li:nth-child(1)').html('Gandalf the White')
    $('#the-fellowship li:nth-child(1)').css('background-color', 'white');
    $('#the-fellowship li:nth-child(1)').css('border', '3px dashed grey');
   // change the `'Gandalf'` text to `'Gandalf the White'`
   // apply the following style to the element, make the // background 'white', add a grey border
};

theBalrog();
//
var hornOfGondor = function () {
  window.alert('The horn of gondor has been blown! :( Boromir has been killed.');
  $('#the-fellowship li:nth-child(5)').remove();
   // pop up an alert that the horn of gondor has been blown
   // Boromir's been killed by the Uruk-hai!
   // Remove `Boromir` from the Fellowship
};

hornOfGondor();
//
var itsDangerousToGoAlone = function (){
    $('#the-fellowship li:nth-child(6)').detach();
    $('#the-fellowship li:nth-child(5)').detach();
    var mordorDiv = '#middle-earth article:nth-child(3)';
    $(mordorDiv).append('<li id="Frodo" class="hobbit">'+hobbits[0]+'</li>');
    $(mordorDiv).append('<li class="hobbit">'+hobbits[1]+'</li>');
    $(mordorDiv).append('<div id="mount-doom"></div>');
    $('#Frodo').append(ringDiv);
   // take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
   // add a div with an id of `'mount-doom'` to `Mordor`
};

itsDangerousToGoAlone();
//
var weWantsIt = function () {
  $(mordorDiv).append('<div id="gollum"></div>');
  $('#the-ring').remove();
  $('#gollum').append(ringDiv);
  $('#2 article:eq(4)').remove();
  $('#gollum').appendTo('#mount-doom');
  // Create a div with an id of `'gollum'` and add it to Mordor
  // Remove `the ring` from `Frodo` and give it to `Gollum`
  // Move Gollum into Mount Doom
};

weWantsIt();

var thereAndBackAgain = function () {
  $('#gollum').remove();
  $('li.hobbit').appendTo('#middle-earth article:nth-child(1)');
   // remove `Gollum` and `the Ring` from the document
   // Move all the `hobbits` back to `the shire`
};

thereAndBackAgain();
