// 1. create a constructor for ninja turtles
function turtle(name, color, weapon, pizza) {
  // 2. ask for arguments: 'name', 'color', 'weapon', 'favoritePizzaType'
  this.name = name;
  this.color = color;
  this.weapon = weapon;
  this.favoritePizzaType = pizza;
}
// 3. implement our constructor
// 4. create an instance of turtles for each of the 4 ninja turtles
var Donatelo = new turtle('Donatelo', 'purple', 'staff', 'Green Pepper and Onion');
var Michaelangelo = new turtle('Michaelangelo', 'orange', 'nunchaku', 'Pepperoni and Mushroom');
var Leonardo = new turtle('Leonardo', 'blue', 'Katana', 'Extra Cheese');
var Raphael = new turtle('Raphael', 'red', 'Sai', 'Pepperoni');

// 5. test this in the console of your choice.
