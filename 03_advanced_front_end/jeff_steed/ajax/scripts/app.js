$(document).ready(function() {
  $.ajax({
    url: 'http://pokeapi.co/api/v1/sprite/5/',
    type: 'GET',
    success: function(data) {
      console.log('I\'ll have what she\'s having.');
      var body = document.getElementsByTagName('body')[0];
      var message = document.createElement('p');
      var url = data.image;
      var img = document.createElement('img');
      img.src = "http://pokeapi.co" + url;
      img.style.height = '400px';
      img.style.width = '400px';
      message.innerHTML = "Name: " + data.pokemon.name;
      body.appendChild(message);
      body.appendChild(img);
    },
    error: function(errorMessage) {
      console.log(errorMessage);
      var body = document.getElementsByTagName('body')[0];
      var message = document.createElement('p');
      message.innerHTML = "The following error has occurred: " + errorMessage;
      body.appendChild(message);
    }
  });
});
