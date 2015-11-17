// round 1

function lengths(arrayOfStrings) {
  console.log(arrayOfStrings);

  var strLengthArray = [];

  for (var inc in arrayOfStrings) {
    var tempLength = arrayOfStrings[inc].length;
    strLengthArray.push(tempLength);
  }

  return strLengthArray;
}

// round 2

function transmogrifier(num1, num2, num3) {
  return Math.pow((num1 * num2), num3);
}

// round 3

function toonify(accent, sentence) {
  if (accent == 'daffy') {
    return sentence.replace(/s/g, "th")
  } else if (accent == 'elmer') {
    return sentence.replace(/r/g, "www")
  } else {
    return sentence;
  }
}


// round 4

function wordReverse(words) {
  var tempArray = words.split(" ");
  tempArray.reverse();
  return tempArray.join(" ");
}


// round 5

function letterReverse(someStuff) {
  var tempArray = someStuff.split(" ");
  var finalSentence = "";

  for (var inc in tempArray) {
    var word = tempArray[inc];
    var splitWord = word.split("");
    splitWord.reverse();
    word = splitWord.join("");
    finalSentence = finalSentence + " " + words;
  }

  return finalSentence;
}
