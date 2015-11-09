$(document).ready(function(){ // start

  $( "#map-canvas" ).slideDown('slow');

  setTimeout(initialize, 300);

}); // end

function initialize() {
  var mapCanvas = document.getElementById('map-canvas');
  var mapOptions = {
    center: new google.maps.LatLng(40.420247, -3.697895),
    zoom: 17,
    mapTypeId: google.maps.MapTypeId.HYBRID
  }
  
// the map object constructor requires at least two arguments:  mapCanvas and mapOptions

var mapMadrid = new google.maps.Map(mapCanvas, mapOptions);
var marker = new google.maps.Marker({
position: new google.maps.LatLng(40.420247, -3.697895),
map: mapMadrid,
animation: google.maps.Animation.DROP
})

}
