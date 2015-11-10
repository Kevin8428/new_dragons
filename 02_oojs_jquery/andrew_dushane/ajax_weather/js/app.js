// Weather API keyn f8a6e173c991fc54e8abbda03eaa7084
// Orland city ID 4167147
$(document).ready(function() {
  var weather = $.ajax(getWeather);
}); // End of document.ready

var getWeather = {
  type: 'get',
  url: 'http://api.openweathermap.org/data/2.5/weather?id=4167147&appid=f8a6e173c991fc54e8abbda03eaa7084',
  data: 'json',
  success: function(data) {
    console.log('We did it');
    console.dir(data);
    $('.weather').append('<li>The city is called ' + data.name + '.</li>');
    $('.weather').append('<li>The current temperature is : ' + Math.round(data.main.temp * (9/5) - 459.67 ) + '.</li>');
  },
  error: function() {
    console.log("It didn't work");
  }
}
