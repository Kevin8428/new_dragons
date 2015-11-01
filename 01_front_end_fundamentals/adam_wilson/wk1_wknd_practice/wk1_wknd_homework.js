
// ROUND 1
// the function lengths is called with an arg of the array strings. strings is mapped to a new Array (newArray). the .map method returns the length using .length as the value input to the newArray.

var strings = ['cube', 'sphere', 'box'];

function lengths(x) {
  var newArray = x.map(function(item) {
    return item.length;
  })
  console.log(x);
  return newArray;
} //end function lengths
lengths(strings);



// ROUND 2
function transmogrifier(num1, num2, num3) {
   return Math.pow((num1 * num2), num3)
}
transmogrifier(5, 4, 3)
// result 8000
transmogrifier(13, 12, 5
// result 92389579776
transmogrifier(42, 13, 7)
//result 14466001271480793000


// ROUND 3
//
function toonify(accent, sentence) {
  if (accent = 'daffy') {
    var newSentence = sentence.replace(/s/gi, 'th');
  }
  if (accent = 'elmer') {
    var newSentence = sentence.replace(/r/gi, 'w');
  }
  console.log(newSentence);
}
toonify('elmer', 'dangnabbit, that rascally rabbit!');
toonify('daffy', 'say, I suspect something fishy');


// ROUND 4
var helloWorld = "hello world";

function wordReverse(string){
  var array = string.split(" ");  // string > array separting by empty spaces (" ")
  array.reverse(); // reverses order of array items

  var newString = " ";
  for (var i = 0; i < array.length; i++) {
    var newString += array[i];
  }
  return newString;

}
wordReverse(helloWorld);

//   for (var i = 0; i < array.length; i++) {
//
//   }
//   return wordsReversed;
// }
// begin the clone wars have
// have wars clone the begin







// ROUND 5
function letterReverse(string) {
  // hello world > olleh dlrow
  str.split(" ", ) // sept with blank space so breaks into the words of sentence
}
