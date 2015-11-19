//
//
var foods = ['pizza', 'vegetable', 'fruit', 'cheese', 'chips'];
var martin = {
  fName: 'Marty',
  mName: 'Robert',
  lName: 'Ryan',
  cloths: ['pants', 'shirt', 'shoes', 'hat'],
  logArray: function(arr) {
    for (var inc in arr) {
      console.log(arr[inc] + ' is what I wear.');
    }
  }
};

for (var inc in foods) {
  console.log(foods[inc] + ' is delicious');
}
