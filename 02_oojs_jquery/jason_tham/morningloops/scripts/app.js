var jt = new Object();
jt.name = 'Jason';
jt.balls = true;
jt.food = 'Steak';
jt.top5movies = ['Godfather II', 'Blade Runner', 'The Big Lebowski', 'The Third Man', 'The Good\, the Bad\, \& the Ugly'];

jt.meth = function(arr) {
  for (var variable in arr) {
    console.log(arr[variable] + ' is a good movie');
  }

};

var foods = ['peppers','tomatoes','onions','onions','onions'];

window.onload = function(){

var btn = document.getElementById('btn');

for (var variable in foods) {
  console.log('food number ' + variable + ' is ' + foods[variable]);
};


btn.onclick = function() {
  console.log('my button is working');
  jt.meth(jt.top5movies);
}

};
