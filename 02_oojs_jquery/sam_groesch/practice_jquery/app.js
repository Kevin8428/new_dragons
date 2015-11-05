$(document).ready(function() {
  console.log('jQuery loaded')
  $('li').after('Awesome lists man!');
  $("p").slideUp(800);
  $("#hide").click(function(){
    $("section").hide();
  });
  $('#btn').click(function(){
    $('#hide').append('Haha, no this button!');
    $('p').slideDown(2000);
    $('p').append('This is soooooooo slow');
    $('li').clone().appendTo('ul');
  });

});
