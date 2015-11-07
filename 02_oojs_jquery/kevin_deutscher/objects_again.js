var kevin = {
  sayMyName: function() {
    return "I am kevin";
  },

  fName: 'kevin',
  lName: 'deutscher',
  age: 27,
  sex: 'male',
  residency: 'chicago',
  favoriteFood: 'pizza',
  homeTown: 'shelburne',
  lastJob: 'northwestern',
  yearsofCollege: 5,
  girlFriend: {
    name: 'julia',
    age: 25,
    employer: 'NE aquarium'
  }
  //writing kevin.somethingThatDoesNotExist will create new element
};
//kevin is object
//kevin.quirk = function(firstArg){
//  return 'I like to run ' + firstArg 'times per week';
//}
//quirk method

kevin.lastPlaceVisited = function(secondArg){
  return 'the last place I visited was' + secondArg;
}

kevin.buildAboutMe = function(){
  return 'sex: ' + this.sex + ',' + 'first name: ' + this.fName + ',' + 'last name: ' + this.lName;
}

//kevin.quirk(2) returns "something something 2"
//make 2 functions on an object and then call them

kevin.siblingsNames = function(arg1, arg2){
  return 'I have ' + arg1+arg2 + 'siblings';
}


//err is the object​
var err = {
  sayMyName: function() {
    return 'I am ' + this.name;
    //call this.name returns this.error
  },
  makeFunOfGreenClothes: function() {
    return "Your clothes look silly, little elf-man";
  }
};

//how would I do this^??

var err = {
  sayMyName: function (){
    return 'I am error';
  },
  makeFunOfGreenClothes: function() {
    return "your clothes look silly, little elf-man";
  }
}
//method is a function owned by an object
