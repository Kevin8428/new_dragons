// this function is called a "constructor"
//   it creates an object
//   it is a blueprint to construct an object
function person(name, age, fact) {

// assign properties to an object
  this.name = name;
  this.age = parseInt(age);
  this.fact = fact;

}

function bike(speeds, color, size, price, brand) {
  // attributes
  this.speeds = speeds;
  this.color = color;
  this.size = size;
  this.price = price;
  this.brand = brand;
  // abilities
  this.toString = function() {
    return "This bike has " + this.speeds + " speeds and is " + this.color;
  }
}

// declare a variable called annasBike
//  create a "new" INSTANCE of "bike"
//  create a new copy of bike
var annasBike = new bike(21, "teal", "small", 350, "diamondback");
