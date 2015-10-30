

var firstName = 'John'; // 1
var lastName = 'Dowd'; // 2
var age = 19; // 3
​
function displayPerson(fname, lname){ //4, 5
  var prefix = 'Mr'; // 6
  var fullName = null; // 6
​
  function getFullName(){ // 7
    var suffix = "Esq.";  // Everybody's a lawyer, eh.
    return  fullName = prefix + " " + fname + " " + lname + " " + suffix;
  };
​
  return getFullName();
};
​
function removeYears(){ // 8
  var minusYears = 10, age = 49;
  return age - minusYears;
};
​
console.log (displayPerson(firstName, lastName));
console.log(removeYears());


var name = "jen"
function sayHello(name){
return "Hello, " + sayHello
}

function myFunction(x){
if (x > 30) {
  return x - 10;
} else if (x < 10) {
  return x;
  }
return x - 1;
  }

  function square(x) {return(x * x)};
  function cube (x){
     return(x * square(x));
  }
  console.log(cube(2));


function totalUp(a, b, c) {
var tot = a + b + c;
if (tot > 0) {
 return tot;
}
}
totalUp(2, 4, 6, 8);

function large(x) {
  large.max(5, 10, 15, 20);
}

function myFunction(b) {
    var b = Math.max(0, 150, 30, 20, 38)};


function myFunction(x) {
  if (x > 30) {
    return x - 10;
  } else if (x < 10){
    return x;
  }
    return x - 1;
}
var fruits = ['apple', 'orange', 'banana']
fruits.pop()
fruits.push('grape')
fruits.push('banana')

var ghosts = ['blinky', 'inky', 'pinky'];
ghosts.push()
ghosts.pop();

var ages = [26, 28, 30, 28, 17];

var monkees = ['peter tork', 'micky dolenz', 'davy jones', 'michael nesmith'];

var rainbowColors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
for (var i = 0; i < rainbowColors.length; i++) {
  console.log(rainbowColors[i]);

}
