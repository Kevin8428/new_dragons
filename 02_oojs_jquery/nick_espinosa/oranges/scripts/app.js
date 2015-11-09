$(document).ready(function() {

var orangePic = '<img src="http://1.bp.blogspot.com/_9DbWcozSA54/S9Y_SYa3gSI/AAAAAAAABEU/IL4kA8-EUrc/s1600/Orange+Juice+Copy.png">';

function Tree(){
  this.orangeCount = 0;
};

var tree = new Tree();
$("#water").click(function(){
  tree.orangeCount += 1;
  console.log(tree.orangeCount);
$(".grove").append(orangePic);

});


$("#pick").click(function(){
  if(tree.orangeCount <= 0){
    tree.orangeCount = 0;
    console.log('you dont have any damn oranges');
  } else {
  tree.orangeCount -=1;
  console.log(tree.orangeCount);
  $(".grove img:last-child").remove()
};
});



});//end of document ready
