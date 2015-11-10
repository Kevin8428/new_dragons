// MAKE A GET REQUEST TO API ON SPREADSHEET
// APPEND MORE THAN 1 ELEMENT TO DOM
console.log('hello from app.js');

$(document).ready(function() {
   // separating call from (constructor??) allows repeated calls??
   $.ajax(ajaxArgument); //make ajax call

}); // end document .ready

var ajaxArgument = {
   type: 'get',
   url: 'http://www.omdbapi.com/?t=blade+runner&y=&plot=short&r=json',
   dataType: 'json',
   sucess: function(data) {
      console.log('success');
      console.dir(data);
      console.log(data);
      // append to elements now
      // $('.div1').show();
   },  // end success function
   error: function(error) {
      console.log('error');
   }, // end error function
}; // end ajaxjArgument
