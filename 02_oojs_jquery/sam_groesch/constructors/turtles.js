function turtle(name, color, weapon, favoritePizzaType) {
  this.name = name;
  this.color = color;
  this.weapon = weapon;
  this.favoritePizzaType = favoritePizzaType;
}

var donatello = new turtle('Donatello', 'purple', 'bo staff', 'chicken, mushroom, green pepper and tomatoes');
var raphael = new turtle('Raphael', 'red', 'twin sais', 'pepperoni, Italian sausage, bacon, and beef');
var michelangelo = new turtle('Michelangelo', 'orange', 'nunchaku', 'pepperoni, ham, pineapple, and jalapeño');
var leonardo = new turtle('Leonardo', 'blue', 'twin katana swords', 'onions, black olives, green pepper, and mushrooms');

function lego(x, y, z) {
  this.x = x;
  this.y = y;
  this.tellAboutName = function(name) {
    if (typeof(name) == 'string') {
      hasName = true;
    } else {
      hasName = false;
    } return [name, hasName];
  }
}
