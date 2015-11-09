console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  "Samwise 'Sam' Gamgee",
  "Meriadoc 'Merry' Brandybuck",
  "Peregrin 'Pippin' Took"
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

function JQE(tag, props) {
  if (props !== undefined)
    return $('<'+tag+'>').prop(props);
  return $('<'+tag+'>');
}

var lsToUnorderedList = function(ls, ulID) {
  var lsHTML = ''
  for (var i = 0; i < ls.length; i++)
    lsHTML += '<li id='+ls[i]+'>'+ls[i]+'</li>';

  return JQE('ul', {id: ulID,
                    innerHTML: lsHTML});
}

var makeMiddleEarth = function() {
  var middleEarth = JQE('section', {id: 'middle-earth'});

  for (var i = 0; i < lands.length; i++)
    middleEarth.append(JQE('article',{innerHTML:'<h1>'+lands[i]+'</h1>',
                                      id: lands[i]}));

  $(body).append(middleEarth);
}

var makeHobbits = function() {
// Tricky
  $('#The\\ Shire').append(lsToUnorderedList(hobbits, 'hobbits'));
}

var keepItSecretKeepItSafe = function() {
  var ring = JQE('div',{id: 'The-Ring',
                        class: 'magic-imbued-jewelry'});
  $('#Frodo').append(ring)
}

var makeBuddies = function() {
  var aside = JQE('aside');
  aside.append(lsToUnorderedList(buddies, 'buddies'));
  $('#Rivendell').append(aside);
}

var beautifulStranger = function() {
  $("#Strider").html("Aragorn");
}

var leaveTheShire = function() {
  $('#Rivendell').append($("#hobbits"));
}

var forgeTheFellowship = function() {
  var fellowship = JQE('div', {id: 'the-fellowship'});
  $('#Rivendell').append(fellowship);

  $('#hobbits li').each(function() {
    fellowship.append($(this));
  });

  $('#buddies li').each(function() {
    fellowship.append($(this));
  });

  alert('The fellowship is complete');
}

var theBalrog = function() {
  var gandalf = $('#Gandalf');
  gandalf.html('Gandalf the White');
  gandalf.css({background: 'white',
               border: '3px solid grey'})
}

var hornOfGondor = function() {
  alert('Horn of Gondor: bwoooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooop');
  $('#Boromir').remove();
}

var itsDangerousToGoAlone = function() {
  $('#Mordor').append($('#Frodo'));
  $('#Mordor').append($('#Samwise'));
  $('#Mordor').append(JQE('div', {id:'mount-doom'}));
}

var weWantsIt = function() {
  var gollum = JQE('div', {id: 'gollum'});
  $('#Mordor').append($('#gollum'));

  gollum.append($('#The-Ring'));
  $('#mount-doom').append(gollum);
}

var thereAndBackAgain = function() {
  $('#The-Ring').remove();
  $('#gollum').remove();

  var ls = [$('#Frodo'), $('#Samwise'), $('#Meriadoc'), $('#Peregrin')];
  for (var hobbit in ls)
    $('#The\\ Shire').append(ls[hobbit]);
}

makeMiddleEarth();
makeHobbits();
keepItSecretKeepItSafe();
makeBuddies();
beautifulStranger();
leaveTheShire();
forgeTheFellowship();
theBalrog();
hornOfGondor()
itsDangerousToGoAlone();
weWantsIt();
thereAndBackAgain();
