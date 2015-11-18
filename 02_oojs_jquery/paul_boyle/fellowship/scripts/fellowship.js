$(document).ready(function(){
  console.log("Linked.");


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


  var makeMiddleEarth = function () {
     // create a section tag with an id of `middle-earth`
     // add each land as an `article` tag
     // inside each `article` tag include an `h1` with the name of the land
     // append `middle-earth` to your document `body`
     var section='<section id="middle-earth"></section>'
     $('body').html(section);
     for (var land in lands){
       console.log(lands[land]);
       $('#middle-earth').append('<article><h1>'+lands[land]+'</h1></article>');
     }


  };


  var makeHobbits = function () {
     // display an `unordered list` of hobbits in the shire
        // (which is the second article tag on the page)
     // give each hobbit a class of `hobbit`

     for(var hobbit in hobbits){
       console.log(hobbits[hobbit]);
       $('#middle-earth article:first h1').append('<ul>'+hobbits[hobbit]+'</ul>');
     }
  };


  var keepItSecretKeepItSafe = function () {
     // create a div with an id of `'the-ring'`
     // give the div a class of `'magic-imbued-jewelry'`
     // add the ring as a child of `Frodo`
     $('#middle-earth:first h1 ul:first').append('<div id="the-ring" class="magic-imbued-jewelry"></div>');

  };


  var makeBuddies = function () {
     // create an `aside` tag
     // attach an `unordered list` of the `'buddies'` in the aside
     // insert your aside as a child element of `rivendell`


     for (var buddy in buddies){
       console.log(buddies[buddy]);
       $('#middle-earth article:nth-child(2) h1').append('<ul>'+buddies[buddy]);
     }

  };


  var beautifulStranger = function () {
     // change the `'Strider'` text to `'Aragorn'`



     $('#middle-earth > article:nth-child(2) > h1 > ul:nth-child(4)').html('Arragon');
  };


  var leaveTheShire = function () {
     // assemble the `hobbits` and move them to `rivendell`
    var hobbits=$('#middle-earth > article:nth-child(1) > h1 > ul').remove();
    $('#middle-earth > article:nth-child(2) > h1').append(hobbits);

  };


  var forgeTheFellowShip = function () {
     // create a new div called `'the-fellowship'` within `rivendell`
     // add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
     // after each character is added make an alert that they // have joined your party
  $('#middle-earth > article:nth-child(2) > h1').append('<div>the-fellowship</div>');

    var party=$('#middle-earth > article:nth-child(2) > h1 > ul').remove();
    // console.log(person,'has joined your party!');
    // console.log($('#middle-earth > article:nth-child(2) > h1 > ul:last-child()').html()+' has joined your party!');
    //  console.log(party[0]);


    for (var i = 0; i < party.length; i++) {

      var person = party[i].innerHTML;
      $('#middle-earth > article:nth-child(2) > h1 > div').append(party[i]);
      alert(person+' has joined your party!');
    }


  };

  var theBalrog = function () {
     // change the `'Gandalf'` text to `'Gandalf the White'`
     // apply the following style to the element, make the // background 'white', add a grey border
     $('#middle-earth > article:nth-child(2) > h1 > div > ul:nth-child(1)').remove();
     $('#middle-earth > article:nth-child(2) > h1 > div').append('<ul>Gandalf the White</ul>');
     $('#middle-earth > article:nth-child(2) > h1 > div > ul:nth-child(4)').remove();
     $('#middle-earth > article:nth-child(2) > h1 > div > ul:nth-child(8)').css('background','white');
     $('#middle-earth > article:nth-child(2) > h1 > div > ul:nth-child(8)').css('border','solid 1px gray');
     $('#middle-earth > article:nth-child(2) > h1 > div > ul:nth-child(8)').css('color','gray');


  };

  var hornOfGondor = function () {
     // pop up an alert that the horn of gondor has been blown
     // Boromir's been killed by the Uruk-hai!
     // Remove `Boromir` from the Fellowship
     alert('The Horn of Gondor has been blown');
     alert('Boromir has been killed by the Uruk-hai');


  };

  var itsDangerousToGoAlone = function (){
     // take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
     // add a div with an id of `'mount-doom'` to `Mordor`
     var frodo = $('#middle-earth > article:nth-child(2) > h1 > div > ul:nth-child(4)').remove();
     var sam = $('#middle-earth > article:nth-child(2) > h1 > div > ul:nth-child(4)').remove();

     console.log(frodo,sam);
     $('#middle-earth > article:nth-child(3) > h1').append(frodo);
     $('#middle-earth > article:nth-child(3) > h1').append(sam);
     $('#middle-earth > article:nth-child(3) > h1').append('<div id="mount-doom">Mount Doom</div>');



  };

  var weWantsIt = function () {
    // Create a div with an id of `'gollum'` and add it to Mordor
    // Remove `the ring` from `Frodo` and give it to `Gollum`
    // Move Gollum into Mount Doom

    var gollum='<div id="gollum">gollum</div>';
    $('#middle-earth > article:nth-child(3) > h1').append(gollum);
    var ring = $('#the-ring').remove();
    $('#gollum').append(ring);
    $('#mount-doom').append('#gollum');


 };

 var thereAndBackAgain = function () {
    // remove `Gollum` and `the Ring` from the document
    // Move all the `hobbits` back to `the shire`
    var frodo=$('#middle-earth > article:nth-child(3) > h1 > ul:nth-child(1)').remove();
    var sam=$('#middle-earth > article:nth-child(3) > h1 > ul:nth-child(1)').remove();
    var meriadoc=$('#middle-earth > article:nth-child(2) > h1 > div > ul:nth-child(4)').remove();
    var peregrin=$('#middle-earth > article:nth-child(2) > h1 > div > ul:nth-child(4)').remove();

    $('#mount-doom').text('Mount Doom');
    $('#gollum').remove();
    hobbits=[frodo,sam,meriadoc,peregrin];

    for(var hobbit in hobbits){
      $('#middle-earth > article:nth-child(1) > h1').append(hobbits[hobbit]);
    }

 };
