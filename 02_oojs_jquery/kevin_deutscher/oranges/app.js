$(document).ready(function(){
var orangePic = '<img src ="http://www.clipartbest.com/cliparts/RcA/zb8/RcAzb84cL.png"alt="">';

function Tree(){

  this.orangeCount = 0;
};

var tree = new Tree();

$('#water').click(function(){
  if(tree.orangeCount>3){
    console.log('too many oranges');

  }
  else if (tree.orangeCount<1){
    console.log('no oranges');
  }
  tree.orangeCount +=1;
  //console.log(tree.orangeCount)

  $(".grove").append(orangePic);

});

$('#pick').click(function(){
  tree.orangeCount -=1;
  $(".grove img:last-child").remove();
  console.log(tree.orangeCount)

});






//click water add orange picture
//click pic take one away
//keep track of how many oranges the tree has

});//end of document.ready
