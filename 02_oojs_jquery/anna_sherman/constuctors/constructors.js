//better to understand here than to dive in immediately.

function person (name, age, fact) {
  //want to assign properties to an object
  this.name = name;
  this.age = parseInt(age);
  this.fact = fact;
}
