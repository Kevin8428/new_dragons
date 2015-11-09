


$(document).ready(function(){
  $.ajax(getWeather);
});// end of doc. ready

var getWeather = {
  type: 'get',
  url:'http://api.openweathermap.org/data/2.5/weather?id=5391997&appid=83a4ba5a2f49f0f0f63eaa126eb9842c',
  dataType: 'JSON',

  success: function(data){
    console.log('We\'re doing it');
    console.dir(data);
    $('.weather').append('<li>The city is called '+data.name+'</li>');
    var farenheit=Math.round(data.main.temp * 9/5 - 459.67);
    $('.weather').append('<li>The current temp is '+farenheit+' <li>');
  } ,
  error: function(){
    console.log('it didnt work stupid head');
  }

}
