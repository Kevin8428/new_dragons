function person(name, age, fact) {

// assign properties to an object
this.name = name;
this.age = parseInt(age);
this.fact = fact;

};

function bike(speeds, colour, size, price, brand) {
  this.args = arguments;

  this.speeds = speeds;
  this.colour = colour;
  this.size = size;
  this.price = price;
  this.brand = brand;

  this.toString = function() {
    return 'This bie has ' + this.speeds + ' and is ' + this.colour;
  }
}
//declare a variable called annasBike/
//create a 'new' instance of 'bike'
//create a new copy of bike
//constructor is a blueprint of an object
//component has dom element, initiator, renderer

var annasBike = new bike(21, 'teal', 'small', 350, 'diamondback');

var jamesBike = new bike(6, 'white', 'medium', 200, 'biria');
jamesBike.toString()
annasBike.price = 9000;
annasBike.speeds = 9000;
annasBike.toString();
