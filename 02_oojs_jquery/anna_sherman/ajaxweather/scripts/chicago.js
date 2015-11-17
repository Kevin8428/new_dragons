$(document).ready(function(){

  //DONT KEEP OBJECTS INSIDE DOC READY.

$.ajax(getLandlords);
$('#2').delay(1000).fadeIn(300);

// for (var i = 0; i < length; i++) {
//   $('#'+i).fadeIn("slow");
// }

}); //end document.ready

// dont keep objects inside of document.ready
//
// $('li')

var getLandlords = {
  type: 'get',
  url: 'https://data.cityofchicago.org/resource/dip3-ud6z.json',
  data: '',
  success: function(data){
    console.log("data retrieved for chicago");
    console.dir(data);
    var length = data.length;
    for (var issue in data) {
    $('.landlord').append('<li id="' +issue + '">' + 'The location is ' + data[issue].address + ' and the respondent is ' + data[issue].respondent + '</li>');
    $('li').hide();
  };
},
  error: function() {
    console.log("it didnt work");
  }
}
