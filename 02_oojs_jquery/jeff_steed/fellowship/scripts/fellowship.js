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


//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\
//                              Part 1                                        \\
//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\
var makeMiddleEarth = function() {
  // create a section tag with an id of `middle-earth`

  // Using jQuery
  var $middleEarth = $('<section>', {id:'middle-earth'});

  //**************************************************************************//
  // // Using vanilla JavaScript                                              //
  // var middleEarth = document.createElement('section');                     //
  // middleEarth.id = 'middle-earth';                                         //
  //**************************************************************************//

  // add each land as an `article` tag
  // inside each `article` tag include an `h1` with the name of the land

  // Using jQuery
  for (var land in lands) {
    var $article = $('<article>');
    var $landName = $('<H1>')
    $landName.html(lands[land]);
    $article.append($landName);
    $middleEarth.append($article);
  }

  //**************************************************************************//
  // // Using vanilla JavaScript                                              //
  // for (var land in lands) {                                                //
  //   var newArticle = document.createElement('article');                    //
  //   var newH1 = document.createElement('h1');                              //
  //   newH1.innerHTML = lands[land];                                         //
  //   newArticle.appendChild(newH1);                                         //
  //   middleEarth.appendChild(newArticle);                                   //
  // }                                                                        //
  //**************************************************************************//

  // append `middle-earth` to your document `body`
  // Using jQuery
  $('body').append($middleEarth);

  //**************************************************************************//
  // // Using vanilla JavaScript                                              //
  // body.appendChild(middleEarth);                                           //
  //**************************************************************************//
};


//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\
//                                Part 2                                      \\
//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\
var makeHobbits = function () {
  // display an `unordered list` of hobbits in the shire
    // (which is the second article tag on the page)
  // give each hobbit a class of `hobbit`

  // Using jQuery
  var $hobbits = $('<ul>');
  for (var hobbit in hobbits) {
    var $li = $('<li>', {class: 'hobbit'});
    $li.html(hobbits[hobbit]);
    $hobbits.append($li);
  }
  $('#middle-earth article:first-child').append($hobbits);

  //**************************************************************************//
  // // Using vanilla JavaScript                                              //
  // var listOfHobbits = document.createElement('ul');                        //
  // for (var hobbit in hobbits) {                                            //
  //   var listItem = document.createElement('li');                           //
  //   listItem.className = 'hobbit';                                         //
  //   listItem.innerHTML = hobbits[hobbit];                                  //
  //   listOfHobbits.appendChild(listItem);                                   //
  // }                                                                        //
  // var middleEarth = document.getElementById('middle-earth');               //
  // middleEarth.firstChild.appendChild(listOfHobbits);                       //
  //**************************************************************************//

};


//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\
//                                  Part 3                                    \\
//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\
var keepItSecretKeepItSafe = function () {
  // create a div with an id of `'the-ring'`
  // give the div a class of `'magic-imbued-jewelry'`
  // add the ring as a child of `Frodo`

  // Using jQuery
  var $div = $('<div>', {id: 'the-ring', class: 'magic-imbued-jewelry'});
  $('ul li:first-child').append($div);

  //**************************************************************************//
  //  // Using vanilla JavaScript                                             //
  //  var divider = document.createElement('div');                            //
  //  divider.id = 'the-ring';                                                //
  //  divider.className = 'magic-imbued-jewelry';                             //
  //  var hobbits = document.getElementsByClassName('hobbit');                //
  //  hobbits[0].appendChild(divider);                                        //
  //**************************************************************************//
};


//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\
//                                Part 4                                      \\
//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\
var makeBuddies = function () {
  // create an `aside` tag
  // attach an `unordered list` of the `'buddies'` in the aside

  // Using jQuery
  var $aside = $('<aside>');
  var $buddies = $('<ul>');
  for (var buddy in buddies) {
    var $li = $('<li>');
    $li.html(buddies[buddy]);
    $buddies.append($li);
  }
  $aside.append($buddies);

  //**************************************************************************//
  // // Using vanilla JavaScript                                              //
  // var aside = document.createElement('aside');                             //
  // var buds = document.createElement('ul');                                 //
  // for (var buddy in buddies) {                                             //
  //   var li = document.createElement('li');                                 //
  //   li.innerHTML = buddies[buddy];                                         //
  //   console.log(li);                                                       //
  //   buds.appendChild(li);                                                  //
  // }                                                                        //
  // aside.appendChild(buds);                                                 //
  //**************************************************************************//


  // insert your aside as a child element of `rivendell`

  // Using jQuery
  $('#middle-earth article:nth-child(2)').append($aside);


  //**************************************************************************//
  // // Using vanilla JavaScript                                              //
  // var middleEarth = document.getElementById('middle-earth');               //
  // middleEarth.firstChild.nextSibling.appendChild(aside);                   //
  //**************************************************************************//
};


//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\
//                                 Part 5                                     \\
//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\
var beautifulStranger = function () {
  // change the `'Strider'` text to `'Aragorn'`

  // Using jQuery
  $('#middle-earth article:nth-child(2) ul:first-child li:nth-child(4)').html('Aragorn')

  //**************************************************************************//
  // // Using vanilla JavaScript                                              //
  // var middleEarth = document.getElementById('middle-earth');               //
  // var buds = middleEarth.firstChild.nextSibling.lastChild.firstChild;      //
  // buds.getElementsByTagName('li')[3].innerHTML = 'Aragorn';                //
  //**************************************************************************//
};


//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\
//                                   Part 6                                   \\
//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\
var leaveTheShire = function () {
  // assemble the `hobbits` and move them to `rivendell`

  // Using jQuery
  var $hobbits = $('#middle-earth article:first-child ul');
  $('#middle-earth article:nth-child(2)').append($hobbits);

  //**************************************************************************//
  // // Using vanilla JavaScript                                              //
  // var middleEarth = document.getElementById('middle-earth');               //
  // var rivendell = middleEarth.firstChild.nextSibling;                      //
  // var daHobbits = middleEarth.firstChild.lastChild;                        //
  // rivendell.appendChild(daHobbits);                                        //
  //**************************************************************************//
};


//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\
//                                    Part 7                                  \\
//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\
var forgeTheFellowShip = function () {
  // create a new div called `'the-fellowship'` within `rivendell`

  // Using jQuery
  var $fellows = $('<div>', {name: 'the-fellowship'});
  $('#middle-earth article:nth-child(2)').append($fellows);

  //**************************************************************************//
  // // Using vanilla JavaScript                                              //
  // var middleEarth = document.getElementById('middle-earth');               //
  // var daFellows = document.createElement('div');                           //
  // daFellows.setAttribute('name', 'the-fellowship');                        //
  // var rivendell = middleEarth.firstChild.nextSibling;                      //
  // rivendell.appendChild(daFellows);                                        //
  //**************************************************************************//

  // add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
  // after each character is added make an alert that they // have joined your party

  // Using jQuery
  var $ul = $('<ul>');
  for (var hobbit in hobbits) {
    var $li = $('<li>', {class: 'hobbit'});
    if (hobbits[hobbit] == 'Frodo Baggins') {
      $li.html(hobbits[hobbit]);
      var $div = $('<div>', {id: 'the-ring', class: 'magic-imbued-jewelry'});
      $li.append($div);
    } else {
      $li.html(hobbits[hobbit]);
    }
    alert($li.text() + ' has joined the fellowship.');
    $ul.append($li);
  }
  for (var bud in buddies) {
    var $li = $('<li>');
    $li.html(buddies[bud]);
    if (buddies[bud] == 'Strider') {
      $li.html('Aragorn');
    }
    alert($li.text() + ' has joined the fellowship.');
    $ul.append($li);
  }
  $fellows.append($ul);

  $('#middle-earth article:nth-child(2) ul')[1].remove();
  $('#middle-earth article:nth-child(2) aside').remove();

  //********************************************************************************************//
  // // Using vanilla JavaScript                                                                //
  // var newList = document.createElement('ul');                                                //
  // var daHobbits = document.getElementsByClassName('hobbit');                                 //
  // while (daHobbits.length > 0) {                                                             //
  //   newList.appendChild(daHobbits[0]);                                                       //
  //   alert(newList.lastChild.innerText + " has joined the Fellowship.");                      //
  // }                                                                                          //
  // var buds = rivendell.firstChild.nextSibling.firstChild.getElementsByTagName('li');         //
  // while (buds.length > 0) {                                                                  //
  //   newList.appendChild(buds[0]);                                                            //
  //   alert(newList.lastChild.innerText + " has joined the Fellowship.");                      //
  // }                                                                                          //
  // daFellows.appendChild(newList);                                                            //
  // rivendell.removeChild(rivendell.firstChild.nextSibling.nextSibling);                       //
  // rivendell.removeChild(rivendell.firstChild.nextSibling);                                   //
  //********************************************************************************************//
};


//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\
//                                 Part 8                                     \\
//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\
var theBalrog = function () {
  // change the `'Gandalf'` text to `'Gandalf the White'`

  // Using jQuery
  var $gandalf = $('#middle-earth article:nth-child(2) div ul li:nth-child(5)');
  $gandalf.html('Gandalf the White');

  //********************************************************************************************************//
  // // Using vanilla JavaScript                                                                            //
  // var middleEarth = document.getElementById('middle-earth');                                             //
  // middleEarth.firstChild.nextSibling.lastChild.firstChild.childNodes[4].innerHTML = 'Gandalf the White'; //
  //********************************************************************************************************//

  // apply the following style to the element, make the // background 'white', add a grey border

  // Using jQuery
  $gandalf.css({background: 'white', border: '4px solid grey'});

  //********************************************************************************************************//
  // // Using vanilla JavaScript                                                                            //
  // middleEarth.firstChild.nextSibling.lastChild.firstChild.childNodes[4].style.backgroundColor = 'white'; //
  // middleEarth.firstChild.nextSibling.lastChild.firstChild.childNodes[4].style.border = '4px solid grey'; //
  //********************************************************************************************************//
};


//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\
//                                   Part 9                                   \\
//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\
var hornOfGondor = function () {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  alert('The Horn of Gondor has been blown! Boromir has been killed by the Uruk-hai!');
  // Remove `Boromir` from the Fellowship

  // Using jQuery
  $('#middle-earth article:nth-child(2) div ul li:nth-child(9)').remove();

  //**********************************************************************************//
  // // Using vanilla JavaScript                                                      //
  // var middleEarth = document.getElementById('middle-earth');                       //
  // var fellows = middleEarth.firstChild.nextSibling.lastChild.firstChild;           //
  // fellows.removeChild(fellows.childNodes[8]);                                      //
  //**********************************************************************************//
};


//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\
//                                    Part 10                                 \\
//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\
var itsDangerousToGoAlone = function (){
  // take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`

  // Using jQuery
  var $ul = $('<ul>');
  var $frodo = $('#middle-earth article:nth-child(2) div ul li:nth-child(1)').remove();
  $ul.append($frodo);
  var $sam = $('#middle-earth article:nth-child(2) div ul li:nth-child(1)').remove();
  $ul.append($sam);
  $('#middle-earth article:nth-child(3)').append($ul);

  //****************************************************************//
  // // Using vanilla JavaScript                                    //
  // var middleEarth = document.getElementById('middle-earth');     //
  // var rivendell = middleEarth.firstChild.nextSibling;            //
  // var ul = document.createElement('ul');                         //
  // ul.appendChild(rivendell.lastChild.firstChild.childNodes[0]);  //
  // ul.appendChild(rivendell.lastChild.firstChild.childNodes[0]);  //
  // rivendell.nextSibling.appendChild(ul);                         //
  //****************************************************************//

  // add a div with an id of `'mount-doom'` to `Mordor`

  // Using jQuery
  var $div = $('<div>', {id: 'mount-doom'});
  $('#middle-earth article:nth-child(3)').append($div);

  //********************************************//
  // // Using vanilla JavaScript                //
  // var div = document.createElement('div');   //
  // div.setAttribute('id', 'mount-doom');      //
  // rivendell.nextSibling.appendChild(div);    //
  //********************************************//
};


//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\
//                                    Part 11                                 \\
//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\
var weWantsIt = function () {
  // Create a div with an id of `'gollum'` and add it to Mordor

  // Using jQuery
  var $gollum = $('<div>', {id: 'gollum'});
  $('#middle-earth article:nth-child(3)').append($gollum);

  //************************************************************//
  // // Using vanilla JavaScript                                //
  // var gollum = document.createElement('div');                //
  // gollum.setAttribute('id', 'gollum');                       //
  // var middleEarth = document.getElementById('middle-earth'); //
  // middleEarth.lastChild.appendChild(gollum);                 //
  //************************************************************//

  // Remove `the ring` from `Frodo` and give it to `Gollum`
  // Move Gollum into Mount Doom

  // Using jQuery
  $gollum.append($('#the-ring'));
  $('#mount-doom').append($gollum);

  //******************************************************//
  // // Using vanilla JavaScript                          //
  // var daRing = document.getElementById('the-ring');    //
  // gollum.appendChild(daRing);                          //
  // var mtDoom = document.getElementById('mount-doom');  //
  // mtDoom.appendChild(gollum);                          //
  //******************************************************//
};


//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\
//                                   Part 12                                  \\
//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\
var thereAndBackAgain = function () {
  // remove `Gollum` and `the Ring` from the document

  // Using jQuery
  $('#gollum').remove();

  //****************************************************************************************//
  // // Using vanilla JavaScript                                                            //
  // document.getElementById('mount-doom').removeChild(document.getElementById('gollum'));  //
  //****************************************************************************************//

  // Move all the `hobbits` back to `the shire`

  // Using jQuery
  var $hobbits = $('.hobbit').remove();
  $('#middle-earth article:first-child').append($hobbits);

  //**************************************************************************************************************************//
  // // Using vanilla JavaScript                                                                                              //
  // var middleEarth = document.getElementById('middle-earth');                                                               //
  // middleEarth.firstChild.appendChild(middleEarth.lastChild.firstChild.nextSibling.childNodes[0]);                          //
  // middleEarth.firstChild.appendChild(middleEarth.lastChild.firstChild.nextSibling.childNodes[0]);                          //
  // middleEarth.firstChild.appendChild(middleEarth.firstChild.nextSibling.firstChild.nextSibling.firstChild.childNodes[0]);  //
  // middleEarth.firstChild.appendChild(middleEarth.firstChild.nextSibling.firstChild.nextSibling.firstChild.childNodes[0]);  //
  //**************************************************************************************************************************//
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
