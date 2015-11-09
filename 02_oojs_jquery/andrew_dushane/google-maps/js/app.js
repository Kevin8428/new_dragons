$(document).ready(function() {

  //initializeMap();
  //$.ajax(getMovies);


}); // End of document.ready

function initializeMap() {

  var mapCanvas = document.getElementById('map-canvas');
  var mapOptions = {
    center: new google.maps.LatLng(41, -87),
    zoom: 10,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  //map object constructor takes two arguments - mapCanvas, mapOptions
  var map = new google.maps.Map(mapCanvas, mapOptions);
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(41, -87),
    map: map,
    animation: google.maps.Animation.DROP
  });
}

$("#movie-search").keyup(function(e){
  if(e.keyCode == 13) {
    var search = $(this).val();
    var getMovies = {
      url: 'http://www.omdbapi.com/?s=' + search + '&r=json',
      success: function(data) {
        var result = data.Search
        var container = document.getElementById('movies-container');
        for( i in result ) {
          var movie = document.createElement('div');
          var title = document.createElement('h2')
          title.innerHTML = result[i]['Title'];
          movie.appendChild(title);
          if( result[i]['Poster'] != 'N/A' ) {
            var poster = document.createElement('img');
            poster.src = result[i]['Poster'];
            poster.alt = "movie poster";
            movie.appendChild(poster);
          }
          var year = document.createElement('p');
          year.innerHTML = result[i]['Year'];
          movie.appendChild(year);
          container.appendChild(movie);
        }
      },
      error: function(data) {
        console.log('No movies for you.');
      }
    }
    $.ajax(getMovies);
  }
});
