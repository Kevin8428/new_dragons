var getPokemon = {
  type: 'get',
  url: '',
  success: function(data){
    $('.pokemon').append('<img src="http://pokeapi.co/' + data.image + '">');
  },
  error: function(){
    alert('That ain\'t no pokemon I ever heard of');
  }
};

var pokeurl = 'http://pokeapi.co/api/v1/sprite/';

$(document).ready(function() {
  
  $('#pokebutton').click(function(event) {
    getPokemon.url = pokeurl + $('#pokebox').val() + '/';
    $.ajax(getPokemon);
  });

});
