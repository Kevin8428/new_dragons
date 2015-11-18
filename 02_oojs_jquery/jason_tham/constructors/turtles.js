//create a contructor for ninja turtles
//ask for arguments: 'name', 'colour', 'weapon', 'favouritePizzaType'
//implmenet our contructor
//create an instance of turtles
//test

function turtles(name, color, weapon, favouritePizzaType){
  this.name = name;
  this.color = color;
  this.weapon = weapon;
  this.favouritePizzaType = favouritePizzaType;
};

var Donatello = new turtles('Donatello', 'Purple', 'Bo staff', 'Pepperoni');


function lego(head, color, accessories){
  this.head = head;
  this.color = color;
  this.accessories = accessories;
};

var Marty = new lego('Marty', 'Red', 'Hover Board');
var Batman = new lego('Bruce Wayne', 'Black', 'Batmobile');
var Gandalf = new lego('Gandalf', 'Grey', 'Staff');
