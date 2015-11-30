//make get request to API on spreadsheet and append more than one element to the DOM
//in your success function


$(document).ready(function(){




$.ajax(getOmdb);
// $.ajax(getCountry);


});//end of document.ready

var getOmdb = {
  type: 'get',
  url: 'http://www.omdbapi.com/?',
  data: 'json',
  success: function(event){
    console.log('works');
    console.dir(event);
  }
}


var getCountry = {
  tye: 'get',
  // url: 'https://data.ct.gov/resource/hma6-9xbg.json?category=Fruit&item=Peaches',
  url:'https://restcountries.eu/rest/v1/all',
  data: 'json',
  success: function(x) {
    console.dir(x);
    $.each(x, function(anything, v) {
        // For each record in the returned array
        $('#testdiv').append('<p>'+ anything + ' ' +v.name+'</p>');
    });
  },
  error: function(){
    console.log('it didnt work');
  },

}









//
