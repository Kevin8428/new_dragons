//581142ed673c6087d0c28a83eca8f451// api key
$(document).ready(function(){

  $.ajax(getWeather);

})


var getWeather= {
  type: 'get',
  url: 'http://api.openweathermap.org/data/2.5/weather?id=1269750&appid=581142ed673c6087d0c28a83eca8f451',
  dataType: 'json',
  success: function(data){
    var faren =  Math.round(data.main.temp * 9/5 - 459.67);
    console.log(faren);
    console.log('we did it');
    console.dir(data);
    $('.weather').append('<li>the city is called '+ data.name + ' and the current temp is '+ faren + '</li>');
  },
  error: function(){
    console.log('it didnt work');
  }

}
