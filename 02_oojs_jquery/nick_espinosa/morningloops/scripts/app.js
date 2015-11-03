var fiveFoods = ['pizza', 'cookies', 'brownies', 'rice krispy bars','lucky charms'];
for (var food in fiveFoods) {
  console.log("I like " + fiveFoods[food]);
}

var nick = {
  name: 'nick',
  hobby: 'working out',
  interests: 'computers',
  movies: ['idiocracy', 'dumb and dumber', 'bourne identity', 'bourne supremecy']
}

nick.sports = function() {
  return this.sports; 
}
