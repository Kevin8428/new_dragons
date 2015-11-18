$(document).ready(function() {
  $("#hide").click(function() {
    $("p").hide();
  });

  $( "#show" ).click(function() {
    $( "p" ).show( "fast", function() {
      // Animation complete.
    });
  });

  $( "#bubbles" ).click(function() {
    $( "#bubbles" ).animate({
      opacity: 0.25,
      left: "+=50",
      height: "toggle"
    }, 5000, function() {
      // Animation complete.
    });
  });

  $('a').click(function(event){
    event.preventDefault();
    var link = $("a").prop("href");
    console.log(link);
  });

});
