console.log("something");

// write out an array of five foods
// loop through the array and console.log each item with a message
// create an object with your name with 3 to 4 attributes including one array
// create a method for your object that accepts an argument that is an array and loops through the array and console.logs the array with a message!
// create a button in html
// style your button give it a border, color, radius, etc....(Maybee put it inside a div and center the dive on your screen)
// using javascript console.log my button is working when it is clicked
//Invoke your objects method using your button by passing in the object property that includes its arrray
window.onload = function(){

  var foods = ['pizza','burgers','steak','mac n cheese', 'apple pie'];

  for (var food in foods) {
    console.log("I like to eat ... " + foods[food]);
  }

  var david = {
    name: "David",
    age: 28,
    cats: ["loki","thor"],
    eat: function(foods) {
      for (var food in foods) {
        console.log("I like to eat ... " + foods[food]);
      }
    }
  }

  //david.eat(foods);

  //var btn = document.getElementById("main_button");

  main_button.onclick = function() {
    console.log("My button is working!!!!!");
    david.eat(foods);
  }

};
