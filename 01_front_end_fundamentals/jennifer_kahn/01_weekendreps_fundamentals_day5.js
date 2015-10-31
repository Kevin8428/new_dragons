var flowers = ['daisy','rose','daffodil', 'tulip', 'sunflower'];
function lengths(arrayOfStrings) {

var myArray = [];
for(i = 0; i < arrayOfStrings.length; i++) {
myArray.push(arrayOfStrings[i].length);
}

console.log(myArray);
return myArray;
}
lengths(flowers)




function transmogrifier(num1, num2, num3){
var t = (num1 * num2);
return Math.pow(t, num3);
}

transmogrifier(5, 4, 3); ========> 8000
transmogrifier(13, 12, 5) =========> 92389579776
transmogrifier(42, 13, 7) ===========> 14466001271480793000















}
