//create constructor for ninja turtles
//ask for arguments: name, color, waepon
//implement our constructor
//create an instance of turtles for the 4 ninja turtles
//test this in the console of your choice

function ninjaTurtles(name, color, weapon){
    this.name = name;
    this.color = color;
    this.weapon = weapon;

    this.turtleInfo = function(){
      return 'name: ' + this.name
    };
};

var turtle1 = new ninjaTurtles('donatelo', 'blue', 'knife');
console.log(turtle1);


//repeat above process for lego characters
//special individual heads
//special colors/clothes
//accessories

function legoPeople(head, color, other){
    this.head = head;
    this.color = color;
    this.other = other;
}

var dave = new legoPeople('smallhead', 'red', 'helmet');
var john = new legoPeople('largehead', 'white', 'backpack');

//input 'dave' to terminal will result:
//legoPeople {head: "smallhead", color: "red", other: "helmet"}
