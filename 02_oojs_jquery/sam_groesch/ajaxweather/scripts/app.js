// 08e0f5e4a9091c0ebe2ee8bd12fbe085 //API key

$(document).ready(function(){

$.ajax(getWeather);



}) //end of doc.ready


var getWeather = {
  type: 'get',
  url: 'http://api.openweathermap.org/data/2.5/weather?id=500023&appid=08e0f5e4a9091c0ebe2ee8bd12fbe085',
  data: 'json',
  success: function(data) {
    console.log('We did it!');
    console.dir(data);
    $('.weather').append('<li>The city is called ' + data.name + ',</li>');
    $('.weather').append('<li>the current temperature is ' + Math.round(((data.main.temp - 273.15)*9/5)+32)  + ' degrees Fahrenheit,</li>');
    $('.weather').append('<li>and the weather is currently ' + data.weather[0].description + '.</li>');
  },
  error: function() {
    console.log('It didn\'t work stupid head');
  }
};
