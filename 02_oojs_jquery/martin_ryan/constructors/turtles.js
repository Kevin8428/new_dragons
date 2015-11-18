// args name, color, weapon, favoritePizzaType

// implement our constructor
// create an instance of 'turtles' for each of the turtles

function ninjaTurtle (name, color, weapon, pizza) {

  this.name = name;
  this.color = color;
  this.weapon = weapon;
  this.pizza = pizza;

}

var donatello = new ninjaTurtle('donatello', 'purple', 'bow staff', 'cheese');

var rafael = new ninjaTurtle('raffy', 'red', 'sai', 'cheese');

var michaelangelo = new ninjaTurtle('michaelangelo', 'orange', 'nunchuck', 'cheese');

var leonardo = new ninjaTurtle('leo', 'blue', 'swords', 'cheese');
