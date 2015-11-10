$(document).ready(function(){
  $('body').append('Hello World!<br><br>');
  //make a git request to an api on the spreadsheet in slack
  //append more than one element to the document
  $('body').css('background-color','slategray');

  //ajax call
  $.ajax({
    type:'get',
    url:'http://pokeapi.co/api/v1/pokedex/1',
    success: function(data){
      console.log('api call successful');
      console.log(data.pokemon);
      var keys = Object.keys(data.pokemon);
      console.log(keys);
      console.log(data.pokemon[0]);
      for(var key in keys){
        $('body').append(data.pokemon[key].name+'<br>');
      }

      $.ajax({
        type:'get',
        url:'http://pokeapi.co/api/v1/pokedex/1/pokemon/19',
        success:function(dat){
          console.log(dat);
        }
      })



    } , //end of success
    errorr: function(err){
      console.log('something went wrong');
    }//end of error
  }) //end of ajax
}) // end of doc.ready
