$(document).ready(function(){
  var orangePic = '<img src= "http://i.ytimg.com/vi/qTdJwUUOO04/0.jpg">';

  // var component = {
  //   domElement: null;
  //   initiate: function(elementAttachTo, elementToAttach) { this.domElement = $(elementAttachTo).append(this.domElement);
  //   },
  //   remove: function(elementAttachTo) {
  //       $(+' img:last-child').remove();
  //   }
  // };

  // $('#water').hover(function(){
  //     $('#water').css(['height','width','font-weight'],['500px','500px','bold']);
  //     $('#water').html('CLICK ME')
  // }, function(){
  //
  // })

  function Tree() {
    this.orangeCount = 0;
  }

  var tree = new Tree();

  $('#water').click(function(){
      tree.orangeCount += 1;
      console.log(tree.orangeCount);
      $('.grove').append(orangePic);
  });


  $('#pick').click(function(){
      tree.orangeCount -= 1;
      console.log(tree.orangeCount);
      $('.grove img:last-child').remove();
  })

  var alligator = '<'
  var dog = '<'
})
