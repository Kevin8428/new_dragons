$(document).ready(function(){
  console.log('locked and loaded');



}); // end $(document).ready()

var getFoodInspections = {
  type: 'get',
  url: 'https://data.cityofchicago.org/resource/4ijn-s7e5.json',
  // data: 'json',
  success: function(data) {
        console.log('Success');
        console.log('lenght of first array' + data[0].length);
        console.log('data[0]', data[0]);

        console.dir(data);
        // loop through first array of objects (first 100 objects in data)
        for (var i=0; i < data.length; i++){
          console.log(i);
          $('.inspections').append('<h3>' + data[i].aka_name + '</h3>');
        }

    },
  error: function() {
      console.log('failed');
      $('.inspections').append('<p>failed to load</p>');
    }

  }; // end getFoodInspections

$.ajax(getFoodInspections);
