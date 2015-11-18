$(document).ready(function(){


  initialize();

});


//requirement mapCanvas , mapOptions
function initialize() {
  var mapCanvas = document.getElementById('map-canvas');
  var mapOptions = {
    center: new google.maps.LatLng(41.2222, 54.232131),
    zoom: 4,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  var map = new google.maps.Map(mapCanvas, mapOptions);
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(41.9, 55),
    map: map,
    animation: google.maps.Animation.DROP
  });

}
