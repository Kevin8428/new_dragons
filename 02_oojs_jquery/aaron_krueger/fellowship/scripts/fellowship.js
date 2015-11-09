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

var makeHobbits = function(){
  var $shire = $('#middle-earth > article:nth-child(1)');
  for(var i = 0; i < hobbits.length; i++){
    $shire.append('<li class="hobbit">'+hobbits[i]+'</li>')
  }
}
var keepItSecretKeepItSafe = function(){
   var theRing = '<div id="the-ring" class="magic-imbued-jewelry"></div>';
   var $frodo = '#middle-earth > article:nth-child(1) > li:nth-child(2)';
   $($frodo).append(theRing);;
}
var makeBuddies = function(){
  var mkBdsHolder = '<aside></aside>';
  $('#middle-earth > article:nth-child(2)').append(mkBdsHolder);
  var $bdsHolder = $('aside');
  for(var i = 0; i < buddies.length; i++){
    $($bdsHolder).append('<li>'+buddies[i]+'</li>');
  }
}
var beautifulStranger = function(){
  buddies.splice(3,1,'Aragorn');
}
var leaveTheShire = function(){
  $rivendell = $('#middle-earth > article:nth-child(2)');
  for (var i = 0; i < hobbits.length; i++) {
    //$(hobbits[i]).appendTo($rivendell);
    hobbits[i].appendto($rivendell);
  }
  //$('.hobbit').appendTo($rivendell);
}
var forgeTheFellowShip = function(){
  var mkFriends = '<div ="the-fellowship"></div>';
  $('#middle-earth > article:nth-child(2)').append(mkFriends);

}
var theBalrog = function(){
  //$('#middle-earth > article:nth-child(2) > aside > li:nth-child(1)').inner('Gandalf the White');
  $('#middle-earth > article:nth-child(2) > aside > li:nth-child(1)').css('backgroundColor', 'white');
}
//var hornOfGondor = fucntion(){

//}
makeMiddleEarth();
makeHobbits();
keepItSecretKeepItSafe();
beautifulStranger();
makeBuddies();
leaveTheShire();
forgeTheFellowShip();
theBalrog();
