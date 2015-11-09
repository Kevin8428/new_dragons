$(document).ready(function() {
  console.log('all ready');

initialize();

});//end of doc.ready

function initialize() {

var mapCanvas = document.getElementById('map-canvas');
var mapOptions = {
  center: new google.maps.LatLng(41.931929, -87.698327),
  zoom: 8,
  mapTypeId: google.maps.MapTypeId.ROADMAP
}
//map object constructor takes two arguments the mapCanvas, and the mapOptions
var map = new google.maps.Map(mapCanvas, mapOptions);
var marker = new google.maps.Marker({
  position: new google.maps.LatLng(41.931929, -87.698327),
  map: map,
  animation: google.maps.Animation.DROP
});//end of google maps marker

}; //end of function initialize
