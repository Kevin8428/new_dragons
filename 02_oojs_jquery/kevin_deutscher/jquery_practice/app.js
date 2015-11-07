$(document).ready(function($){
  //code goes here

//$('#firstBody').fadeOut();
//$('#secondBody').fadeIn();

$('#btnRemove').click(function(){
  $('#secondBody').slideToggle();
});

$('#btnAdd').click(function(){
  $('#secondBody').fadeIn();
});

$('#btnMessage').click(function(){
  alert('test message');
});

$('#btnMove').click(function(){
  $('#picture').fadeIn();
});

 $("a").click(function(event){
   event.preventDefault();
   var link = $("a").prop("href")
   console.log(link);
 });

});//document ready end
