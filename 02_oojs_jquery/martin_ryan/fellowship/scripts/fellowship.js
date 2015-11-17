console.log("Linked.");

$(document).ready(function(){

    makeMiddleEarth();
    makeHobbits();
    keepItSecretKeepItSafe();
    makeBuddies();
    beautifulStranger();
    leaveTheShire();
    forgeTheFellowShip();
    theBalrog();
    hornOfGondor();
    itsDangerousToGoAlone();
    weWantsIt();
    thereAndBackAgain();
    //console.log(document);

});

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
   // create a section tag with an id of `middle-earth`
   middleEarthTag = document.createElement('section');
   middleEarthTag.id = 'middle-earth';

   // add each land as an `article` tag
   // inside each `article` tag include an `h1` with the name of the land
   for (i = 0; i < lands.length; i++) {
     var newLand = document.createElement('article');
     var nameContainer = document.createElement('h1');

     newLand.id = lands[i];
     nameContainer.innerHTML = lands[i];
     newLand.appendChild(nameContainer);
     middleEarthTag.appendChild(newLand);
   }

  // append `middle-earth` to your document `body`
  body.appendChild(middleEarthTag);

};

var makeHobbits = function () {
// display an `unordered list` of hobbits in the shire
// (which is the second article tag on the page)
// give each hobbit a class of `hobbit`
  var ul = document.createElement('ul');
  var theShire = document.getElementById('The Shire');

  ul.id = 'hobbits';
  theShire.appendChild(ul);
  var theShireHobbits = document.getElementById('hobbits');
  for (i = 0; i < hobbits.length; i++) {
    var li = document.createElement('li');
    li.innerHTML = hobbits[i];
    li.className = 'hobbit';
    theShireHobbits.appendChild(li);
  }
};

var keepItSecretKeepItSafe = function () {
   // create a div with an id of `'the-ring'`
   // give the div a class of `'magic-imbued-jewelry'`
   // add the ring as a child of `Frodo`
   $("#hobbits li:first-child").append('<div id="the-ring" class="magic-imbued-jewelry"></div>');
};

var makeBuddies = function () {
   // create an `aside` tag
   // attach an `unordered list` of the `'buddies'` in the aside
   // insert your aside as a child element of `rivendell`
   $('#Rivendell').append('<aside></aside>');
   $('#Rivendell aside').append("<ul id='buddies'></ul>");
   for (i = 0; i < buddies.length; i++) {
     $("#buddies").append('<li id="' + buddies[i] + '">' + buddies[i] + '</li>');
   }
};

var beautifulStranger = function () {
   // change the `'Strider'` text to `'Aragorn'`
   $('#Strider').html('Aragorn');
};

var leaveTheShire = function () {
   // assemble the `hobbits` and move them to `rivendell`
   $('#hobbits').prependTo('#Rivendell aside');
};

var forgeTheFellowShip = function () {
   // create a new div called `'the-fellowship'` within `rivendell`
   // add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
   // after each character is added make an alert that they // have joined your party
   $('#Rivendell').append('<div id="the-fellowship"></div>');
   numHobbits = $('#hobbits li').length;
   numBuddies = $('#buddies li').length;
   for (i = 0; i < numHobbits; i++) {
     $('#hobbits:eq(' + i + ')').appendTo('#the-fellowship');
     console.log(hobbits[i] + ' has joined the fellowship!');
   }
   for (i = 0; i < numBuddies; i++) {
     $('#buddies:eq(' + i + ')').appendTo('#the-fellowship');
     console.log(buddies[i] + ' has joined the fellowship!');
   }
};

var theBalrog = function () {
   // change the `'Gandalf'` text to `'Gandalf the White'`
   // apply the following style to the element, make the // background 'white', add a grey border
   $('#buddies li:eq(0)').html('Gandalf the White');
};

var hornOfGondor = function () {
   // pop up an alert that the horn of gondor has been blown
   // Boromir's been killed by the Uruk-hai!
   // Remove `Boromir` from the Fellowship
   console.log('The Horn of Gondor has been blown!!!!');
   $('#buddies li').remove('#Boromir');
   console.log('Boromir is dead bro! Oh-noes!');
};

var itsDangerousToGoAlone = function (){
   // take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
   // add a div with an id of `'mount-doom'` to `Mordor`
   $('#hobbits li:eq(0)').appendTo('#Mordor');
   $('#hobbits li:eq(0)').appendTo('#Mordor');
   $('<div id="mount-doom"></div>').appendTo('#Mordor');
};

var weWantsIt = function () {
  // Create a div with an id of `'gollum'` and add it to Mordor
  // Remove `the ring` from `Frodo` and give it to `Gollum`
  // Move Gollum into Mount Doom
  $('<div id="Gollum"></div>').appendTo('#Mordor');
  $('#the-ring').appendTo('#Gollum');
  $('#Gollum').appendTo('#mount-doom');
};

var thereAndBackAgain = function () {
   // remove `Gollum` and `the Ring` from the document
   // Move all the `hobbits` back to `the shire`
   $('#Gollum').remove();
   $('#the-ring').remove();
   $('.hobbit').appendTo('#middle-earth article:eq(0)');
};
