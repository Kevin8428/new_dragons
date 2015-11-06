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

makeMiddleEarth();

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

makeHobbits();

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

keepItSecretKeepItSafe();

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

makeBuddies();

//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\
//                                 Part 5                                     \\
//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\
var beautifulStranger = function () {
  // change the `'Strider'` text to `'Aragorn'`

  // Using jQuery
  $('#middle-earth article:nth-child(2) ul:first-child li:nth-child(4)').html('Aragorn')

  //**************************************************************************\\
  // // Using vanilla JavaScript                                              \\
  // var middleEarth = document.getElementById('middle-earth');               \\
  // var buds = middleEarth.firstChild.nextSibling.lastChild.firstChild;      \\
  // buds.getElementsByTagName('li')[3].innerHTML = 'Aragorn';                \\
  //**************************************************************************\\
};

beautifulStranger();

//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\
//                                   Part 6                                   \\
//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\
var leaveTheShire = function () {
  // assemble the `hobbits` and move them to `rivendell`

  // Using jQuery
  var $hobbits = $('#middle-earth article:first-child ul');
  $('#middle-earth article:nth-child(2)').append($hobbits);

  //**************************************************************************\\
  // // Using vanilla JavaScript                                              \\
  // var middleEarth = document.getElementById('middle-earth');               \\
  // var rivendell = middleEarth.firstChild.nextSibling;                      \\
  // var daHobbits = middleEarth.firstChild.lastChild;                        \\
  // rivendell.appendChild(daHobbits);                                        \\
  //**************************************************************************\\
};

leaveTheShire();

//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\
//                                    Part 7                                  \\
//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\
var forgeTheFellowShip = function () {
  // create a new div called `'the-fellowship'` within `rivendell`
  // add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
  // after each character is added make an alert that they // have joined your party
};
