// 367d1eaff31957e53696bbacade447cf

$(document).ready(function () {
  $.ajax(naperWeather);


});

var naperWeather = {
  type: 'get',
  url: 'http://api.openweathermap.org/data/2.5/weather?id=4903279&appid=367d1eaff31957e53696bbacade447cf',
  data: 'json',
  success: function (data) {
    console.log('Yay!');
    console.dir(data);
    $('.weather').append('City: ' + data.name + '<br>');
    var tempF = data.main.temp * (9/5) - 459.67;
    $('.weather').append('Temp: ' + tempF + ' F<br>');
  },
  error: function () {
    console.log('Oops.');
  }
}
