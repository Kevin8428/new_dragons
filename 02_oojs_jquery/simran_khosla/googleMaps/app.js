$(document).ready(function() {
  initialize(54.978252,-1.617780);

});
  var count = 0;

function initialize(lat, long) {

  var mapCanvas = document.getElementById('map-canvas');


  //REQUIRED arguements for Google Map: mapCanvas, mapOptions
  var mapOptions = {

    center: new google.maps.LatLng(lat, long),
    zoom: 5,
    mapTypeID: google.maps.MapTypeId.ROADMAP
  }

  var map = new google.maps.Map(mapCanvas, mapOptions);

  var marker = new google.maps.Marker ({
      position: new google.maps.LatLng(lat, long),
      map: map,
      animation: google.maps.Animation.DROP
  });
}

$( "html" ).keyup(function( event ) {
  if ( event.keyCode == 39 ) {
      count +=1
      console.log(count);
      if (count == 1) {
        initialize(19.013900, 72.817024);
      } else if (count == 2) {
        initialize(34.690083, 135.195511);
      } else if (count == 3) {
        initialize(3.139003, 101.686855);
      } else if (count == 4) {
        initialize(1.352083, 103.819836);
      } else if (count == 5) {
        initialize(19.013900, 72.817024);
      } else if (count == 6) {
        initialize(33.748995, -84.387982);
      } else if (count == 7) {
        initialize(40.712784, -74.005941);
      } else if (count == 8) {
        initialize(41.878114, -87.629798);
      } else if (count == 9) {
        initialize(54.978252,-1.617780);
        count = 0;
      }
    };
    console.log(event.keyCode);
  });
