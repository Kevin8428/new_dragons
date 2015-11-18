//8153df4b1b9d661315d6bf0141943c09// api key

$(document).ready(function(){

  $.ajax(getWeather);

});

var getWeather = {
  type: 'get',
  url: 'http://api.openweathermap.org/data/2.5/weather?id=703363&appid=8153df4b1b9d661315d6bf0141943c09',
  data: 'json',
  success: function(data) {
    console.log('EHR MER GERD IT WERKD!');
    console.dir(data);
    var temp = Math.round(data.main.temp * 9/5 - 459.67);
    $('.weather').append('<li> The city is called ' + data.name + ' and the temperature is ' + temp + ' </li>');

  },
  error: function(){
    console.log('EHR MER GERD IT FRRRRD!');
  }

}
