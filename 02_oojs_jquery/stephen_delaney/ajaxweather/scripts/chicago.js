$(document).ready(function(){ // start

$.ajax(getWeather);

  }); // end


// var getWeather = {
//   type: 'get',
//   url: 'https://data.cityofchicago.org/resource/bbyy-e7gq.json',
//   success: function(data){
//     console.log('We did it!');
//     console.dir(data);
//     for (var i in data) {
//       if (data[i].docks_in_service / data[i].total_docks < 1){
//     // $('#weather').append('<li>' + data[i].address + ' has ' + Math.round(data[i].docks_in_service) + ' out of ' + data[i].total_docks + ' docks in service.</li>');
//     $('#brokendocks').append('<li>' + data[i].address + ' has ' + Math.round((Math.round(data[i].docks_in_service) / data[i].total_docks) * 100) + '% of docks in service.</li>');}
//   };
//   },
//   error: function() {
//     console.log('It didn\'t work.');
//   }
// }
function indexOfSmallest(a) {
 var lowest = 0;
 for (var i = 1; i < a.length; i++) {
  if (a[i] < a[lowest]) lowest = i;
 }
 return lowest;
}

var getWeather = {
  type: 'get',
  url: 'https://data.cityofchicago.org/resource/bbyy-e7gq.json',
  success: function(data){
    console.log('We did it!');
    console.dir(data);
  for (var i in data) {
    worstdock = [];
    worstdock.push(data[i].docks_in_service / data[i].total_docks);
    if (worstdock.length = data.length) {
    console.log(indexOfSmallest(worstdock));
      };
    }
  }


  }

//
// var getWeather = {
//   type: 'get',
//   url: 'https://data.cityofchicago.org/resource/bbyy-e7gq.json',
//   success: function(data){
//     console.log('We did it!');
//     console.dir(data);
//     for (var i in data) {
//       worstdock = [];
//       worstdock.push(data[i].docks_in_service / data[i].total_docks);
//       if (worstdock.length = data.length) {
//         var min = Math.min.apply(null, worstdock);
// console.log(min);
//       }
//       if (data[i].docks_in_service / data[i].total_docks < 1){
//     // $('#weather').append('<li>' + data[i].address + ' has ' + Math.round(data[i].docks_in_service) + ' out of ' + data[i].total_docks + ' docks in service.</li>');
//     $('#brokendocks').append('<li>' + data[i].address + ' has ' + Math.round((Math.round(data[i].docks_in_service) / data[i].total_docks) * 100) + '% of docks in service.</li>');}
//   };
//   },
//   error: function() {
//     console.log('It didn\'t work.');
//   }
// }

//Other option: Math.round((data.main.temp - 273.15) * 1.8000 + 32.00)
