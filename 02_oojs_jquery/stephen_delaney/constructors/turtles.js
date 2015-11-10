/*
1. create a constructor for ninja turtles
2. ask for arguments: name, color, weapon, favoritePizzaType
3. implement our constructor
4. create an instance of turtles for each of the 4 ninja turtles
5. test this in the console of your choice
*/



function turtle (name, color, weapon, favoritePizzaType) {
  this.name = name;
  this.color = color;
  this.weapon = weapon;
  this.favoritePizzaType = favoritePizzaType;
}

var leonardo = new turtle ('leonardo', 'blue', 'katanas', 'pepperoni')
var donatello = new turtle ('donatello', 'purple', 'bo staff', 'sausage')
var michelangelo = new turtle ('michelangelo', 'orange', 'nunchucks', 'extra cheese')
var raphael = new turtle ('raphael', 'red', 'twin sai', 'deep dish')

function destinyschild (name, priority, favoriteSong) {
  this.name = name;
  this.priority = priority;
  this.favoriteSong = favoriteSong;
}

var beyonce = new destinyschild ('Beyonce', 'number one DUH', 'Doesn\'t matter, she sings the lead')
var kelly = new destinyschild ('Kelly', 'proud number two', 'does dilemma count?')
var michelle = new destinyschild ('Michelle', 'not even on the list', 'they don\'t let her sing')
