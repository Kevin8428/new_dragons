$(document).ready(function() {
  var orangePic = '<img src = "http://www.lemongraphic.sg/wp-content/uploads/Small_orange.png" alt="orange">';

  function Tree () {
    this.orangeCount = 0;
  };

  var tree = new Tree();

  $("#water").click (function() {
    tree.orangeCount += 1;
    console.log(tree.orangeCount);


  $(".grove").append(orangePic);

  });

  $("#pick").click (function () {
    tree.orangeCount -= 1;
    $(".grove img:last-child").remove();

  });
});
