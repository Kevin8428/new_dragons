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

var shire = null;
var rivendell = null;
var mordor = null;


var makeMiddleEarth = function () {
  // create a section tag with an id of `middle-earth`
  // add each land as an `article` tag
  // inside each `article` tag include an `h1` with the name of the land
  // append `middle-earth` to your document `body`
    $("<section id='middle-earth'></section>").appendTo("body");
    for (var i = 0; i < lands.length; i++) {
      $("<article><h1>" + lands[i] + "</h1></article>").appendTo("#middle-earth");
    };
};

makeMiddleEarth();


var makeHobbits = function () {
   // display an `unordered list` of hobbits in the shire
      // (which is the second article tag on the page)
   // give each hobbit a class of `hobbit`
   shire = "#middle-earth article:nth-child(1)"
   $("<ul></ul>").appendTo(shire);
   for (var i = 0; i < hobbits.length; i++) {
     $("<li class='hobbit'>" + hobbits[i] + "</li>").appendTo("ul:eq(0)");
   };
};

makeHobbits();


var keepItSecretKeepItSafe = function () {
   // create a div with an id of `'the-ring'`
   // give the div a class of `'magic-imbued-jewelry'`
   // add the ring as a child of `Frodo`
   $("<div id='the-ring' class='magic-imbued-jewelry'></div>").appendTo(".hobbit:nth-child(1)");
};

keepItSecretKeepItSafe();


var makeBuddies = function () {
   // create an `aside` tag
   // attach an `unordered list` of the `'buddies'` in the aside
   // insert your aside as a child element of `rivendell`
   rivendell = "#middle-earth article:nth-child(2)";
   $("<aside><ul class='buddies'></ul></aside>").appendTo(rivendell);
   for (var i = 0; i < buddies.length; i++) {
     $("<li class='buddy'>" + buddies[i] + "</li>").appendTo("ul:eq(1)");
   }
};

makeBuddies();


var beautifulStranger = function () {
   // change the `'Strider'` text to `'Aragorn'`
   $(".buddy:nth-child(4)").text("Aragorn");
};

beautifulStranger();


var leaveTheShire = function () {
   // assemble the `hobbits` and move them to `rivendell`
   var hobbitPals = $("ul:eq(0)").detach();
   var buddiesParent = $(".buddies").closest("aside")
   hobbitPals.appendTo(buddiesParent);
  //  hobbitPals.appendTo("#middle-earth article:nth-child(2)");
};

leaveTheShire();


var forgeTheFellowShip = function () {
   // create a new div called `'the-fellowship'` within `rivendell`
   // add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
   // after each character is added make an alert that they // have joined your party
   $("<div id='the-fellowship'></div>").appendTo(rivendell);

   $('.buddy').each(function(i) {
     console.log(i, $(this).text());
       var buddy = $(this).detach();
       buddy.appendTo("#the-fellowship");
       alert($(this).text() + " has joined the fellowship!");
   });

   $('.hobbit').each(function(i) {
     console.log(i, $(this).text());
       var hobbit = $(this).detach();
       hobbit.appendTo("#the-fellowship");
       alert($(this).text() + " has joined the fellowship!");
   });

};

forgeTheFellowShip();


var theBalrog = function () {
   // change the `'Gandalf'` text to `'Gandalf the White'`
   // apply the following style to the element, make the // background 'white', add a grey border
   console.log("balrog");
   var GandalfElement = $("#the-fellowship").find(":contains('Gandalf the Grey')");
   GandalfElement.text("Gandalf the White");
   GandalfElement.css("background", "white");
   GandalfElement.css("border", "grey");
};

theBalrog();


var hornOfGondor = function () {
   // pop up an alert that the horn of gondor has been blown
   // Boromir's been killed by the Uruk-hai!
   // Remove `Boromir` from the Fellowship
   alert("The horn of Gondor has been blown!");
   alert("Boromir has been killed by the Uruk-hai!!!");
   $("#the-fellowship").find(":contains('Boromir')").detach();
};

hornOfGondor();


var itsDangerousToGoAlone = function (){
   // take `Frodo` and `Sam` out of the fellowship and move
   // them to `Mordor`
   // add a div with an id of `'mount-doom'` to `Mordor`
   mordor = "#middle-earth article:nth-child(3)";
   $('.hobbit').each(function(i) {
      if (($(this).text() == $("#the-fellowship").find(":contains('Sam')").text()) ||
      ($(this).text() == $("#the-fellowship").find(":contains('Frodo')").text())) {
        var hobbit = $(this).detach();
        hobbit.appendTo(mordor);
      };
   });

   $("<div id='mount-doom'></div>").appendTo(mordor);
};

itsDangerousToGoAlone();



var weWantsIt = function () {
  // Create a div with an id of `'gollum'` and add it to Mordor
  // Remove `the ring` from `Frodo` and give it to `Gollum`
  // Move Gollum into Mount Doom
  $("<div id='gollum'></div>").appendTo(mordor);
  var theRing = $("#the-ring").detach();
  theRing.appendTo("#gollum");
  $("#gollum").detach().appendTo("#mount-doom");

};

weWantsIt();



var thereAndBackAgain = function () {
   // remove `Gollum` and `the Ring` from the document
   // Move all the `hobbits` back to `the shire`
   $("#gollum").remove();
   $("#the-ring").remove();

   $('.hobbit').each(function(i) {
     console.log(i, $(this).text());
       var hobbit = $(this).detach();
       hobbit.appendTo(shire);
       alert($(this).text() + " has returned to the Shire!");
   });
};

thereAndBackAgain();
