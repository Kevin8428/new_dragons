$(document).ready(function(){

$( "#clickme" ).click(function(){
    $( "#fu" ).fadeOut();
});

$("a").click(function(event){
  event.preventDefault();
  var link = $("a").prop("href")
  console.log(link)
});
});
