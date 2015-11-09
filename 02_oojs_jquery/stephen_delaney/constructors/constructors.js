// Constructors are blueprints for objects.

function person (name, age, fact) {
  //assign properties to an object
  this.name = name;
  this.age = parseInt(age);
  this.fact = fact;

  //abilities
  this.toString = function () {
    return this.name + ' is ' + this.age + ' years old.'
  }
}

var stephen = new person ('Stephen', 27, 'I\'m great!')

// Stephen is now an object
// stephen.toString()
