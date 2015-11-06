function person ( name, age, fact ) {
  this.name = name;
  this.age = parseInt(age);
  this.fact = ( typeof(fact) == 'string' ) ? fact : null;
}

var andy = new person('Andy', 35, 'coolguy');
console.log(andy);
