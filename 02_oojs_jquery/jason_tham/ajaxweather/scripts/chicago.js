var getLandlords = {
  type: 'get',
  url: 'https://data.cityofchicago.org/resource/dip3-ud6z.json',
  success: function(data){
    console.log('we did it');
    console.dir(data);
    for (var i in data) {
      $('.weather').append('<li>There is a garbage landloard at ' + data[i].address + ' and that\'s in the ' + data[i].community_area + ' neighborhood' + '</li>')
    }
  }

};

$(document).ready(function() {
   $.ajax(getLandlords);
});
