//create a consttuctor fo ninja turtles
//ask for arguments: 'name','color','weapon','favoritePizzaType'
//implement our constructor
//create an instance of turtles for each of the 4 ninja turtles
//test this in the console of your choice

function turtle(name,color,weapon,favoritePizzaType){
  this.name=name;
  this.color=color;
  this.weapon=weapon;
  this.favoritePizzaType=favoritePizzaType;
}

var leonardo=new turtle('leonardo','blue','sword','cheese');
var raphael=new turtle('raphael','red','psi','pepperoni');
var donatello=new turtle('donatello','purple','stick','sasauage');
var michaelagelo=new turtle('michaelagelo','orange','nanchucks','mushroom');


//repeat the above process for lego characters
//heads
//special colors/cloths

function component(domElement) {
  this.domElement=domElement;
  this.initialize=function() {
    console.log('init');
  };
  this.render=function(){
    console.log('render');
  }
}
