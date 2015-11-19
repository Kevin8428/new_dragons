function person(name, age, fact) {
  // assign properties to an object
  this.name = name;
  this.age = parseInt(age);
  this.fact = fact;
}

// Bike constructor
// It creates an object
// A constructor is a blueprint to contruct an object
// speeds, color, size, price, brand

function bike(speeds, color, size, price, brand) {

  // Attributes
  this.speeds = speeds;
  this.color = color;
  this.size = size;
  this.price = price;
  this.brand = brand;

  // Abilities
  this.toString = function() {
    return 'This bike has ' + speeds + ' speeds and is ' + color +'.';
  }
}

// Declare a variable called annasBike
// create a 'new' instance of bike
// create a new copy of bike

var annasBike = new bike(21, 'teal', 'small', 350, 'diamondback');
