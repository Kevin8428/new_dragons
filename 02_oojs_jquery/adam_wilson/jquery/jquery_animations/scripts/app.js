$(document).ready( function() {

   console.log('all loaded');
   // $('h1').fadeOut('slow');
   // or medium or fast or in milisecs

   // "move the snail thru the maze"
   $("#btnRight").click(function() {
      console.log('my button is working');
      $(".box1").animate({'left': '+=50px'}, 'slow');
      $('header').css("background-color", "red");
      $('.talkToSnail').append("Go on home little Mr. Snail. ");
   })

   $("#btnLeft").click(function() {
      console.log('my button is working');
      $(".box1").animate({'left': '-=50px'}, 'slow');
   })

   $("#btnUp").click(function() {
      console.log('my button is working');
      $(".box1").animate({'top': '-=50px'}, 'slow');
   })

   $("#btnDown").click(function() {
      console.log('my button is working');
      $(".box1").animate({'top': '+=50px'}, 'slow');
   })





}); // end of document.ready fucntion
