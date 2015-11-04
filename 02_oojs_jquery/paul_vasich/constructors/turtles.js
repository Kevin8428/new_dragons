function Turtle(name, color, weapon, favPizza) {
  var _name = name;
  var _color = color;
  var _weapon = weapon;
  var _favPizza = favPizza;

  this.getName = function() { return _name; }
  this.getColor = function() { return _color; }
  this.getWeapon = function() { return _weapon; }
  this.getPizza = function() { return _favPizza; }
}

var raphael = new Turtle('Raphael', 'red', 'sai', 'all');
var leonardo = new Turtle('Leonardo', 'blue', 'kantana', 'all');
var michelangelo = new Turtle('Michelangelo', 'orange', 'nunchuck', 'all');
var donatello = new Turtle('Donatello', 'purple', 'bo staff', 'all');
