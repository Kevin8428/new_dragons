// 5-10 attribute about yourself
var katie = {

  sayMyName: function() {
    return 'I am Katie';
  },
  name: 'Katie',
  age: 30,
  favColor: 'pink',
  hood: 'Old Town',
  sibs: 'one brother',
  holiday: 'Christmas',
  author: 'Margaret Weis',
  movie: 'Willow',
  sport: 'figure skating',
  season: 'Summer'
},

  katie.buildAboutMe = function() {
    return 'My name is ' + this.name + ' and I just turned ' + this.age + 'last month. Even though I was born in the Fall, my favorite season is ' + this.season + '. However I am still very excited that' this.holiday + 'is happening soon and I will be seeing my ' + this.sibs + '.'
}

  katie.quirk = function(oneArg) {
      return 'Many people might not know ' + oneArg;
  }

  katie.funFact = function(fact) {
      return 'Oddly enough ' + fact;
  }

  katie.smile = function(exp) {
      return 'Many things make me smile, but ' + exp + '!';
  }

  katie.buildAboutMe = function() {
    return 'My name is ' + this.name + ' and I just turned ' + this.age + 'last month. Even though I was born in the Fall, my favorite season is ' + this.season + '. However I am still very excited that' this.holiday + 'is happening soon and I will be seeing my ' + this.sibs.
}

var err = {
    name: 'Error',
    sayMyName: function() {
      return 'I am ' + this.name;
    },
    makeFunOfGreenClothes: function() {
      return 'Your clothes look silly, little elf-man';
    },
    changeName: function(newName) {
      if (typeof(newName) == 'string') {
        var oldName = this.name;
        this.name = newName;
        return 'Name has been changed to: ' + newName + ' and our old name was ' + oldName;
      }
      else {
        return 'That name is not a vaid string';
      }
    }

};

var Sioned = {
  name: 'Sioned',
  hobby: 'avoiding water',
  bestFriend: 'Camigwen',
  husband: 'Rohan',
  home: 'Desert',
  ability: 'sunrunner'
  // 5 properties about your character
  // 1 ability
  // tell the world their story
},
  Sioned.tellStory = function() {
    // a sentence about them using their properties
    return this.name + ' was called to the ' + this.home + ' by the mistress of Goddess Keep. The purpose was to meet her intended husband ' + this.husband + '. On her trip she had some traveling companions including her best friend, ' + this.bestFriend + '. They ended up taking a long route since they were trying to ' + this.hobby + '.'
}
// Objects.keys(katie)
