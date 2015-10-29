
var arr = ['jack sparrow', 'blackbeard', 'johnny depp'];
for (var inc = 0; inc < arr.length; inc++) {
  console.log('the incrementor is: ' + inc);
  console.log(arr[inc]);
}



var places = ['piece', 'independence tap', 'alps', 'geek bar', 'glazed and infused'];

for (var i = 0; i < places.length; i++) {
  console.log("Lap number: " + i);
  if (i == (places.length - 1)) {
    console.log('this is the last place i visited');
  }
  console.log(places[i]);
}

1.

the typeof operator takes a value and return it’s type. There are two possible syntaxes:

Operator: typeof x
Function-like: typeof(x)
typeof 0    // "number"
typeof true // "boolean"
typeof {} // "object"





2. CAROUSEL

var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];

console.log(myFish); // ['angel', 'clown', 'mandarin', 'sturgeon']

var popped = myFish.pop();

console.log(myFish); // ['angel', 'clown', 'mandarin' ]

console.log(popped); // 'sturgeon'

var fruits = ["Apple", "Banana"];
var last = fruits.pop(); // remove Orange (from the end)
// ["Apple", "Banana"];





NUMBER 3 - OBJECT
http://www.tutorialspoint.com/javascript/javascript_loop_control.htm
https://docs.google.com/document/d/1m-kWLaJzvQI2fjGmIXNUW2W1P6zE1P9EuBOLLHtUwO8/edit


he Array object lets you store multiple values in a single variable. It stores a fixed-size sequential collection of elements of the same type. An array is used to store a collection of data, but it is often more useful to think of an array as a collection of variables of the same type.

Syntax
Use the following syntax to create an Array object −

var fruits = new Array( "apple", "orange", "mango" );
The Array parameter is a list of strings or integers. When you specify a single numeric parameter with the Array constructor, you specify the initial length of the array. The maximum length allowed for an array is 4,294,967,295.

You can create array by simply assigning values as follows −

var fruits = [ "apple", "orange", "mango" ];
You will use ordinal numbers to access and to set values inside an array as follows.

fruits[0] is the first element
fruits[1] is the second element
fruits[2] is the third element


var jen= [' brown hair ', ' brown eyes', ' a medium height', ' stamina', ' a kind heart', ' democrat views', ' painted nails ', ' journalist friends ', ' one sister.'];
for (var i = 0; i < jen.length; i++) {
    console.log("Jen has" + jen);
  }


//Ignore this.
  var girl = {
    name: 'jen',
    sex: 'female',
    nailColor: 'grey',
    bodyType: 'slim',
    eyeColor: 'brown',
    hairStyle: 'wavy',
    hairColor: 'brown',
    personality: 'chill',
    height: 'short',
    politicalView: 'democrat',
  };
for (var i = 0; i < girl.length; i++) {

    (function(i) {
      this.print = function() {


        var animals = [
      { species: 'Lion', name: 'King' },
      { species: 'Whale', name: 'Fail' }
    ];

    for (var i = 0; i < animals.length; i++) {
      (function(i) {
        this.print = function() {
          console.log('#' + i + ' ' + this.species
                      + ': ' + this.name);
  




4. ELEMENTARY SCHOOL

function divide (a, b) {
  return a / b, a % b;
  }

  function myFunction(a, b) {
    return a * b;

    myFunction(4, 3
