var kevin {
  fName: 'kevin',
  lName: 'deutscher',
  age: 27,
  jobs: ['merrillLynch', 'santander','northwestern']
}

var foods = ['apple', 'pizza', 'soup', 'burger', 'salad'];



//-----------
window.onload = function(){

  var btn = document.getElementById('btn');
  btn.onclick=function(){
    console.log('my button is working');
  }

for (i=0; i<foods.length; i++){
  console.log(foods[i] + ' is good');
}



kevin.food = function(arr){
  for (var i=0; i<arr.length; i++)
      console.log(arr[i] + 'some string');
}

 var testMethod =  function(foods){
   for (i = 0; i < foods.length; i++)
   console.log(foods[i] + 'new method message');
}


var returnMessage = function(){
  console.log("button is working");
}
}// end of window onload
