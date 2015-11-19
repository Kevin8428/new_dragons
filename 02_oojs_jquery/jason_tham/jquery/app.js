$( window ).load(function(){

$('a').click(function(event){
  event.preventDefault();
  var link = $(this).prop('href');
  console.log(link);
});


$('#hide').click(function(){
  $("p").toggle("slow", function(){
  }); //end of toggle
}); //end of click

$('#change').click(function(){
  $( "div" ).css( "border", "2px solid red" )
    .add( "p" )
    .css( "background", "yellow" );
});

}); //end of window.load
