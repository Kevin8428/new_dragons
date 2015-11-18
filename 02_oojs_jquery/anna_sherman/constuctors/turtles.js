//creat a constructor for ninja turtles
// arguments: name color weapon pizzatype
//create an instance of turtles for each of the 4 ninja turtles
//test in console.

function potterchar(name, pet, patronus, house){
  this.name=name;
  this.pet=pet;
  this.patronus=patronus;
  this.house=house;
}

var harryPotter = new potterchar('harry', 'Hedwig', 'stag', 'Gryffindor');
var hermioneGrainger = new potterchar('hermione', 'crookshanks', 'otter', 'Gryffindor' );
var dracoMalfoy = new potterchar('Draco', 'Dobby', 'snake', 'Slytherin');
var lunaLovegood = new potterchar('Luna', 'Nargles', 'hare', 'Ravenclaw');


function superhero(name, power, universe){
  this.name=name;
  this.power=power;
  this.universe=universe;
}

var thor = new superhero('thor', 'ultrastrong', 'Marvel');
var ironMan = new superhero('tony', 'ultrasmart', 'Marvel');
var captainAmerica = new superhero('Steve', 'eugenetic lottery', 'Marvel');
