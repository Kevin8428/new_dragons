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
   // create a section tag with an id of `middle-earth`
   // add each land as an `article` tag
   // inside each `article` tag include an `h1` with the name of the land
   // append `middle-earth` to your document `body`
   var middleEarth = "<section id='middle-earth'></section>";
   $('body').append(middleEarth);
  function places(){
    for(i=0;i<lands.length;i++){
        var land= lands[i];
        var earth = "<article><h1>" + land + "</h1></article>";
        console.log(land)
      $("#middle-earth").append(earth);
    }
  }
  places();

};

makeMiddleEarth();

var makeHobbits = function () {
   // display an `unordered list` of hobbits in the shire
      // (which is the second article tag on the page)
   // give each hobbit a class of `hobbit`

   var shire = $('article')[0];
   var hobs = $(shire).append("<ul>");
   console.log(shire);
   for (i=0;i < hobbits.length; i++){
     var hobbitList = "<li class='hobbit'>" + hobbits[i] +"</li>";
     console.log(hobbitList);
     var ul = $('ul')[0];
     console.log(ul);

     $(ul).append(hobbitList);
   }
};
makeHobbits();

var keepItSecretKeepItSafe = function () {
   // create a div with an id of `'the-ring'`
   // give the div a class of `'magic-imbued-jewelry'`
   // add the ring as a child of `Frodo`
   var ring = "<div id='the-ring' class='magic-imbued-jewelry'></div>";
   var frodo = $('.hobbit')[0];
   $(frodo).append(ring);
};
keepItSecretKeepItSafe();

var makeBuddies = function () {
   // create an `aside` tag
   // attach an `unordered list` of the `'buddies'` in the aside
   // insert your aside as a child element of `rivendell`
   var riv = $('article')[1];
   var side = $(riv).append("<aside>");
   var unordered = $(side).append("<ul>");
   console.log(riv);
   //var rivside = $(riv).append(side);
   for (i=0;i<buddies.length;i++){
     var buds = "<li>" + buddies[i] +"</li>";
     var aside = $('aside')[0];
     var ul = $('ul')[1];
     var ubuds = $(ul).append(buds);
     $(aside).append(ubuds);

   }
};
makeBuddies();

var beautifulStranger = function () {
   //change the `'Strider'` text to `'Aragorn'`
   var strider = $('li')[7];//need to select the DOM of strider, not in this file
   var aragorn = "<li>Aragorn</li>"
   console.log(strider);
   $(strider).replaceWith(aragorn);
};
beautifulStranger();

var leaveTheShire = function () {
   // assemble the `hobbits` and move them to `rivendell`

  $('.hobbit').appendTo('article:nth-child(2) aside ul')
};
leaveTheShire();

var forgeTheFellowShip = function () {
   // create a new div called `'the-fellowship'` within `rivendell`
   // add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
   // after each character is added make an alert that they // have joined your party
   var riv = $('article')[1];
   var fellowship = "<div id='the-fellowship'></div>"

   var fellows = $(riv).append(fellowship);
   console.log(riv);
   var fellows = $('li');
   console.log(fellows[0].innerHTML);
   for(i=0;i<fellows.length;i++){
     $('#the-fellowship').append(fellows[i]);
     if(i == 5) {
       alert("Frodo has joined The Fellowship");
     } else {
     alert((fellows[i].innerHTML) + " has joined The Fellowship");
    }
   }
console.log(riv);
 };
forgeTheFellowShip();

var theBalrog = function () {
   // change the `'Gandalf'` text to `'Gandalf the White'`
   // apply the following style to the element, make the // background 'white', add a grey border
   var gandalf = $('div li:nth-child(1)').replaceWith('<li>Gandalf the White</li>');
   console.log(gandalf);
   $('div li:nth-child(1)').css('background', 'white');
   $('div li:nth-child(1)').css('border', '3px solid grey');

};
theBalrog();

var hornOfGondor = function () {
   // pop up an alert that the horn of gondor has been blown
   // Boromir's been killed by the Uruk-hai!
   // Remove `Boromir` from the Fellowship
   alert("The Horn of Gondor has been blown!");
   $('div li:nth-child(5)').remove();
};
hornOfGondor();

var itsDangerousToGoAlone = function (){
   // take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
   // add a div with an id of `'mount-doom'` to `Mordor`
   var pals = $('li');
   var mordor = $('article')[2];
   var riv = $('article')[1];
   console.log(riv);
   for(i=4;i<6;i++) {
     $(mordor).append(pals[i]);
   }
   $('article:nth-child(3)').append("<div id='mount-doom'></div>");

};
itsDangerousToGoAlone();

var weWantsIt = function () {
  // Create a div with an id of `'gollum'` and add it to Mordor
  // Remove `the ring` from `Frodo` and give it to `Gollum`
  // Move Gollum into Mount Doom
  var mordor = $('article')[2];
  var ring = "<div id='the-ring' class='magic-imbued-jewelry'></div>";
  $('#mount-doom').append("<div id='gollum'></div>");
  $('#the-ring').remove();
  $('#gollum').append(ring);
  console.log(mordor);
};
weWantsIt();
var thereAndBackAgain = function () {
   // remove `Gollum` and `the Ring` from the document
   // Move all the `hobbits` back to `the shire`
   $('#gollum').remove();
   $('.hobbit').appendTo('article:nth-child(1)');
};
thereAndBackAgain();
