$(document).ready(function() {
initialize();
});//end of document.ready

function initialize() {
  // body...
  var mapCanvas = document.getElementById('map-canvas');
  var mapOptions = {
    center: new google.maps.LatLng(-6.204472, 106.838434),
    zoom: 9,
    mapTypeID: google.maps.MapTypeId.ROADMAP
  }
  // map object constructor takes 2 arguments - mapCanvas and mapOptions
  var map = new google.maps.Map(mapCanvas, mapOptions);

  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(-6.204472, 106.838434),
    map: map,
    animation: google.maps.Animation.DROP
  });
}
