

window.onload = function() {

  var food = [ 'cereal', 'croissants', 'bananas', 'paninis','bagels'];
  for (var inc = 0; inc < food.length; inc++) {
  console.log(food [inc] + ' are always yummy in the morning!');
  }

  var lidia = {
    drink: 'water',
    food: 'food',
    dessert: 'oreos',
    transport: ['car', 'train', 'bike']
  }

  lidia.food = function(arr){
    for (var i = 0; i < arr.length; i++){
      console.log(arr[i] + 'i love food')
    }
  }



btn.onclick = function () {
  console.log('my button is working');
  var btn = document.getElementById('btn');
}



}// end of window onload





//// write out an array of five foods
// loop through the array and console.log each item with a message
// create an object with your name with 3 to 4 attributes including one array
// create a method for your object that accepts an argument that is an array and loops through the array and console.logs the array with a message!
// create a button in html
// style your button give it a border, color, radius, etc....(Maybee put it inside a div and center the dive on your screen)
// using javascript console.log my button is working when it is clicked
//Invoke your objects method using your button by passing in the object property that includes its arrray
