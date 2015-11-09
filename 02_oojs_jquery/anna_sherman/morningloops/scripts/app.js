// console.log("hello");
window.onload = function () {

var foods = ['apples', 'bananas', 'potatoes', 'pancakes', 'starbucks'];

for (var food in foods) {
  console.log("I like " + foods[food]);
}

var anna = {
  name: 'Anna',
  age: 21,
  location: "Lakeview",
  roommates: ['rebecca', 'maddie', 'emilie']
}

anna.print = function(inputArray){
  for (var i in inputArray){
    console.log("This is a super cool " + inputArray[i]);
  }
}

// var button1 = document.createElement('button1');

button1.onclick = function(){
  console.log("hello yes this button is working");
  console.log(anna.print(foods));
}

};
