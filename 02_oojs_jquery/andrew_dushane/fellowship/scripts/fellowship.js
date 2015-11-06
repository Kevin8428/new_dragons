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
   var middleEarth = $('<section></section>');
   middleEarth.prop('id', 'middle-earth');
   for( i = 0; i < lands.length; i++ ) {
     var land = $('<article></article>');
     land.append('<h1>' + lands[i] + '</h1>');
     middleEarth.append(land);
   }
   $('body').append(middleEarth);
};
makeMiddleEarth();

var makeHobbits = function () {
   // display an `unordered list` of hobbits in the shire
      // (which is the second article tag on the page)
   // give each hobbit a class of `hobbit`
   var hobbitElem = $('<ul></ul>');
   for( i = 0; i < hobbits.length; i++ ) {
     var hobbitLi = $('<li>' + hobbits[i] + '</li>');
     hobbitElem.append(hobbitLi);
   }
   $('body article:nth-child(1)').append(hobbitElem);
};
makeHobbits();

var keepItSecretKeepItSafe = function () {
   // create a div with an id of `'the-ring'`
   // give the div a class of `'magic-imbued-jewelry'`
   // add the ring as a child of `Frodo`
   var secretElem = $('<div></div>');
   secretElem.prop('class', 'magic-imbued-jewelry');
   $('#middle-earth article:first-child ul li:first-child').append(secretElem);
};
keepItSecretKeepItSafe();

var makeBuddies = function () {
   // create an `aside` tag
   // attach an `unordered list` of the `'buddies'` in the aside
   // insert your aside as a child element of `rivendell`
   var buddiesParent = $('<aside></aside>');
   var buddiesElem = $('<ul></ul>');
   buddiesParent.append(buddiesElem);
   for( i = 0; i < buddies.length; i++ ) {
     var buddy = $('<li>' + buddies[i] + '</li>');
     buddiesElem.append(buddy);
   }
   $('body article:nth-child(2)').append(buddiesElem);
};
makeBuddies();

var beautifulStranger = function () {
   // change the `'Strider'` text to `'Aragorn'`
   $('article:nth-child(2) li:nth-child(4)').html('Aragorn');
};
beautifulStranger();

var leaveTheShire = function () {
   // assemble the `hobbits` and move them to `rivendell`
   var hobbits = $('article:first-child ul');
   hobbits.detach();
   $('#middle-earth > article:nth-child(2) > ul').append(hobbits.children());
};
leaveTheShire();

var forgeTheFellowShip = function () {
   // create a new div called `'the-fellowship'` within `rivendell`
   // add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
   // after each character is added make an alert that they // have joined your party
   var fellowshipElem = $('<div></div>');
   fellowshipElem.id = 'the-fellowship';
   $('body article:nth-child(2)').append(fellowshipElem);
   var rivendell = $('article:nth-child(2) ul li');
   rivendell.each( function() {
     fellowshipElem.append($(this));
     //alert($(this).text() + ' added.');
   });
};
forgeTheFellowShip();

var theBalrog = function () {
   // change the `'Gandalf'` text to `'Gandalf the White'`
   // apply the following style to the element, make the // background 'white', add a grey border
   var gandalf = $('#middle-earth > article:nth-child(2) > div > li:nth-child(1)');
   gandalf.text('Gandalf the White');
   gandalf.css({ 'background': 'white', 'border': '1px solid #333'})
};
theBalrog();

var hornOfGondor = function () {
   // pop up an alert that the horn of gondor has been blown
   // Boromir's been killed by the Uruk-hai!
   // Remove `Boromir` from the Fellowship
   //alert('The horn of Gondor has sounded.');
   $('#middle-earth > article:nth-child(2) > div > li:nth-child(5)').remove();
};
hornOfGondor();

var itsDangerousToGoAlone = function () {
   // take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
   // add a div with an id of `'mount-doom'` to `Mordor`
   var frodo = $('#middle-earth > article:nth-child(2)').find("li:contains('Frodo')");
   frodo.detach();
   var sam = $('#middle-earth > article:nth-child(2)').find("li:contains('Sam')");
   sam.detach();
   var mordor = $('#middle-earth > article:nth-child(3)');
   mordor.append(frodo);
   mordor.append(sam);
   var doom = $('<div></div>');
   doom.prop('id', 'mount-doom');
   mordor.append(doom);
};
itsDangerousToGoAlone();

var weWantsIt = function () {
  // Create a div with an id of `'gollum'` and add it to Mordor
  // Remove `the ring` from `Frodo` and give it to `Gollum`
  // Move Gollum into Mount Doom
  var gollum = $('<div></div>');
  gollum.prop('id', 'gollum');
  
};
weWantsIt();

var thereAndBackAgain = function () {
   // remove `Gollum` and `the Ring` from the document
   // Move all the `hobbits` back to `the shire`
};
thereAndBackAgain();
