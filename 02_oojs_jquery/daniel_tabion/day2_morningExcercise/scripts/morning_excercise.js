// write out an array of five foods
// loop through the array and console.log each item with a message
// create an object with your name with 3 to 4 attributes including one array
// create a method for your object that accepts an argument that is an array and loops through the array and console.logs the array with a message!
// create a button in html
// style your button give it a border, color, radius, etc....(Maybee put it inside a div and center the dive on your screen)
// using javascript console.log my button is working when it is clicked
//Invoke your objects method using your button by passing in the object property that includes its arrray

window.onload = function() {

var button = document.getElementById('btn');

console.log('starting');

var foods = [ 'panang curry', 'ma po tofu', 'salmon chirashi', 'jamaican curried goat', 'duck and andouille sausage gumbo'];

for (var i=0; i<foods.length; i++) {
  console.log('I love this dish! ' + foods[i] + '.');
}

var daniel = {
  name: 'daniel',
  hobby: 'fly fishing',
  age: 39,
  bodyparts: ['eyes', 'hair', 'nose', 'legs']
}

daniel.processArr = function(arr) {
  for (var i=0; i<arr.length; i++) {
    console.log(arr + " is item " + i);
  }
}

button.onclick = function() {
  console.log('my button is working');
}





}
