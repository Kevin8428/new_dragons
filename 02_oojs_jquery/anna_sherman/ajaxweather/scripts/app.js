$(document).ready(function(){

$.ajax(getWeather);

}); //end document.ready

// dont keep objects inside of document.ready

var getWeather = {
  type: 'get',
  url: 'http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=d82f9eab449ad4751e29c066edadffe0',
  data: 'json',
  success: function(data){
    console.log("data retrieved");
    console.dir(data);
    $('.weather').append('<li>The city is called ' + data.name + ' and the temperature is ' + (parseInt(data.main.temp) - 273) + ' degrees Celcius.</li>');
  },
  error: function() {
    console.log("it didnt work");
  }
}
