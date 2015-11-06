// W02 COMPONENT RECAP YOUTUBE
//COMPONENT FOR HANDLING LOGIN and
//WELCOME TO SITE MESSAGE PERSONALIZATION
// CODING ALONG WITH IT THUR NIGHT

//building your own object
//component gives you control of dom build and destroy
//takes input, track it, know about itself, render/modify dom
//example: sign in, > welcome, your name

//1. state (properties)
//2. method initalize = set domElement to a selector and attach to parent
//3. method render = get data, validate, modify domElement

var component = function(name, email) {

   // attributes/properties
   this.domElement = document.createElement('div');
   this.name = name;
   this.email = email;

   this.initialize = function() {
      // give our component a place to live
      // this puts first tag in body into body var
      var body = document.getElementsByTagName('body')[0];
      //alernative: var container = document.querySelector('#wrapper') to put in #wrapper div...
      // this puts the div created above at first location in parent body element. Now that code lives there.
      body.appendChild(this.domElement);
   }

   this.render = function() {
      // take properties, render user friendly
      //create a string welcome message using properties
      var hello = 'Welcome, ' + this.name + '! Logged in as ' + this.email;
      // turn string into innnerHTML inour div
      this.domElement.innerHTML = hello;
   }

} // end component

//creat a new instance using above constructor
var max = new component('max', 'max@millian.com');
//initialize
max.initialize();
//render
max.render();
//could put a new name in if bob logs in...
max.name = 'Bob';
