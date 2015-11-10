//api key
$(document).ready(function(){

$.ajax(getWeather);



});//end of doc.ready
var getWeather = {
type: 'get',
url: 'http://api.openweathermap.org/data/2.5/weather?id=745042&appid=ea5308918e5267798366bac3d261677f',
data:'json',
success: function(data){
  console.log('We did it');
  console.dir(data);
  $('.weather').append('<li>The city is called ' + data.name + ' and the current temperature is ' + Math.round(data.main.temp * 9/5 - 459.67) + '.</li>');
},
error: function(){
  console.log('it no work')
}


}
