$(document).ready(function(){




$.ajax(getLandlords);
initialize();
getLandlords.makeMarkers();

}); //end doc ready.

var latCoor = [];
var longCoor = [];


var getLandlords = {
  type: 'get',
  url: 'https://data.cityofchicago.org/resource/dip3-ud6z.json',
  data: '',
  success: function(data){
    console.log("data retrieved for chicago");
    console.dir(data);
    for (var issue in data) {
      console.log(latCoor);
      latCoor.push(data[issue].latitude);
      longCoor.push(data[issue].longitude);
  };
},
  makeMarkers: function() {
    console.log("here we are");
    console.log(latCoor.length);
    for (var i = 0; i < latCoor.length; i++) {
      console.log("entered the for loop");
      new google.maps.Marker({
        position: new google.maps.LatLng(latCoor[i], longCoor[i]),
        map: map,
        animation: google.maps.Animation.DROP
      });
    }
},
  error: function() {
    console.log("it didnt work");
  }
}





function initialize() {

  var mapCanvas = document.getElementById('map-canvas'); //vanilla js so i dont forget.
  var mapOptions = {
    center: new google.maps.LatLng(41.850,-87.650),
    zoom: 8, //THIS IS A CONSTRUCTOR!! new GOOGLE DOT MAPS!
    mapTypeId: google.maps.MapTypeId.ROADMAP //or terrain or satellite.
  };
  //map object constructor takes these arguments: mapCanvas and mapOptions. gotta have both for map to show up.

  var map = new google.maps.Map(mapCanvas, mapOptions);
  window.map = map;

}



///////get landlords//////////
