window.onload = function() {
  var foods = [ 'pizza', 'burgers', 'dogs', 'chips', 'chicken wings'];
  function likeFoods( arr ) {
    for( i = 0; i < arr.length; i++ ) {
      console.log('I like ' + arr[i] + '.');
    }
  }
  //likeFoods(foods);

  var andyD = {
    name: 'Andy D',
    age: 35,
    music: 'whatevs',
    awesome: true,
    movies: [ 'Goodfellas', 'City of God', 'The Blues Brothers', 'The Matrix'],
    myMovies: function() {
      for( i in this.movies ) {
        console.log('I like to watch ' + this.movies[i] + '.')
      }
    }
  }
  //andyD.myMovies();
  var movieButton = document.getElementById('movies');
  movieButton.onclick = function() {
    return andyD.myMovies();
  }
}
