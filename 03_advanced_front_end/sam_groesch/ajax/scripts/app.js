window.onload= function() {

  $.ajax(getCrime);

}

var getCrime = {
  type: 'get',
  url: 'https://restcountries.eu/rest/v1/all',
  data: 'json',
  success: function(data) {
    console.log('Data loaded');
    console.dir(data);
    for (var i = 0; i < data.length; i++) {
      $('#countries').append('<li>The country ' +data[i].name+ ' is in the '+data[i].subregion+ ' subregion of ' +data[i].region+' and the native name is ' +data[i].nativeName+'</li>');
    }
  },
  error: function() {
    console.log('Naw you didn\'t get it')
  }


}
