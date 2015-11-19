$('document').ready(function() {
  $.ajax(
    {
      url: 'https://restcountries.eu/rest/v1/name/philippines?fullText=true',
      type: 'get',
      success: function(data) {
        console.log('success!');
        theDataDiv = $('#allData');
        console.log(data[0]);
        var keys = Object.keys(data[0]);
        console.log('keys.length:' + keys.length);
        for(var i=0; i<keys.length; i++) {
          console.log(i);
          theDataDiv.append(keys[i] + ": " + (data[0])[keys[i]] + '<br>');
        }
      },
      error: function(data) {
        console.log('error!');
        theDataDiv = $('#allData');
        theDataDiv.append('Error loading the data');
      }
    }
  );








}); // close $('document').ready()
