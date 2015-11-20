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

  // we don't need a var to hold body with jQuery.
  // var body = document.querySelector('body');

  // Chapter 1
  function makeMiddleEarth() {
        // create a section tag with an id of middle-earth
        // add each land as an article tag
        // inside each article tag include an h1 with the name of the land
        // append middle-earth to your document body
        var middleEarth = "<section id ='middleEarth'></section>";
        $('body').append(middleEarth);
          for(i=0;i<lands.length;i++){
            var land= lands[i];
            var earth = "<article><h1>" + land + "</h1></article>";
            console.log(land)
            $("#middleEarth").append(earth);
          }
  }

  makeMiddleEarth();
  var theShire = $('article').eq(0);
  var rivendell = $('article').eq(1);
  var mordor = $('article').eq(2);;

  // Chapter 2
  function makeHobbits(){
    var hobbitList = $('<ul>');
    theShire.append(hobbitList);
    // display an unordered list of hobbits in the shire (which is the first article tag on the page)
    // give each hobbit a class of hobbit
    for(i=0; i<hobbits.length; i++){
      console.log(hobbits[i]);
      var currentHobbit = "<li class = 'hobbit'>" + hobbits[i] + "</li>"
      hobbitList.append(currentHobbit);
    }
  }
  makeHobbits();

  var frodo = $('li').eq(0);

  // Chapter 3
  function keepItSecretKeepItSafe() {
    // create a div with an id of 'the-ring'
    // give the div a class of 'magic-imbued-jewelry'
    // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
    // theRing.addEventListener('click', nazgulScreech);
    // add the ring as a child of Frodo

    var theRing = $('<div>');
    theRing.attr('id','the-ring');
    theRing.addClass('magic-imbued-jewelry');
    frodo.append(theRing);

  }

  keepItSecretKeepItSafe();


  // Chapter 4
  var buddiesAside = $('aside').eq[0];
  function makeBuddies() {
    // create an aside tag
    // attach an unordered list of the 'buddies' in the aside
    // insert your aside as a child element of rivendell
    var buddiesAside = "<aside id = budAside></aside>";
    rivendell.append(buddiesAside);
    for(i=0; i<buddies.length; i++){
      var currentBuddy = "<li>" + buddies[i] + "</li>";
      console.log(currentBuddy);
      $("#budAside").append(currentBuddy);
    }
  }

  makeBuddies();

  // Chapter 5
  var strider = rivendell.find('li').eq(3);
  function beautifulStranger() {
    // change the 'Strider' text to 'Aragorn'
    //$('#budAside li:nth-child(4)').append("<p>test</p>") --this selects fourth li in budAside
    strider.text('aragorn');
  }

  beautifulStranger();

  // Chapter 6

  function leaveTheShire() {
    // assemble the hobbits and move them to Rivendell
    //$('li').eq(4).append("<p>test</p>") --this selects fourth li in whole DOM
    $("#budAside").append(theShire.find('li').eq(0));
    $("#budAside").append(theShire.find('li').eq(0));
    $("#budAside").append(theShire.find('li').eq(0));
    $("#budAside").append(theShire.find('li').eq(0));
  }
  leaveTheShire();



  // Chapter 7

  var fellowshipMembers = rivendell.find('li');

  function forgeTheFellowShip() {
    // create a new div called 'the-fellowship' within rivendell
    // add each hobbit and buddy one at a time to 'the-fellowship'
    // after each character is added make an alert that they have joined your party

    //var theFellowship = "<div id = theFellowship>the fellowship</div>";//one way to make fellowship div

    var theFellowship = $('<div>');
    theFellowship.attr('id', 'theFellowship');//this is another way to make the fellwoship div
    rivendell.append(theFellowship);
    for(i=0; i<('#budAside').length; i++){
      // $('#theFellowship').append($('#budAside'));//--this will move the whole aside into the fellowship
      //$('#theFellowship').append($('#budAside').find('li').eq(0)); --this way works
      theFellowship.append(fellowshipMembers.eq(i)); //this is the best way
      //alert(fellowshipMembers.eq(i).text() + ' has been added');
    }
  }

  forgeTheFellowShip();

  // Chapter 8
  // var gandalfVar = rivendell.find('li').eq(0);
  // console.log(rivendell.find('li').eq(1));
  // function theBalrog() {
  //   // change the 'Gandalf' textNode to 'Gandalf the White'
  //   // apply style to the element
  //   // make the background 'white', add a grey border
  //   gandalfVar.text('gandalf the white');
  // }
  //
  // theBalrog();




  var gandalfVar = rivendell.find('li').eq(0);
  console.log(gandalfVar.text())
  function theBalrog() {
    // change the 'Gandalf' textNode to 'Gandalf the White'
    // apply style to the element
    // make the background 'white', add a grey border
    gandalfVar.text('gandalf the white');
    gandalfVar.css('border', '3px solid grey');
    gandalfVar.css('background-color', 'white');
  }

  theBalrog();

  // Chapter 9
  var boromirVar = rivendell.find('li').eq(4);
  function hornOfGondor() {
    // pop up an alert that the horn of gondor has been blown
    // put a linethrough on boromir's name
    // Remove Boromir from the Fellowship
    boromirVar.css('text-decoration', 'line-through');
    rivendell.append(boromirVar);
    alert('horn has been blown');
  }

  hornOfGondor();



$('li').eq(0);

  // Chapter 10
  var mountDoom = $('<div>');
  mountDoom.attr('id','mountDoom');
  var sam = $('#theFellowship').find('li').eq(5);
  var frodo = $('#theFellowship').find('li').eq(4);
  function itsDangerousToGoAlone() {
    // take Frodo and Sam out of the fellowship and move them to Mordor
    // add a div with an id of 'mount-doom' to Mordor
    mordor.append(mountDoom);
    mountDoom.text('mountDoom');
    mordor.append(sam);
    mordor.append(frodo);
  }

  itsDangerousToGoAlone();

  var gollum, theRing;

  // Chapter 11
  var gollum = $('<div>');
  gollum.attr('id', 'gollum');
  function weWantsIt() {
    // Create a div with an id of 'gollum' and add it to Mordor
    // Remove the ring from Frodo and give it to Gollum
    // Move Gollum into Mount Doom
    mordor.append(gollum);
    gollum.append($('#the-ring'));
    mountDoom.append(gollum);
  }

  weWantsIt();

  // Chapter 12

  function thereAndBackAgain() {
    // remove Gollum and the Ring from the document
    // Move all the hobbits back to the shire
    gollum.remove();

    var hobbitUL = $('ul');
    var hobbits = $('.hobbit');
    console.log(hobbits);
    for(i=0; i<hobbits.length; i++){
      hobbitUL.append(hobbits[i]);
    }
    console.log(hobbitUL);


}
  thereAndBackAgain();














  //
