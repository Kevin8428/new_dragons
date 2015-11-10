$(document).ready(function() {
  var orangePic = "<img src=https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Emoji_u1f419.svg/1024px-Emoji_u1f419.svg.png>";
  var tree = new Tree();

  $("#water").click(function() {
    tree.addOrange();
    $(".grove").append(orangePic);
  });
  $("#pick").click(function() {
    if (tree.pickOrange() > 0)
      $(".grove img:last-child").remove();
  })
})

function Tree() {
  var orangeCount = 0;
  this.addOrange = function() {
    orangeCount += 1;
  }
  this.pickOrange = function() {
    if (orangeCount === 0)
      return orangeCount;
    else
      return orangeCount--;
  }
}
