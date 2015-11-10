$(document).ready(function() {

   var orangePic = "<img src='http://www.tuxpaint.org/stamps/stamps-thumbs/stamps/food/fruit/cartoon/orange.jpg'>"

   // CONSTRUCTOR FOR A TREE
   function tree() {
      this.orangeCount = 0;
   };

   // INSTANTIATE NEW INSTANCE OF TREE
   var tree = new tree();

   // ON CLICK OF WATER BUTTON
   // INCREMENT ORANGE COUNT OF TREE
   // AND LOG COUNT
   $('#water').click(function() {
      tree.orangeCount += 1;
      console.log(tree.orangeCount);
      $('.grove').append(orangePic);
   });

   $('#pick').click(function() {
      tree.orangeCount -= 1;
      console.log(tree.orangeCount);
      $('.grove img:last-child').remove();
   }); //end function Tree()





}); // end .ready
