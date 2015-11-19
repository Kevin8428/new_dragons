$(document).ready(function(){
  var orangePic = '<img class="orange" src="http://www.clipartbest.com/cliparts/RcA/zb8/RcAzb84cL.png">';

  function Tree(){
    this.orangeCount = 0;
  };

  var tree = new Tree();

  $('#water').click(function(){
    tree.orangeCount += 1;
    // console.log(tree.orangeCount);

    $('.grove').append(orangePic);
    var randomSize = Math.random() * 100;
    var randomPos_x = Math.random() * 300;
    var randomPos_y = Math.random() * 300;
    $('.grove .orange:last-child').css({'width': randomSize, 'position':'absolute', 'top': randomPos_y, 'left':randomPos_x});
    });

  $('#pick').click(function(){
    tree.orangeCount -= 1;
    $(".grove img:last-child").remove();
  });

  $('#rando').click(function(){
    var totalOranges = $('.grove .orange').length;
    console.log(totalOranges);
    var randomPos_x = Math.random() * 300;
    var randomPos_y = Math.random() * 300;
  //  $('.grove').each().css({'top': randomPos_y, 'left':randomPos_x});
  });

});
