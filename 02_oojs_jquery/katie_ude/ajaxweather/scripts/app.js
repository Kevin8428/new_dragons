 // api key

$(document).ready(function(){

$.ajax(getWeather);



}); //end of document.ready

var getWeather = {
  type: 'get',
  url: 'http://api.openweathermap.org/data/2.5/weather?id=750594&appid=89b7234fc55b0248bb5ebcc2dec7cac9',
  data: 'json',
  success: function(data){
    console.log('We did it');
    console.dir(data);
    $('.weather').append('<li>The city is called ' + data.name + ' and the current temperature is ' + Math.round(data.main.temp *9/5 -459.67) + '.</li>');
  },
  error: function(){
    console.log('It didnt work stupid head');
  }
}
