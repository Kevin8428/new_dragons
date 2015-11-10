$(document).ready(function() {
  $("#hide").click(function() {
    $("p").hide();
  });

  $("a").click(function(e) {
    e.preventDefault();
    var link = $('a').prop('href');
  })
});
/*
.attr() => .prop
*/
