$(document).ready(function(){

  $('#hide').click(function(){
      $('p').hide();
  });
  $('#returnText').click(function(){
    $('p').show();
  });

  $('a').click(function(event){
    event.preventDefault();
    var link = $('a').prop('href');
    console.log(link);
  });

});
