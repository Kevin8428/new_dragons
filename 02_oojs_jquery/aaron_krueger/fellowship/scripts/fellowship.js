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

var makeMiddleEarth = function(){

  //create body Selector
  var $body = $('body');
  //create middle-earth section into a variable
  var middleEarth = '<section id="middle-earth"></section>';
  //create appME to append middle earth to the body
  var appME = $body.append(middleEarth);
  //create $middEarth variable to store middle earth selector
  var $middEarth = $('#middle-earth');


  for (var i = 0; i < lands.length; i++) {
    $middEarth.append('<article>'+'<h1>' +lands[i] + '</h1>'+'</article>');
  }

}
var $shire = $('#middle-earth > article:nth-child(1)');

var makeHobbits = function(){
  var shire = $('#middle-earth > article:nth-child(1)');
  var hobbitList = $('<ul>');
  for(var i = 0; i < hobbits.length; i++){
    hobbitList.append('<li class="hobbit">'+hobbits[i]+'</li>')
  }
  shire.append(hobbitList);
}

var frodo = $('#middle-earth > article:nth-child(1) > ul > li:nth-child(1)');

var keepItSecretKeepItSafe = function(){
   var theRing = '<div id="the-ring" class="magic-imbued-jewelry"></div>';
   var $frodo = '#middle-earth > article:nth-child(1) > ul > li:nth-child(1)';
   $($frodo).append(theRing);;
}
var makeBuddies = function(){
  var mkBdsHolder = '<aside></aside>';
  var buddiesList = $('<ul>');
  $('#middle-earth > article:nth-child(2)').append(mkBdsHolder);
  var $bdsHolder = $('aside');
  for(var i = 0; i < buddies.length; i++){
    $(buddiesList).append('<li>'+buddies[i]+'</li>');
  }
  $($bdsHolder).append(buddiesList);
}
var beautifulStranger = function(){
  var $theChosen = $('#middle-earth > article:nth-child(2) > aside > ul > li:nth-child(4)');
  $theChosen.html('Aragorn');
}

var hobbitsAgain = $shire.find('ul').eq(0);
var $rivendell = $('#middle-earth > article:nth-child(2)');

var leaveTheShire = function(){
  $rivendell.append(hobbitsAgain);
}


var fellowshipMembers = $rivendell.find('li');

var forgeTheFellowShip = function(){
  var theFellowship = $('<div>');
  theFellowship.prop('id', 'the-fellowship');
  for (var i = 0; i < fellowshipMembers.length; i++) {
    theFellowship.append(fellowshipMembers.eq(i));
    alert(fellowshipMembers.eq(i).text + ' has joined the fellowship');
  }
  theFellowship.append(fellowshipMembers);

}
var theBalrog = function(){
  var portrait = {
    backgroundColor : "white",
    border : "grey solid 2px"
  }
  var GtW = 'Gandalf the White';
  var $whitey = $('#middle-earth > article:nth-child(2) > aside > ul > li:nth-child(1)');
  $($whitey).html(GtW);
  $($whitey).css(portrait);
}

var boromir = fellowshipMembers.eq(4);

var hornOfGondor = function(){
  alert('the horn of gondor has been blown');
  boromir.css('text-decoration', 'line-through');
  $rivendell.append(boromir);
}

var sam = fellowshipMembers.eq(5);
var mordor = $('#middle-earth > article:nth-child(3)');
var itsDangerousToGoAlone = function (){

  mordor.append(frodo);
  mordor.append(sam);

  var mntDoom = $('<div>');
  mntDoom.prop('id', 'mount-doom');
  mordor.append(mntDoom);
}

var gollum;
var the_ring;

var weWantsIt = function(){
  gollum = $('div');
  gollum.prop('id', 'gollum');

  mordor.append(gollum);
  the_ring = frodo.find('#the-ring').eq(0);
  gollum.append(the_ring);
  var mntDoom = mordor.find('#mount-doom').eq(0);
  mntDoom.append(gollum);
}

var thereAndBackAgain = function(){
  gollum.remove();
  var hobbitsList = $('<ul>');
  var hobbits = $('.hobbit');
  for (var i = 0; i < hobbits.length; i++) {
    hobbitsList.append(hobbits.eq(i));
  }
  $shire.append(hobbitsList);
}
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
