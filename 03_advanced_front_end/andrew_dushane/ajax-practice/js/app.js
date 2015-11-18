window.onload = function() {
  $.ajax(querySpotify);
}

var query = 'folk';
var searchType = 'playlist';
var container = document.getElementById('playlists');

var querySpotify = {
  url: 'https://api.spotify.com/v1/search',
  type: 'GET',
    data: {
      q: query,
      type: searchType,
    },
    dataType: 'json',
    success: function(data) {
      var playlists = data.playlists.items;
      console.log(playlists);
      for( i = 0; i < playlists.length; i++ ) {
        var thisDiv = document.createElement('div');
        var link = document.createElement('a');
        link.href = playlists[i].href;
        var title = document.createElement('h2');
        title.innerHTML = playlists[i]['name'];
        var image = document.createElement('img');
        image.src = playlists[i]['images'][0].url;
        link.appendChild(title);
        link.appendChild(image);
        thisDiv.appendChild(link);
        container.appendChild(thisDiv);
      }
    },
    error: function(data) {
      console.log('Error.');
      console.log(data);
    }
}
