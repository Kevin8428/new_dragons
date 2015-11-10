

//////////////////////////////////////////////////
//////////// NOTES FROM IN CLASS ANSWERS /////////
//////////////////////////////////////////////////
// fellowshipMembers.eq(i).text()  // li i text (not all html, just text) from fellowshipMembers
// see video or posted code for answers

// create vars for "1 thing 1 place" rule
// var mountDoom = $('<div>');
// mountDoom.prop('id', 'mount-doom');
// mordor.append(mountDoom);

//  frodo global var find chiild element id the-ring
//theRing = frodo.find('#the-ring').eq(0);


// declare some variables outside functions for global access
// preferably all globals at top of page 

// put all items in class of hobbits into an Array
// var hobbits = $('.hobbit');
// then use for loop to iterate and do things with them


/////////////////////////////////////////////
////////////Starter Code   ///////////////////
//////////////////////////////////////////////


$(document).ready(function() {

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

/////////////////////////////////////////////
////////////jQuery Exercise Homework ////////
//////////////////////////////////////////////

var makeMiddleEarth = function() {
   $('body').append("<section id='middle-earth'><h1>Middle Earth</h1></section>");
   $('#middle-earth').append('<article id="theshire"><h1>' + lands[0] + '</h1></article>');
   $('#middle-earth').append('<article id="rivendell"><h1>' + lands[1] + '</h1></article>');
   $('#middle-earth').append('<article id="mordor"><h1>' + lands[2] + '</h1></article>');
   // for (var i = 0; i < lands.length; i++) {
   //    $('#middle-earth').append('<article><h1>' + lands[i] + '</h1></article>');
}; // end makeMiddleEarth
makeMiddleEarth();

var makeHobbits = function (makeLocation) {
   // THIS ADDS A REDUNDANT UL TO MAKELOCATION ELEMENT
   // $(makeLocation).append('<ul></ul>');
   // $('ul').append('<li class="hobbit" id="Frodo">' + hobbits[0] + '</li>');
   // $('ul').append('<li class="hobbit">' + hobbits[1] + '</li>');
   // $('ul').append('<li class="hobbit">' + hobbits[2] + '</li>');
   // $('ul').append('<li class="hobbit">' + hobbits[3] + '</li>');
   //THIS SHOULD JUST PUT LI'S INTO MAKELOCATION, SO I SELECT THE UL
   $(makeLocation).append('<li class="hobbit" id="Frodo">' + hobbits[0] + '</li>');
   $(makeLocation).append('<li class="hobbit">' + hobbits[1] + '</li>');
   $(makeLocation).append('<li class="hobbit">' + hobbits[2] + '</li>');
   $(makeLocation).append('<li class="hobbit">' + hobbits[3] + '</li>');
}; //end makeHobbits
makeHobbits('#theshire');

var keepItSecretKeepItSafe = function() {
   $('#Frodo').append('<div class="magic-imbued-jewelry" id="the ring"></div>');
};
keepItSecretKeepItSafe();

var makeBuddies = function () {
   $('#rivendell').append('<aside></aside>');
   $('aside').append('<ul id="rivendellList"></ul>');
   $('aside ul').append('<li>' + buddies[0] + '</li>');
   $('aside ul').append('<li>' + buddies[1] + '</li>');
   $('aside ul').append('<li>' + buddies[2] + '</li>');
   $('aside ul').append('<li>' + buddies[3] + '</li>');
   $('aside ul').append('<li>' + buddies[4] + '</li>');
};
makeBuddies();

var beautifulStranger = function() {
   // console.log(buddies[3]);
   // $('buddies[3]').replaceWith("Aragorn");
// ?????????????????????????????????????????????????????
//ABOVE NO WORK SINCE NOT TARGETIN "DOM ELEMENT"?  SO INSTEAD USE:
   $('aside ul li:nth-child(4)').replaceWith('<li>Aragorn</li>');
   // .eq(0) same as nth-child(0) except eq index starts w zero
};
beautifulStranger();

var leaveTheShire = function (depart, assemble) {
   $(depart).remove();
   makeHobbits(assemble);
   console.log('leaveTheShire is running');
   // or map
};
leaveTheShire('#theshire li', '#rivendellList');



var forgeTheFellowship = function () {
   $('#rivendell').append('<div id="the-fellowship"></div>');
   // iterate each li of rivList pusihing it (to end of ) > arr
   var arr = new Array();
   $('#rivendellList li').each(function() {
     arr.push(this.innerHTML);
   })
   console.log(arr);
   //remove all li's from rivList
   $('#rivendellList').remove();
   //riterate thru arr(ay) and append 1 by 1 as list items
   //to the fellowship, alerting with each append

   //append a ul to the fellowship  to put li's in so can reference them later with nth child
   $('#the-fellowship').append('<ul></ul>');

   for (var i = 0; i < arr.length; i++) {
      $('#the-fellowship ul').append('<li>' + arr[i] + '</li>');
      alert(arr[i] + ' has joined the party.');
   };
}; // end forgeTheFellowship
forgeTheFellowship();



var theBalrog = function() {
   //select gandlalf the grey (first li in thefellowship)
   $('#the-fellowship ul li:nth-child(1)').replaceWith('<li>Gandalf the White</li>');
   $('#the-fellowship ul li:nth-child(1)').css({'background': 'white', 'border': '2px solid grey', 'width':'5em'});
}; // end theBalrog
theBalrog();















}); //////////////////////////////////////////
//////////// end document.ready() ////////////
//////////////////////////////////////////////
