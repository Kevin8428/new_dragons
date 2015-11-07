//constructors are blueprings for objects
//constructor constructs an object

function person(name, age, fact) {

  //assign properties to an object
  this.name=name;
  this.age=parseInt(age);
  this.fact=fact;

}


function bike(speeds, color, size, price, brand){

    this.speeds = speeds;
    this.color = color;
    this.size = size;
    this.price = price;
    this.brand = brand;

    this.toString = function(){
      return 'this bike has ' + this.speeds + 'and is ' + this.color
    }

}

//create a 'new' instance of 'bike'
//create a new copy of bike
var annasBike = new bike (21, 'teal', 'small', 350, 'diamondback');
