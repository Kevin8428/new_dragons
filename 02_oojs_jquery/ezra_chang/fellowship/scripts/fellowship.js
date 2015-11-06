console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo_Baggins',
  "Samwise_Gamgee",
  'Meriadoc_Brandybuck',
  'Peregrin_Took'
];

var buddies = [
  'Gandalf_the_Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The_Shire', 'Rivendell', 'Mordor'];
var body = document.body;

// Problem 1: Make Middle-Earth

var makeMiddleEarth = function () {
   // create a section tag with an id of `middle-earth`
   // add each land as an `article` tag
   // inside each `article` tag include an `h1` with the name of the land
   // append `middle-earth` to your document `body`

   $('body').append('<section id=\'middle-earth\'></section>');
   for (var i = 0; i < lands.length; i++) {
     $('#middle-earth').append('<article ' + 'id="' + lands[i] + '"><h1>' + lands[i] + '</h1></article>');
   }

};



// Problem 2: Make Hobbits

var makeHobbits = function () {
   // display an `unordered list` of hobbits in the shire
      // (which is the second article tag on the page)
   // give each hobbit a class of `hobbit`
   $('#The_Shire').append('<ul class="hobbits"></ul>');

   for (var i = 0; i < hobbits.length; i += 1) {
     $('.hobbits').append('<li id="' + hobbits[i] + '">' + hobbits[i] + '</li>');
   };
};



// Problem 3: Precious

var keepItSecretKeepItSafe = function () {
   // create a div with an id of `'the-ring'`
   // give the div a class of `'magic-imbued-jewelry'`
   // add the ring as a child of `Frodo`
   $('#Frodo_Baggins').append('<div id="the-ring" class="magic-imbued-jewelry"></div>');
};



// Problem 4: Make Buddies

var makeBuddies = function () {
   // create an `aside` tag
   // attach an `unordered list` of the `'buddies'` in the aside
   // insert your aside as a child element of `rivendell`
   $('#Rivendell').append('<ul class="buddies"></ul>');

   for (var i = 0; i < buddies.length; i++) {
     $('.buddies').append('<li id="' + buddies[i] + '">' + buddies[i] + '</li>');
   };
};



// Problem 5: Aragorn

var beautifulStranger = function () {
   // change the `'Strider'` text to `'Aragorn'`

   for (var i = 0; i < buddies.length; i++) {
     if (buddies[i] == 'Strider') {
       buddies[i] = 'Aragorn';
     };
     $('#Strider').remove();
   };
   $('.buddies').append('<li id="Aragorn">Aragorn</li>');
};



// Problem 6: Hobbits Leave the Shire

var leaveTheShire = function () {
   // assemble the `hobbits` and move them to `rivendell`
  //  $('.hobbits').remove();
  $('.hobbits').appendTo('#Rivendell');
};



// Problem 7: Forge the Fellowship

var forgeTheFellowShip = function () {
   // create a new div called `'the-fellowship'` within `rivendell`
   // add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
   // after each character is added make an alert that they // have joined your party

   $('#Rivendell').append('<div id="the-fellowship"></div>');


    $('.hobbits').each(function() {
      $(this).appendTo( "#Rivendell" );
    });
    $('.buddies').each(function() {
      $(this).appendTo( "#Rivendell" );
    });

    //  For some reason these alerts are firing twice.

    //  for (var i = 0; i < hobbits.length; i++) {
    //    alert(hobbits[i] + ' has joined the Fellowship!');
    //  };
    //  for (var i = 0; i < buddies.length; i++) {
    //    alert(buddies[i] + ' has joined the Fellowship!');
    //  };
};



// Problem 8: Balrog

var theBalrog = function () {
   // change the `'Gandalf'` text to `'Gandalf the White'`
   // apply the following style to the element, make the // background 'white', add a grey border
   $('#Gandalf_the_Grey').remove();
   $('.buddies').prepend('<li id="Gandalf_the_White">Gandalf_the_White</li>');
   $('#Gandalf_the_White').css({'background-color': 'white', 'border': '1px solid grey', 'color': 'grey'});

};



// Problem 9: Horn of Gondor

var hornOfGondor = function () {
   // pop up an alert that the horn of gondor has been blown
   // Boromir's been killed by the Uruk-hai!
   // Remove `Boromir` from the Fellowship

  //  For some reason this alert is firing twice, as well.

  //  alert('The Horn of Gondor has been blown!');
   $('#Boromir').remove();
};



// Problem 10: Party Split

var itsDangerousToGoAlone = function (){
   // take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
   // add a div with an id of `'mount-doom'` to `Mordor`
   $('#Frodo_Baggins').appendTo('#Mordor');

   $("#Samwise_Gamgee").appendTo('#Mordor');
   $('#Mordor').append('<div id="Mount_Doom">Mount Doom</div>')
};



// Problem 11: gollum

var weWantsIt = function () {
  // Create a div with an id of `'gollum'` and add it to Mordor
  // Remove `the ring` from `Frodo` and give it to `Gollum`
  // Move Gollum into Mount Doom
  $('#Mordor').append('<div id="Gollum">Gollum</div>');
  $('#the-ring').appendTo('#Gollum');

  $('#Gollum').appendTo('#Mount_Doom')
};



// Problem 12: There and Back Again

var thereAndBackAgain = function () {
   // remove `Gollum` and `the Ring` from the document
   // Move all the `hobbits` back to `the shire`
   $('#Gollum').remove();
   $('.hobbits').remove();
   $('#Frodo_Baggins').remove();
   $('#Samwise_Gamgee').remove();
   makeHobbits();

};


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
