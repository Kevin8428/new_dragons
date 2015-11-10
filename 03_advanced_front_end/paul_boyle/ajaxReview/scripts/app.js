var component = function()

$(document).ready(function(){
  $article=$('article');
  $('body').css('background-color','slategray');
  $('article').css('background-color','slategray').append('Hello World!<br>');


$.ajax({
  url:'http://www.omdbapi.com/?t=empire+strikes+back&y=&plot=short&r=json',
  tpye:'get',
  success:function(data){
    console.log(data);
    console.log('i am dis winner');

    var keys = Object.keys(data);
    console.log(keys);
    $('#movie').append('<br>');
    for(var key in keys){
      $('#movie').append(keys[key]+' : '+data[keys[key]]+' <br>');
    }

  },
  error:function(err){
    console.log('sorry something went wrong',error);
  }
})


  $.getJSON('http://shakeitspeare.com/api/poem',function(data){
    var keys = Object.keys(data);

  });

});
