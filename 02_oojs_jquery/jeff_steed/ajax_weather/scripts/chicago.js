$(document).ready(function(){

  console.log("Wat it is?");


  $.ajax(getLandlord);
});


var getLandlord = {
  type: "get",
  url: "https://data.cityofchicago.org/resource/ydr8-5enu.json",
  dataType: "json",
  success: function(data){
    console.dir(data);
    console.log(data.address);
    console.log("It werked!");
  },
  error: function(){
    console.log("NOOOOOOO, it didn't work!");
  }
};

// https://data.cityofchicago.org/resource/dip3-ud6z.json
