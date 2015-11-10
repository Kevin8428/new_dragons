var nick = {
  sayMyName: function() {
    return 'I am James';
  },
name: 'nick',
age: 28,
favcolor: 'blue',
dog: {
  name: 'marv',
  age: 1,
  breed: 'mini golden doodle'
},
hobby: 'working out',
movie: 'idiocracy',
shows: 'Chicago PD & Chicago Fire',
vacationSpot: 'Puerto Vallarta',
game: 'Call of Duty: Black Ops 3',
food: 'Lebanese',
};

var err = {
  sayMyName: function() {
    return 'I am ' + this.name;
  },
  makeFunOfGreenClothes: function() {
    return "your clothes look silly, little elf-man";
  },
  changeName: function(newName) {
    if (typeof(newName) == 'string') {
      this.name = newName;
      return 'Name has been changed to: ' + newName;
    } else {
      return 'That name is not a valid string';
    }
  }
};

nick.quirk = function(oneArg) {
  return 'a quirk of mine is I ' + oneArg;
}
nick.favFoods = function(twoArg) {
  return 'a favorite food type of mine is ' + twoArg + ' food.';
}
nick.buildAboutMe = function() {
  return this.name + '\'s favorite hobby is ' + this.hobby + ', ' + this.name + '\'s favorite type of food is ' + this.food + ', ' + this.name + '\'s favroite movie is' + this.movie + ', ' + this.name + '\'s favorite vacation spot is' + this.vacationSpot;
}

var batman = {
  name: 'Batman',
  location: 'Gotham City',
  realName: 'Bruce Wayne',
  favColor: 'Black',
  fears: 'Bats',
  ability: 'Fights Crime',
};

batman.tellStory = function() {
  return 'My favorite character\'s name is: ' + this.name + '. ' + 'Real Name: ' + this.realName + 'location: ' + this.location + 'Favorite Color: ' + this.favColor + 'Fears: ' + this.fears + 'Ability: ' + this.ability;
}
batman.tellStory();

Object.keys(batman);
