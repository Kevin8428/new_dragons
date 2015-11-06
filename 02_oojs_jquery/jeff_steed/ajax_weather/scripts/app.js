// API Key 4882a67a8809892a1ac52045febcd6a4

$(document).ready(function() {
  $.ajax(getWeather);
});

var getWeather = {
  type: "get",
  url: "http://api.openweathermap.org/data/2.5/weather?id=4887398&appid=4882a67a8809892a1ac52045febcd6a4",
  data: "json",
  success: function(data) {
    console.log("Adrian! We did it!");
    console.dir(data);
    var temp = Math.round(data.main.temp * (9/5) - 459.67);
    $('.weather').append('<li>The city is ' + data.name + ' and the current temperature is ' + temp + ' degrees.</li>');
  },
  error: function() {
    console.log("Epic Fail!");
  }
}
