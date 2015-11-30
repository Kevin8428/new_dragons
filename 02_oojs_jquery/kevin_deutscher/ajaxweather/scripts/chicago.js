//write ajax, get soda API, log out data, get object, append data to screen
$(document).ready(function(){


$.ajax(getLandlord);










});//end of document.ready



var getLandlord = {
  type: 'get',
  url:
  'https://data.cityofchicago.org/resource/ydr8-5enu.json',
  success: function(data){
    console.log('we did it');
    console.dir(data);
    console.log(data[1]);
    // for(i=0, i<50, i++){
    //   $(.landlord).append(Object[i]_permit_type)
    // }
  },
  error: function(){
    console.log('it didnt work');
  },

}





















//
