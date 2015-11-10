

$(document).ready(function() {
  var orangePic = '<img src="http://www.clker.com/cliparts/9/0/2/6/12862289201352908745orange%20slice.svg.med.png">';

  function Tree(){
    this.orangeCount = 0;
  }

  var tree = new Tree();
  $('#water').click(function() {
    // body...
    tree.orangeCount += 1;
    console.log(tree.orangeCount);
    $('.grove').append(orangePic);
  });

  $('#pick').click(function() {
    // body...
    tree.orangeCount -= 1;
    console.log(tree.orangeCount);
    $('.grove img:last-child').remove();
  });

}); //end of document ready
