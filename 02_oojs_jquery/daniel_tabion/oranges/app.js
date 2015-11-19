//water adds orange to screen
//pick takes away
//keep track of oranges
$(document).ready(function() {
  console.log('window loaded');
  var orangePic =  '<img class="orangeLink" src="http://clipartist.net/openclipart.org/2013/Mo/AhNinn/hot_dog_rounded-1969px.png" alt="theOrange"></img>';

  function Tree(){
    this.orangeCount = 0
  };

  var tree = new Tree();

  $("#water").click(function() {
    tree.orangeCount++;
    console.log('watering' + tree.orangeCount);
    $(".grove").append(orangePic);
  });

  // $("#pick").click(function(event) {
  //   tree.orangeCount -=1;
  //   $(".grove img:last-child").fadeOut();
  //   $(".grove img:last-child").remove(); // need to defer this until fade is done
  //   });

  var d1 = $.Deferred();
  $.when(d1).done( $(".grove img:last-child").remove(); );

//
//
//
}); // end read();
