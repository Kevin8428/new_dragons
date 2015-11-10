$(document).ready(function() {
  $.ajax(getWeather);
}); //end of doc.ready

var getWeather = {
  type: 'get',
  url: 'http://api.openweathermap.org/data/2.5/weather?id=2643743&appid=0c3a2f1c07d60262d96b127f0e6164e7',
  data: 'json',
  success: function(data){
    console.log('We did it');
    console.dir(data);
    $('.weather').append('<li>This city is called ' + data.name + ' and the current temperature is ' + Math.round(data.main.temp * 9/5 - 459.67) + ' degrees Fahrenheit' + '</li>');
  },
  error: function() {
    console.log('It didn\'t work');
  }
}
