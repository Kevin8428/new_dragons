// 08e0f5e4a9091c0ebe2ee8bd12fbe085 //API key

$(document).ready(function(){

$.ajax(getCrime);



}) //end of doc.ready


var getCrime = {
  type: 'get',
  url: 'https://data.cityofchicago.org/resource/ijzp-q8t2.json',
  // data: 'json',
  success: function(data) {
    console.log('We did it!');
    console.dir(data);
    var earliestCrime = data[999].date;
    var crimeArrest = 0;
    var crimeNoArrest = 0;
    for (var i = 0; i < data.length; i++) {
      if (data[i].arrest == true) {
        crimeArrest = crimeArrest + 1;
      } else {
        crimeNoArrest = crimeNoArrest + 1;
      }
    }
    $('.chicago').append('<li>The number of arrests in Chicago since '+ earliestCrime+' is: '+ crimeArrest + '.</li>');
    $('.chicago').append('<li>The number of crimes without an arrest in Chicago since '+ earliestCrime +' is: '+ crimeNoArrest + '.</li>');
  },
  error: function() {
    console.log('It didn\'t work stupid head');
  }
};
