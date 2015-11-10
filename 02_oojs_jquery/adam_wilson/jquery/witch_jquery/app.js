
//when document is fully loaded, execute these
// with an anonymous function (a f. named "function")
$(document).ready(function() {


   $('#hide').click(function() {
      $("p").hide();
   });

   $('a').click(function(event) {
      event.preventDefault();
      var link = $('a').prop('href');
      console.log(link);

   });

   /////////////////////////////////////////
   // WITCH MELT CODE ///////////////////////
   //////////////////////////////////////////

   //  //hide fadein button on load
   //  $('#fadein').hide();
    //
   //  // when #hide button clicked do....
   //  $('#melt').click(function() {
   //      // $('h1').fadeOut();
   //      $('#witchImage').fadeOut();
   //      $('#melt').fadeOut();
   //      $('#fadein').fadeIn();
   //  });
   //  //when fadein button clicked do....
   //  $('#fadein').click(function() {
   //      // $('h1').fadeIn();
   //      $('#witchImage').fadeIn();
   //      $('#melt').fadeIn();
   //      $('#fadein').fadeOut();
    //
   //  });



}); // end .ready function
