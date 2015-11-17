$(document).ready(function() {
  var crime = $.ajax(chicagoCall);
});

var chicagoCall = {
  type: 'get',
  url: 'https://data.cityofchicago.org/resource/6zsd-86xi.json?$where=id > 8459962',
  success: function(data) {
    console.log('We got some data.');
    console.log(data);
    var dataElem = '';
    for(i in data) {
      dataElem += '<h2>Another crime:</h2><ul>';
      for( key in data[i] ) {
          dataElem += '<li>' + key + ': ' + data[i][key] + '</li>';
      }
      dataElem += '</ul>';
    }
    $('#chicago').append(dataElem);
  },
  error: function(data) {
    console.log('Sorry, it is not working.');
    console.log(data);
  }
}
