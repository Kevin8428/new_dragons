// write out an array of five foods
// loop through the array and console.log each item with a message
// create an object with your name with 3 to 4 attributes including one array
// create a method for your object that accepts an argument that is an array and loops through the array and console.logs the array with a message!
// create a button in html
// style your button give it a border, color, radius, etc....(Maybee put it inside a div and center the dive on your screen)
// using javascript console.log my button is working when it is clicked
//Invoke your objects method using your button by passing in the object property that includes its arrray


window.onload=function(){
  console.log('Javascript is working!');

  paul = {
    height:'5ft 9in',
    eyeColor:'blue',
    favoriteFoods:['pizza','pbj','steak','pasta','hamburger'],
    hairColor:'brown',
    listFavoriteFoods:function (arr){
      for(var food in arr){
        console.log(arr[food]);
      }
      return console.log('Done listing foods!');
      }
    }
  }
