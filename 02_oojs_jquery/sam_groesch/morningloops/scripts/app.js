var foods = ['apple', 'banana', 'cow', 'tuna'];

var sam = {
  height: '5\'9\"',
  weight: 170,
  hairColor: 'Brown',
  runningSpeed: 'Slower than a cheetah, faster than most babies',
  familyMembers: ['Andy', 'Jenna', 'Nick', 'Joellyn', 'Andy Sr.']
};



window.onload = function() {

  for (var i = 0; i < foods.length; i++) {
    console.log(foods[i]);
  }

  var btn = document.getElementById('button');

  btn.onclick = function() {
    console.log('My button is working')
    sam.food(sam.familyMembers);
  }

  sam.food = function(arr) {
        for (var i = 0; i < arr.length; i++) {
          console.log('The element of the array is: ' + arr[i]);
        }
    }

  // using javascript console.log my button is working when it is clicked
  //Invoke your objects method using your button by passing in the object property that includes its arrray

}
