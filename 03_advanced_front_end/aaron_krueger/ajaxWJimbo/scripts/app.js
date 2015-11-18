//max a get request to an api on the spreadsheet
$(document).ready(function(){
  $.ajax({
    type: 'get',
    url: 'http://pokeapi.co/api/v1/pokedex/1/',
    success: function(data){
        alert('i am teh winner');
        console.log(data);
        var body = $('body');
        var pokeList = $('ul');
        for (var i = 0; i < data.pokemon.length; i++) {
          pokeList.append('<li>'+data.pokemon[i].name+'</li>');
          console.log(i);
        }
        body.append(pokeList);
    },
    error: function(data){
      console.log('not the winner');
    }
  })

});
