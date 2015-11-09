var nick = {
  name: 'nick',
  hobby: 'working out',
  interests: 'computers',
  movies: ['idiocracy', 'dumb and dumber', 'bourne identity', 'bourne supremecy']
}
var foods = ['pizza', 'cookies', 'brownies', 'rice krispy bars','lucky charms'];


window.onload = function() {
var btn = document.getElementById('btn');

for (var i = 0; i < foods.length; i++) {
  console.log(foods[i] + ' is a great food');
}

nick.print = function(arr) {
  for (var i = 0; i < arr.length; i++) {
  console.log('i love ' + arr[i])
  }
}

btn.onclick = function() {
  console.log('my button is working');
  console.log(nick.print(nick.movies));
}

}//end of window onload
