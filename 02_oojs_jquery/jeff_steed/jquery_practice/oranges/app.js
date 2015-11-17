$(document).ready(function() {
  var orangePic = "<img id='orange' src='http://www.clipartbest.com/cliparts/abT/yRz/abTyRzbiL.png' alt=''>";

  function Tree() {
    this.count = 0;

    this.water = function() {
      this.count++;
    };

    this.pick = function() {
      this.count--;
    };

  };

var tree = new Tree();
$('#water').click(function() {
  tree.water();
  $('.grove').append(orangePic);
  $('.grove #orange:last-child').css('width', getSize());
});
$('#pick').click(function() {
  tree.pick();
  console.log(tree.count);
  $('.grove img:last-child').remove();
});
$('#removeAll').click(function() {
  tree.count = 0;
  $('.grove img').remove();
  console.log(tree.count);
});


function getSize() {
  return Math.floor(Math.random() * 100 + 1) + "px";
}

});
