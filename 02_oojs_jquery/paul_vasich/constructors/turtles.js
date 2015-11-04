function Turtle(_name, _color, _weapon, _favPizza) {

  this.getName = function()     { return _name; }
  this.setName = function(name) { _name = name; }

  this.getColor = function()      { return _color; }
  this.setColor = function(color) { _color = color; }

  this.getWeapon = function()       { return _weapon; }
  this.setWeapon = function(weapon) { _weapon = weapon; }

  this.getPizza = function()      { return _favPizza; }
  this.setPizza = function(pizza) { _pizza = pizza; }
}

var raphael = new Turtle('Raphael', 'red', 'sai', 'all');
var leonardo = new Turtle('Leonardo', 'blue', 'kantana', 'all');
var michelangelo = new Turtle('Michelangelo', 'orange', 'nunchuck', 'all');
var donatello = new Turtle('Donatello', 'purple', 'bo staff', 'all');
