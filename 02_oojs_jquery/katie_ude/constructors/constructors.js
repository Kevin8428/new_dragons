function person(name, age, fact) {

  // assign properties to an object
  this.name = name;
  this.age = parseInt(age);
  this.fact = fact;

}

// bike constructor
// it creates an object
// a contstructor is a blueprint to construct an object
// speeds, colour, size, price, brand
function bike(speeds, colour, size, price, brand) {

  this.speeds = speeds;
  this.colour = colour;
  this.size = size;
  this.price = price;
  this.brand = brand;
}

//abilties
this.toString = function {
    return 'This bike has ' + this.speeds + ' and is ' + this.colour
}

// declare a variable called annasBike
// create a 'new' INSTANCE of 'bike'
var annasBike = new bike(21, 'teal', 'small', 350, 'diamondback');
