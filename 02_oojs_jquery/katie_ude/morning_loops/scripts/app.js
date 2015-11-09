window.onload = function () {

// write out an array of five foods
var foods = ['peaches', 'pears', 'blueberries', 'mangos', 'bananas'];

// loop through the array and console.log each item with a message

function fruitNames() {
  for (var i = 0; i < foods.length; i++) {
    console.log('Do you like to eat ' + foods[i] + '?');
  }
}

// creat an object with your name with 3-4 attributes including one array

var Katie = {
  favBands: ['Daft Punk', 'Muse', 'MSMR'],
  favShow: 'Gilmore Girls',
  favAuthor: 'Margaret Weis'
}

// create a method for your object that accepts an argument that is an array and loops through the array and consol.logs the arrya with a message!

Katie.music = function(arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log('You should check out...' + arr[i] + ' they are great!')
  }
}

// create a button in HTML -- go to loop.html

// style your button to give it a border, color, radius, etc... (maybe put it inside a div and center the div on your screen)

// using javascript console.log 'my button is working' when it is clicked

var btn = document.getElementById('btn');

btn.onclick = function() {
  console.log('my button is working');
  Katie.music(Katie.favBands);
}

} //end of window onload
