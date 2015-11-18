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

//--------------------------part 1

var middleEarth = "<section id='middle-earth'></section>";
$('body').append(middleEarth);

function addLand(){
  for(i=0; i<lands.length;i++){
    //var land = lands[i];
    var land = "<article> <h1> " + lands[i]+"</article> </h1>";
    //console.log(land);
    $('#middle-earth').append(land);
  }
}
addLand();


//.text is equal to innerText




//--------------------------part 2

var makeHobbits = function () {
   // display an `unordered list` of hobbits in the shire
   // (which is the second article tag on the page)
   // give each hobbit a class of `hobbit`

   $('article:nth-child(1)').append('<ul></ul');

   for (var i in hobbits){
     $('ul').append("<li class = 'hobbit'>" + hobbits[i] + "</li")
   }


};
makeHobbits();

//--------------------------part 3





var keepItSecretKeepItSafe = function () {


   //$('article:nth-child(1)').append('test');


   //var shire = $('article')[0];

   //var theRing = "<div id ='the-ring' class = 'magic-imbeud-jewelry'></div>";
  var theRing = ("<div id = 'the-ring' class='magic-imbeud-jewelry'></div>");
  //$('ul li:first-child').append("<div id='the-ring' class='magic-imbeud-jewelry'></div>");
  $('ul li:first-child').append(theRing);

   //$(shire).append(theRing);

};
keepItSecretKeepItSafe();

//-------------------------------part 4

var makeBuddies = function () {
   // create an `aside` tag
   // attach an `unordered list` of the `'buddies'` in the aside
   // insert your aside as a child element of `rivendell`
var asideTag = "<aside></aside>";
$('article:nth-child(2)').append(asideTag);
$('aside').append('<ul></ul');
for(i=0; i<buddies.length; i++){
    $('aside ul:nth-child(1)').append('<li>' + buddies[i] + '</li>');
}
};

makeBuddies();

var beautifulStranger = function () {
   // change the `'Strider'` text to `'Aragorn'`
   $('aside ul li:nth-child(4)').replaceWith('<li>Aragorn</li>');

};
beautifulStranger();

var leaveTheShire = function () {
   // assemble the `hobbits` and move them to `rivendell`
  //$('article ul li:nth-child(2)').append('<p></p>');
  $('.hobbit').appendTo('article:nth-child(2) aside ul')

};
leaveTheShire();

//
var forgeTheFellowShip = function(){
  $('article:nth-child(2)').prepend("<div id=theFellowship><h1>the-fellowship</h1></div>");
  $('article:nth-child(2) aside ul li:nth-child(9)').appendTo('article:nth-child(2) #theFellowship');
  $('article:nth-child(2) aside ul li:nth-child(8)').appendTo('article:nth-child(2) #theFellowship');
  $('article:nth-child(2) aside ul li:nth-child(7)').appendTo('article:nth-child(2) #theFellowship');
  $('article:nth-child(2) aside ul li:nth-child(6)').appendTo('article:nth-child(2) #theFellowship');
  $('article:nth-child(2) aside ul li:nth-child(5)').appendTo('article:nth-child(2) #theFellowship');
  $('article:nth-child(2) aside ul li:nth-child(4)').appendTo('article:nth-child(2) #theFellowship');
  $('article:nth-child(2) aside ul li:nth-child(3)').appendTo('article:nth-child(2) #theFellowship');
  $('article:nth-child(2) aside ul li:nth-child(2)').appendTo('article:nth-child(2) #theFellowship');
  $('article:nth-child(2) aside ul li:nth-child(1)').appendTo('article:nth-child(2) #theFellowship');



}
//
  forgeTheFellowShip();









// var forgeTheFellowShip = function () {
//    // create a new div called `'the-fellowship'` within `rivendell`
//    // add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
//    // after each character is added make an alert that they // have joined your party
//
//    $('article:nth-child(2) aside').prepend("<div><h1>the-fellowship</h1></div>");
//    var x = $("article:nth-child(2) aside ul li").length
//    //console.log(x);
//    //var countOfHobbitsAndFriends = $("article:nth-child(2) aside ul li").length
//     for(i=1; i<x+1; i++){
//        console.log(i);
//           //var mover = $('article:nth-child(2) aside ul li:nth-child(' +[i] +')')
//           $('article:nth-child(2) aside ul li:nth-child(' +[i] +')').appendTo('article:nth-child(2) aside h1');
//      };
//
//
// };
//
//   forgeTheFellowShip();





//
