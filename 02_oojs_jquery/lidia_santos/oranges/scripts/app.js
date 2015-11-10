$(document).ready(function(){
var orangePic= '<img src="https://s-media-cache-ak0.pinimg.com/236x/6b/88/64/6b88643fb5425d046e8850012a633930.jpg" alt="" height="100" width="100" />';
var peeledOrange = '<img src="http://www.spinarecipe.com/userfiles/image/Cooking%20Tips/orange-peel.jpg"height="100" width="100"/>';
 var orangeJuice = '<img src="https://openclipart.org/image/800px/svg_to_png/224375/orange-juice-glitch.png" alt="" height="130" width="100" />';

 var mimosaPic = '<img src="http://www.polyvore.com/cgi/img-thing?.out=jpg&size=l&tid=52064541" alt="" height="130" width="100" />';

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
  tree.orangeCount -=1;
  $(".grove img:last-child").remove();
});

$("#peel").click(function(){
  $(".grove img:last-child").replaceWith(peeledOrange);
});

$("#juice").click(function(){

  $(".grove img:last-child").replaceWith(orangeJuice);
});

$("#mimosa").click(function(){

  $(".grove img:last-child").replaceWith(mimosaPic);
});



});//end
