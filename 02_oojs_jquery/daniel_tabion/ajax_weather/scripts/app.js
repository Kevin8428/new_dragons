// de7042c3bfc0691786440d7c58850052 // api key

$(document).ready(function() {
console.log('window loaded');

$.ajax(getWeather);


}); // end $(document).ready()

var getWeather = {
  type: 'get',
  url:
    'http://api.openweathermap.org/data/2.5/weather?id=4924014&appid=de7042c3bfc0691786440d7c58850052',
    data: 'json',
    success: function(data) {
      console.log('We did it');
      console.dir(data);
      $('.weather').append('<li>The city is called ' + data.name + ' and the current temperature is ' + Math.round(data.main.temp * 9/5 - 459.67) + ' degrees F.</li>');

    },
    error: function() {
      console.log('It didn\'t work, dood.');
      $('.weather').append('<p>.ajax(getWeather) failed</p>');
    }

};
