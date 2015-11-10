  var jt = {
    height : '5\' 10\"',
    weight : 'none of your business',
    city : 'Chicago',
    name : 'Jason Tham',
    balls : true,
    age : 33,
    team : 'Cubs',
    actor : 'De Niro',
    game : 'Final Fantasy VI',
    top5movies : ['Godfather II','Blade Runner','The Big Lebowski','The Third Man', 'The Good\, the Bad\, \& the Ugly'],
    drink : 'Scotch',
    sayNyName: function(){
      return 'I am ' + this.name;
    }
  };

  jt.quirk = function(arg1){
    return 'twirl hair with '+ arg1;
  }

  jt.insufferable = function(){
    for (var variable in jt.top5movies) {
      console.log(jt.top5movies[variable] + ' is a magnum opus from a visionary executing a mastery of mis en scene.');
    }
    return null;
  }

  jt.woo = function(){
    var result = team + ' woo!';
    console.log(result);
    return result;
  }
  jt.buildAboutMe = function(){
    for (var variable in this) {
      if (typeof this[variable] != 'function') {
      console.log(this.name + ' has a ' + variable + ' of ' + this[variable]);
      }
    }
  }

var err = {
    sayMyName: function() {
      return 'I am ' + this.name;
    },
    makeFunOfGreenClothes: function() {
      return "Your clothes look silly, little elf-man";
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
