$('document').ready( function() {
  var orangePic = '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Orange_pog.svg/2000px-Orange_pog.svg.png" alt="orange">';

  function Tree() {
    this.orangeCount = 0;
  }

  var tree = new Tree();
  $('body').append(orangePic);

  $(document).keydown(function(e) {
    switch(e.which) {
        case 37: // left
        $('img').animate({'left': '-=50'});
        break;

        case 38: // up
        $('img').animate({'top': '-=50'});
        break;

        case 39: // right
        $('img').animate({'left': '+=50'});
        break;

        case 40: // down
        $('img').animate({'top': '+=50'});
        break;

        default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
});

  // $('#pick').click(function() {
  //   tree.orangeCount--;
  //   $('#grove img:last-child').remove();
  //   console.log(tree.orangeCount);
  // });
  //
  // $('#water').click(function() {
  //   tree.orangeCount++;
  //   $('#grove').append(orangePic);
  //   console.log(tree.orangeCount);
  // });

});
