$(document).ready(function() {
  console.log("status: ready");

  var orangePic = '<img src="http://www.mathgames.com/object-images/svg/fruits_1orange.svg"/>'

  function Tree() {
    this.orangeCount = 0;
  };

  var tree = new Tree();

  $("#water").click(function() {

    for (var i = 0; i < 10*Math.random(); i++) {
      tree.orangeCount += 1;
      console.log(tree.orangeCount);
      $(".grove").append(orangePic).css({top: parseInt(100*Math.random()), left: 200, position:'absolute'});
      // $("img").css({top: parseInt(100*Math.random()), left: 200, position:'absolute'})
    }

  });

  $("#pick").click(function() {
    tree.orangeCount -= 1;
    console.log(tree.orangeCount);
    //$(".grove img:last-child").remove();
    $(".grove").empty();
  });

  $("#mydiv").parent().css({position: 'relative'});
  $("#mydiv").css({top: 200, left: 200, position:'absolute'});






}); // end of document.ready()
