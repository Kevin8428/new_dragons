//api key open weather map 80e874e6a04a886b1b75d77902ad75dd
$(document).ready(function() {

$.ajax(getWeather);

}); //end of document ready
// console.log('all loaded');

var getWeather = {
  type: 'get',
  url: 'http://api.openweathermap.org/data/2.5/weather?id=3991328&appid=80e874e6a04a886b1b75d77902ad75dd',
  data: 'json',
  success: function(data){
    console.log('fuck yeah');
    console.dir(data);
    $('#weather').append('<li>The city is called ' + data.name + '</br>' + ' and the current temperature is' + '</br>' + '<span>' + Math.round(data.main.temp * 9/5 - 459.67) + '°F </span>' + ' </li>');
  },
    error: function(){
      console.log('it didnt work shithead')
    }
}

// {"_id":3991328,"name":"Puerto Vallarta","country":"MX","coord":{"lon":-105.230659,"lat":20.620411}}
