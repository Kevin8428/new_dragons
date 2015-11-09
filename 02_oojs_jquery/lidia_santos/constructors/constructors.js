@@@@@@  a constructor is a blueprint for an object @@@@



function person(name, age, fact) {
//assign properties to an object
this.name = name;
this.age = parseInt(age);
this.fact = fact;




}

//bike constructor
//it creates an object
// a constructor is a blue print to construct an object
// speeds, colour, size, price, brand

function bike(speeds, colour, size, price, brand) {
  this.speeds = speeds;
  this.colour = colour;
  this.size = size;
  this.price = price;
  this.brand = brand;
}
