$(document).ready(function(){


initialize();


});//end of doc.ready---------------------------------



function initialize(){

  var mapCanvas = document.getElementById('map-canvas');

  var mapOptions = {
    center: new google.maps.LatLng(42.3601, 71.0589),
    zoom: 8,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  // map object constructor requires 2 arguments: mapCanvas and mapOptions

  var map = new google.maps.Map(mapCanvas, mapOptions);
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(42.3601, 71.0589),
    map: map,
    animation: google.maps.Animation.DROP
  });

};
