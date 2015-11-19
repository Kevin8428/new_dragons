// 20a5280e51653b54bd99dc4a2bb74567 -- api key

$(document).ready(function(){ // start

$.ajax(getWeather);

  }); // end

var getWeather = {
  type: 'get',
  url: 'http://api.openweathermap.org/data/2.5/weather?id=5250074&appid=20a5280e51653b54bd99dc4a2bb74567',
  data: 'json',
  success: function(data){
    console.log('We did it!');
    console.dir(data);
    $('#weather').append('<li>The county is called ' + data.name + ' and the temperature is ' + Math.round(data.main.temp * 9/5 - 459.67) + '°F.</li>');
  },
  error: function() {
    console.log('It didn\'t work.');
  }
}


//Other option: Math.round((data.main.temp - 273.15) * 1.8000 + 32.00)
