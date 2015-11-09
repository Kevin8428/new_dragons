var food = ['spaghetti', 'pizza', 'breadsticks', 'meatballs', 'garlic bread']

var stephen = {
  eyeColor: 'brown',
  hairColor: 'brown',
  brothers: ['Quinn', 'Mark'],
  status: 'student'
};

function buttonDo() {
  console.log('My button is working!')
}

// make sure variables are above the scope of the
// window onload function (lexical scope) --
// they won't be accessed otherwise

window.onload = function() {


function tellFood() {
  for (var i = 0; i < food.length; i++) {
    console.log(food[i] + ' is delicious!')
  }
}

tellFood()



stephen.tellBro = function(arr){
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i] + ' is my brother')
  }
}

//stephen.tellBro(stephen.brothers)

/*
var btn = document.getElementById('btn';
btn.onclick = function() {
console.log('my button is working');
stephen.tellBro(stephen.brothers);
}
*/




} // end of window onload
