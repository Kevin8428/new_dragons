var andy = {

  build: 'tall',
  gender: 'male',
  age: 30,
  hobby: 'rocks',
  residency: 'Maine',
  crime: 'murder',
  arg1: 11111,
  arg2: 22222
}

andy.tellStory = function(){
  return 'andy was a ' + this.build + ' ' + this.gender + '; ' + 'he was convicted of ' +  this.crime + '.' + ' He lived in ' + this.residency + '.' + ' His hobby was ' + this.hobby;
}


andy.newMethod = function(arg1, arg2){
  return 'this is the new method output, first argument is: ' + this.arg1 + 'the second argument is ' + this.arg2;
}


//andy.hasOwnProperty('married')
//this will test if 'married' is a property yet

//Object.keys(andy);-----------------------------------------------
//this will return an array of all keys(attributes);

//var keys = Objects.keys(andy);
//keys
//keys.length will return 10);-------------------------------------
