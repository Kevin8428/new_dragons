//  1. cr constructio for ninja turtles
// 2. ask for ags : name, colour , weapon, fav pizza
// 3. implement constructor
// 4. create an instance of turtles fo reach of the 4 ninja turtles/
// 5. test this in a console

function turtle(name, color, weapon, favoritePizzaType) {

    this.name = name;
    this.color = color;
    this.weapon = weapon;
    this.favoritePizzaType = favoritePizzaType;

}

var leonardo = new turtle('leonardo', 'blue', 'katana', 'cheese');
var michelangelo = new turtle('michelagelo', 'orange', 'nunchucks', 'pepperoni');
var raphael = new turtle('raphael', 'red', 'sai', 'sausage');
var donatello = new turtle('donatello', 'purple', 'bo staff', 'veggies');
