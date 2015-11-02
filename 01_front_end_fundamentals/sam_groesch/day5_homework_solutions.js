// 1. lengths

function lengths(arrayOfStrings) {
  var strLengthArray = [ ];

  for (var inc in arrayOfStrings) {
    var tempLength = arrayOfStrings[inc].length;
    strLengthArray.push(tempLength);
  }
  return strLengthArray;
}

// 2. transmogrifier

function transmogrifier(x, y, z) {
  return Math.pow((x*z), z);
}

// 3. 
