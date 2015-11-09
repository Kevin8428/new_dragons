$(document).ready(function(){


$.ajax(getLandlords);

}); // end of doc.ready

var getLandlords = {
  type: 'get',
  url: 'https://data.cityofchicago.org/resource/dip3-ud6z.json',
  success: function(data){
    console.log('We did it');
    console.dir(data);
    // $('.landlordList').append('<li>The first bad landlord is at ' + (data[0].address) + '.</li>');
    for (var i = 0; i < data.length; i++) {
        $('.landlordList').append('<li>A problem landlord is at ' + (data[i].address) + ' in the community area known as ' + (data[i].community_area) + '.</li>');
    }
  }
}
