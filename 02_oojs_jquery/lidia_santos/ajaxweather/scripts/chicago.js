https://data.cityofchicago.org/resource/z8bn-74gv.json

$(document).ready(function(){

$.ajax(getThePopoStations);



});//end of doc.ready
var getThePopoStations = {
type: 'get',
url: 'https://data.cityofchicago.org/resource/z8bn-74gv.json',
success: function(data){
  console.log('We did it');
  console.dir(data);
   $('.stations').append('<li>The first station is located at  ' + data[0].address + ' their website is '  + data[0].website.url  '.</li>');
},
error: function(){
  console.log('it no work')
}


}
