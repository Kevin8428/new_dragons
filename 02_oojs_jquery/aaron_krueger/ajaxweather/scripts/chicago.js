$(document).ready(function(){

  $.ajax(getChicago);

})


var getChicago= {
  type: 'get',
  url: 'https://data.cityofchicago.org/resource/dip3-ud6z.json',
  dataType: 'json',
  success: function(data){
    console.log('we did it');
    console.dir(data);

    for (var i = 0; i < data.length; i++) {
      console.log(data[i].address);
      $('.address').append('<li>the address is called '+ data[i].address +' for '+data[i].community_area+ '</li>')
    };


  },
  error: function(){
    console.log('it didnt work');
  }

}
