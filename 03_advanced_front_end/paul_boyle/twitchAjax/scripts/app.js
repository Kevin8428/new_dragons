$(document).ready(function(){
  console.log('jQuery looks great!');
  var $body=$('body');
  $body.css('background-color','slategray');
  $body.append('Hello World!');

  var $stuff=$('#stuff');

  $.ajax({
    url:'https://api.twitch.tv/kraken/streams',
    tpye:'get',
    success:function(data){
      var $data=$(data);
      console.log(data,typeof data);

      var keys = Object.keys(data);
      for (var x in keys){
        var $ul=$('<ul>');

        $ul.append(keys[x]);
        $stuff.append($ul);
      }

      $stuff.append(data.streams);

    },
    error:function(err){
      console.log(err);
    }
  })//end of ajax

});
