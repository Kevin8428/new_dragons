$( document ).ready( function() {
//   for(i = 0; i < 5; i++ ) {
//     $('#site-title').slideUp( 300 ).delay( 800 ).fadeIn( 400 );
//   }
// });
// $('#hide').click( function() {
//   $(this).fadeOut();
  $('a').click( function(e) {
    e.preventDefault();
    console.log(e);
    var link = $('a').prop('href');
  })
});
