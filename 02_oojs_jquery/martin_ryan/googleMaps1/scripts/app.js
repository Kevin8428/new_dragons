$(document).ready(function(){

  console.log('your javascript is loaded');

  initialize();

});

function initialize(){

  var mapCanvas = document.getElementById('map-canvas');

  var mapOptions = {
    center: new google.maps.LatLng(41, -87),
    zoom: 8,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }

// map object constructor requires two args 'mapCanvas' and 'mapOptions'

  var map = new google.maps.Map(mapCanvas, mapOptions);
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(41, -87),
    map: map,
    animation: google.maps.Animation.DROP
  })

}
