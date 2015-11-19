$(document).ready(function() {

  $('a').click(function(event) {
    event.preventDefault();
    var link = $('a').prop('href');
    console.log(link);
  });


  $('#hide').click(function() {
    $('h1').fadeOut(3000, function() {
      $('h1').fadeIn(3000);
    });
  });
});
