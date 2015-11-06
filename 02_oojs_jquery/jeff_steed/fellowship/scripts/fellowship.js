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
