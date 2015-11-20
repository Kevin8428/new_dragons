//make get request to API on spreadsheet and append more than one element to the DOM
//in your success function


$(document).ready(function(){

$.ajax(getOmdb);
$.ajax(getCountry);


});//end of document.ready

var getOmdb = {
  type: 'get',
  url:
  'http://pokeapi.co/api/v1/pokedex/1/',
  //'http:api.openweathermap.org/data/2.5/weather?id=1269750&appid=a05bfd071a37e53235764306afc842d8',
  data: 'json',
  success: function(data){
    console.log('we did it');
    console.dir(data);
    $('.Omdb').append('<li>test element</li>');
    //$('.Omdb').append('<li>the movie is called ' + data.name + ' and the director is ' + '.</li>');
  },
  error: function(){
    console.log('it didnt work');
  },

}

var getCountry = {
  tye: 'get',
  url:
  'https://restcountries.eu/rest/v1/all',
  data: 'json',
  success: function(data){
    console.log('we did it');
    console.dir(data);
    $('.country').append('<li>the country is called ' + data.name + ' and the population is ' + '.</li>');
  },
  error: function(){
    console.log('it didnt work');
  },

}
