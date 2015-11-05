

function turtle(name, colour, weapon){
  //native js array
  this.args = arguments;

  this.name = name;
  this.colour = colour;
  this.weapon = weapon;


}

var leonardo = new turtle('leo bitch', '#bluehexcode', 'katanas');
var donatello = new turtle('downatello', 'purple', 'a big stick');
var michelanglo = new turtle('michael', 'orange', 'sais');
var raffeal = new turtle('raffeal', 'red', 'nunchucks');

console.log(leonardo);


function legoToon(head, clothes, acc){
  this.head = head;
  this.clothes = clothes;
  this.acc = acc;
}

var wonda = new legoToon('female', 'nurse', 'chainsaw');

console.log(wonda);


function hidden(_hiddenName, _hiddenColour, _hiddenThing){

  //using private variables using lexical scope (closure)
  this.getName = function(){
    return _hiddenName;
  }
  this.getColour = function(){
    return _hiddenColour;
  }
  this.setName = function(name){
    _hiddenName = name;
    name = prompt('Set new name');
  }
  this.getThing = function(){
    return _hiddenColour;
  }
}
