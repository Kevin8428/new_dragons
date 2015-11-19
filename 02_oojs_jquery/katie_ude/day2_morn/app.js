console.log('component has loaded');

window.onload = function() {
  console.log('all files that this page needs have been loaded');

  // basic selectors
  // declare selector named container
  // access that container via document.getElementById('name-of' id)

  var container = document.getElementById('container');

  var monsters = ['Wreck-it Ralph', 'The giraffe from Lion King SNES', 'Ganon'];

  for (var baddie in monsters) {
    // create a new dom element using document.createElement('name-of-tag');
      var li = document.createElement('li');
    // append it to a container using selector.appendChild(domElement)
      li.innerHTML = monsters[baddie];
      container.appendChild(li);
  }
  // now, we need to create an image!
  var kittenImage = document.createElement('img');
  // alt text (alt) - ADA compliancy text for blind
  kittenImage.alt = 'A cute random kitten';
  kittenImage.id = 'kitten';
  // src = image source
  kittenImage.scr = 'http://dreamatico.com/data_images/kitten/kitten-8.jpg';
  //append my element as a child to a selector
  container.appendChild(kittenImage);

  // modify the cuteness level of my kitten
  // create a new selector by querying the dom
  // notice the use of CSS style selectors
  // makes things easy to remember
  var kitten = document.querySelector('#kitten');
  kitten.src = 'http://a.abcnews.go.com/images/Entertainment/AP_KittenBowlBalls_150130_CC_16x9_992.jpg'

  var listItemsArray = document.getElementsByTagName('li');
  console.log(listItemsArray);

  for (var li in listItemsArray) {
    listItemsArray[li].innerHTML = 'We are the champions (my friend)';
  }

  var status = document.getElementById('status-message');

  var btn = document.getElementById('addPoint');
  // var btn = document.querySelector('#addPoint');

  // initialize our UI component
  user.initialize(status);
  // selector.addEventListener(eventType,function());
  btn.addEventListener('click', function() {
    user.updateScoreByOnePoint();
  });

  // bind events to a DOM element
//   var body = document.getElementsByTagName('body')[0];
//   // we need to add a listener for events to an element
//   // mouse events
//   body.addEventListener('click', function() {
//     console.log(event);
//     console.log('ow, y u click me bro?');
//   });
//     // touch events
//   body.addEventListener('touchstart', function() {
//     // console.log(event);
//     // touchstart
//     // touchmoe
//     // touchend
//     console.log('yo yo dude y u pokin me? wtf man');
//   });
//
//   body.addEventListener('keyup', function(event) {
//     // look for specific keys to be pressed
//     if (event.keyCode == 13) {
//       console.log('y u press enter so much yo?')
//     }
//     console.log(event.keyCode);
//   });
//
// } //end window.onload
//
//
//   // create a user interface component
//   // the goal here is to create an Object that can update itself
//   // and visually show that if needed
//
//   // ex #1: user component
//   // internal state of component = special name for attributes
//   var user = {
//     name: null,
//     score: 0,
//     domElement: null,
//
//     // elementToAppendTo: document.selector for an individual element
//     initialize: function(elementToAppendTo) {
//       if (this.name == null) {
//         // get name
//         this.name = prompt('what is your name?');
//       }
//       this.domElement = document.createElement('div');
//       elementToAppendTo.appendChild(this.domElement);
//       console.log('initialize: complete')
//     },
//
//     // innerHTML: valid html to place in our domElement
//     render: function(innerHTML) {
//       if (typeof(innerHTML) == 'string') {
//         this.domElement.innerHTML = innerHTML;
//       }
//     },
//
//     buildPlayerStatusString: function() {
//       return this.name + ': ' + this.score;
//     }
//
//     getName: function() {
//       return this.name;
//     },
//     saveName: function(newName) {
//       if (typeof(newName) == 'string' && newName.length > 0) {
//         this.name = newName;
//         }
//         else {
//           alert ('You entered an incorrect or empty name');
//         }
//     },
//     getScore: function() {
//       return this.score
//     },
//     updateScoreByOnePoint: function() {
//       this.score = this.score + 1
//       var status = this.buildPlayerStatusString();
//       this.render(status);
//       return this.score
//     }
//   };

var component = {
  domElement: null,
  initialize: function(selector) {
    // create a dom element
    this.domElement = document.createElement('div');
    // attach it
    selector.appendChild(this.domElement);
  },
render: function(statusText) {
  // updated this dom element
  this.domElement.innerHTML = statusText;
  }
};
