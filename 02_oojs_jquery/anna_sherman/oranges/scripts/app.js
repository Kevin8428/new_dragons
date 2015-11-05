$(document).ready(function(){

var orangePic = '<img src="http://www.clipartbest.com/cliparts/abT/yRz/abTyRzbiL.png" alt="orange" height=10% width=10%>';

function Tree() {
  this.orangeCount=0;
}; //constructor

var tree = new Tree(); //a new tree object

$("#water").click(function(){
  for (var i = 0; i < parseInt((10*Math.random()))&&tree.orangeCount<50; i++) {
  tree.orangeCount+=1;
  console.log(tree.orangeCount);
  $(".grove").append(orangePic);
  }
});


$("#pick").click(function(){
  tree.orangeCount-=1;
  $(".grove img:last-child").remove(); //use pseudo cases to get the LAST child.
  console.log(tree.orangeCount);
});

$("#clear").click(function(){
  $(".grove").empty();
  tree.orangeCount = 0;
  console.log(tree.orangeCount);
});

}); //end document.ready
