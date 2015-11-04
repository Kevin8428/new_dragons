//1. create a contructor for ninja turtles
//2. ask for arguments: 'name', 'color', 'weapon',
'favoritePizzaType'
//3. implement our contructor
//4.create an instance of turtles for each of the 4 ninja turtles
//5. test this in the console of your choice!

function turtle(name, color, weapon, favoritePizzaType) {
 this.name= name;
 this.color= color;
 this.weapon= weapon;
 this.favoritePizzaType= favoritePizzaType;
}

var donatello = new turtle('donatello', 'blue', 'knife','pepperoni');
var michaelangelo = new turtle('michaelangelo', 'nunchucks', 'knife','pepperoni');
var deangelo = new turtle('deangelo', 'red', 'stars','pepperoni');
var raphael = new turtle('raphael', 'yellow', 'machete','pepperoni');

donatello.name
"donatello"

//create same for lego characters!




//notes

// function component(domElement) {

//   this.domElement= domElement;
//   this.initialize= function() {
//     console.log('init');
//   };
// this.render = function() {
//   console.log('render')
// }
// }
