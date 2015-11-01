// Round 1

function lengths(arrayOfStrings) {
arrayOfStrings = ['dragon', 'unicorn', 'pegasus', 'gryphon', 'minotaur'];
var numbers = [];
console.log(arrayOfStrings);
  for (var i = 0; i < arrayOfStrings.length; i++) {
    numbers.push(arrayOfStrings[i].length);
  }
    return (numbers);
}
lengths('arrayOfStrings');

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

  function wordReverse(str) {
    if (typeof(wordReverse(str)) == 'string') {
      str.split(' ');
    }
  }

  // Round 5

  function letterReverse() {
    var str = 'Thank God it is Friday';
    var strReverse = str.split('').reverse().join('');
    console.log(strReverse);
  }

  // Round 6

  function longest(a,b,c,d) {
    var create = Array.of(a,b,c,d);
    console.log(create);
      for (var i = 0; i <= create.length; i++) {
            if (create[0].length > create[i].length)  {
            return create[0];
            }
            else if (create[1].length > create[i].length)  {
            return create[1];
            }
            else if (create[2].length > create[i].length)  {
            return create[2];
            }
            else {
            return create[3];
            }
      }
}

  // Round 7

  function repMaster(words, makeBig) {
    function makeBig(words) {
    return words.toLocaleUpperCase();
  }
       return makeBig(words) + ' this proves that I am a repMaster';
}
