$(document).ready(function() {

$.ajax(getChicago);

}); //end of document ready
// console.log('all loaded');

var getChicago = {
  type: 'get',
  url: 'https://data.cityofchicago.org/resource/dip3-ud6z.json',
  success: function(data){
    console.log('fuck yeah');
    console.dir(data);
    // getting back array of data
    // loop through each data thing
    for (var i = 0; i < data.length; i++) {
      $('#chicago').append('<li>' + '<span>' + data[i].respondent + '</span> '+ data[i].address + '</li>'); 
    }

    // $('#chicago').append('<li>' + data[0].community_area + '</li>');
  },
    error: function(){
      console.log('it didnt work shithead')
    }
}


// success: function(result) {
//     $.each(result, function(i, v) {
//         // For each record in the returned array
//         $('#chicago').append(v.address);
//     };
// },
