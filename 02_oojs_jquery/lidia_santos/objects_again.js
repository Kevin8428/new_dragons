var lidia = {

  sayMyName: function() {
    return 'I am Lidia';
  },

middleName: 'Marcela',
siblings: '1',
age: '28',
car: 'versa note',
bike: 'trek',
season: 'summer',
holiday: 'new years',
store: 'best buy',
firstJob: 'kiddieland',
pet: 'lulu'

};
lidia.quirk = function(weird){

  return 'one quirk about me is' + weird;

}

lidia.dislikes = function(gross) {
  return gross + 'makes me gag';
}

lidia.buildAboutMe = function() {
  for ( i = 0; i < this.length; i ++){
    return this.name + 'has a hobby of ' + this.hobby;
  }

}





}\\\\
var err = {
  name: 'Error',
  sayMyName: function() {
    return 'I am ' + this.name;
  },
  makeFunOfGreenClothes: function() {
    return "Your clothes look silly, little elf-man";
  },
  changeName: function(newName) {
    if (typeof(newName) == 'string') {
      var oldName = this.name;
      this.name = newName;
      return 'Name has been changed to: ' + newName + ' and our old name was ' + oldName;
    } else {
      return 'That name is not a valid string';
    }
  }
};










///
object.keys(james)
