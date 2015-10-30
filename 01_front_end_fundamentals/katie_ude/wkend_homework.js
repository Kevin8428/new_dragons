// Round 1

var mythAnimals = ['dragon', 'unicorn', 'pegasus', 'gryphon', 'minotaur'];
  for (var i = 0; i < mythAnimals.length; i++) {
    console.log(mythAnimals[i].length);
  }

  function length(mythAnimals) {
    for (var name in mythAnimals) {
      Array.from(mythAnimals[name]);
    }
  }


  // Round 2
  function transmogrifier(a, b, c) {
    var result = a * b;
    if (a * b !== 0) {
      return Math.pow(result, c);
    }
  }

  // Round 3
  function toonify(accent, sentence) {
    if (accent == 'daffy' && sentence == 'so you smell like sausage') {
      var str = sentence;
      var newStr = str.replace(/s/gi, 'th');
      console.log(newStr);
    }
    else if (accent == 'elmer' && sentence == 'be very, very quiet, I\'m hunting rabbits') {
      var str2 = sentence;
      var newStr2 = str2.replace(/r/gi, 'w');
      console.log(newStr2);
    }
    else
      console.log(sentence);
  }

  // Round 4
  
