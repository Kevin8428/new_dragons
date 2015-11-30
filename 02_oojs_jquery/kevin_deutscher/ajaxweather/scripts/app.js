//API Key from http://home.openweathermap.org/
$(document).ready(function(){

  $.ajax(getWeather);










});//end of document.ready


var getWeather = {
  type: 'get',
  url:
  'http:api.openweathermap.org/data/2.5/weather?id=1269750&appid=a05bfd071a37e53235764306afc842d8',
  data: 'json',
  success: function(data){
    console.log('we did it');
    console.dir(data);
    $('#landlord').append('<li>the city is called ' + data.name + ' and the current temperature is '+ Math.round(data.main.temp *9/5 -459.67) + '.</li>');
  },
  error: function(){
    console.log('it didnt work');
  },

}
//can do get, post, update request









//
