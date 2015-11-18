function turtles = ('name', 'colour', 'weapon', 'favoritePizzaType') {
  this.name = name;
  this.colour = colour;
  this.weapon = weapon;
  this.favoritePizzaType = favoritePizzaType;

  this.toString = function () {
    return this.name + ' wears ' + this.colour + ' uses ' + this.weapon + ' to fight, ' + 'and eats lots of ' + this.favoritePizzaType + ''\/! ';
  }
}
var donatello = new turtle('donatello', 'purple', 'bo staff', 'cheese pizza');
var leonardo = new turtle ('leonardo', 'blue', 'two katana', 'sausage pizza');
var rafael = new turtle ('rafael', 'red', 'sais', 'anchovie pizza');
var michaelangelo = new turtle ('michaelangelo', 'orange', 'nunchucks', 'pepperoni pizza');
