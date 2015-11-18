$(document).ready(function(){

  $("a").click(function(event){
    event.preventDefault();
    var link = $("a").prop("href");
    console.log(link);
  });


})
