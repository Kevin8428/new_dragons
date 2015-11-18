//1. create a constructor for ninja turtles
//2. ask for arguments: 'name', 'color', 'weapon', 'favoritePizzaType'
//3. Implement our constructor
//4. create an instance of turtles for each of the 4 ninja turtles
//5. test this in the console of your choice.

function turtle(name, color, weapon, favoritepizza) {
  this.name = name;
  this.color = color;
  this.weapon = weapon;
  this.favoritepizza = favoritepizza;
}
var donatello = new turtle('donatello','blue','sword','anchovie');
var raphael = new turtle('raphael','green','numchuck','pepperoni');
var michaelanjelo = new turtle('michaelanjelo','red','gun','sausage');
var splinter = new turtle('splinter', 'purple', 'car', 'pineapple');
