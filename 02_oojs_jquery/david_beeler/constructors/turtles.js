// 1. create a constructor for ninja turtles
// 2. ask for arguments: "name", "color", "weapon", "favPizzaType"
// 3. implement our constructor
// 4. create an instance of turtles for each of the 4 ninja turtles
// 5. test this in the console of your choice!

function turtle(name, color, weapon, favPizzaType) {
  this.name = name;
  this.color = color;
  this.weapon = weapon;
  this.favPizzaType;
}

var donatello = new turtle("donatello", "purple", "bo staff", "anchovies");
var raphael = new turtle("raphael", "red", "double sai", "pepperoni");
var michelangelo = new turtle("michelangelo", "orange", "pair of nunchucks", "cheese");
var leonardo = new turtle("leonardo", "blue", "two katana", "sausage");


// 6. repeat the above process for superheros
// 7. special name
// 8. special ability
// 9. universe

function superhero(name, ability, universe) {
  this.name = name;
  this.ability = ability;
  this.universe = universe;
  // this.args = arguments;
  // and the rest to put into an array
}

var superman = new superhero("superman", "super speed/strength/etc", "DC");
var batman = new superhero("batman", "rich, innovative", "DC");
var flash = new superhero("flash", "super fast", "DC");




// Helpful for homework
// Component Constructor!!
// function component(domElement) {
//   this.domElement = domElement;
//   this.initialize = function() {
//     console.log("init");
//   };
//   this.render = function() {
//     console.log("render");
//   };
// }
