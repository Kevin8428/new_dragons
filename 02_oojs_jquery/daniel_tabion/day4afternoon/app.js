// https://ga-students.slack.com/files/adrianac/F0DUT6KEF/-.txt

$(document).ready(function() {


$("#hide").click(function(){
  $("p").hide();
});

$("a").click(function(event){
  event.preventDefault();
  var link = $("a").prop("href")
  console.log(link);
});

}); // close .ready();
