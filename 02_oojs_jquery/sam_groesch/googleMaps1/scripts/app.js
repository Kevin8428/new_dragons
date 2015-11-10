$(document).ready(function() {


initialize();


}); //end of doc.ready

function initialize(){

  var mapCanvas = document.getElementById('map-canvas');

  var mapOptions = {
    center: new google.maps.LatLng(41.87358,	-88.05159),
    zoom: 20,
    mapTypeId: google.maps.MapTypeId.SATELLITE
  }
  //map type constructor takes two arguments as mapCanvas, mapOptions
  var map = new google.maps.Map(mapCanvas, mapOptions);
  var marker = new google.maps.Marker({
      position: new google.maps.LatLng(41.87358,	-88.05159),
      map: map,
      animation: google.maps.Animation.DROP

  })
}
