///1. ----------------------------------------------------------------

var arrayOfStrings = ['kevin', 'john', 'jim', 'andrew'];

function lengths(){
    var newArray = [];
    for (var i = 0; i < arrayOfStrings.length; i++) {
      console.log(arrayOfStrings[i].length);
      newArray[i] = arrayOfStrings[i].length;
    }
    return newArray;
}

lengths(arrayOfStrings);

///2. ----------------------------------------------------------------

function transmogrifier(a, b, c){
    var multiply = a * b;
    console.log(multiply);
    console.log(Math.pow(multiply,c))

}
transmogrifier(5, 4, 3);
transmogrifier(13, 12, 5);
transmogrifier(42, 13, 7);

///3. ----------------------------------------------------------------

var a;
var b;


function toonify(a,b){
   var newSent;
    if(a="daffy"){
        //console.log(b);
        newSent = b.replace(/s/i,"th");
        //console.log(newSent);
        return newSent
    }
    else return b;
}

toonify("daffy", "so you smell like sausage");

///4. ----------------------------------------------------------------


function wordReverse
