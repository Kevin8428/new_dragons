$(document).ready(function() {

  initialize();

})

function initialize() {
  var mapCanvas = document.getElementById('map-canvas');
  var mapOptions = {
      center: new google.maps.LatLng(41.931929, -87.698327),
      zoom: 8,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
  var map = new google.maps.Map(mapCanvas, mapOptions);
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(41.931929, -87.698327),
    map: map,
    animation: google.maps.Animation.DROP
  })
}
