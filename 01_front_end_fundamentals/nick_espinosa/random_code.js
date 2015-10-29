function cakeRecipe(eggs, flour, flavor) {
return "yum, we made a " + flavor + " cake. It was great. Thanks for the help, " + name;
}
var name = 'Jim Haff';
cakeRecipe(3, 'wheat', 'strawberry');

function reNameGlobal(newName) {
name = newName;
}
reNameGlobal('adriana');
cakeRecipe(9, 'sugar', 'red velvet');

makeACake('chocolate');
function makeACake(arg) {
return arg;
}

var autoMake = "Ford";
var autoModel = "LTD";

function showAuto(year){
function autoInfo(){
var price = 124;
console.log("Auto is a " + year + " " + autoMake + " " + autoModel + ", it's price is " + price + "$");
}
autoInfo();
};
showAuto(1969);

function sayHello(words) {
return name + ' says ' + words;
}
var name = 'Cecelious';
sayHello('working on my night cheese');

function whatFav(a) {
  return petName + "\'s" + " favorite food is " + a;
}
var petName = 'marv';
whatFav('cheese');
