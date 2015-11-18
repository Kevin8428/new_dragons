function person(name, age, fact){
  //assign properties to an object

  this.name = name;
  this.age = parseInt(age);
  this.fact = fact;
}


var aaron = new person('aaron', 21, 'i eat pie');

console.log(aaron);
