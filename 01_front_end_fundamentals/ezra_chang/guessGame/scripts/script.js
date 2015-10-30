window.onload = function() {
  var rand = parseInt(Math.random() * 100);
  var t = prompt('Guess:');

  function guessN(p) {
    p = parseInt(p);
    if (p > rand) {
      alert('too big.');
      guessN(prompt("Guess:"));
    }
    else if (p < rand) {
      alert('too small.');
      guessN(prompt("Guess:"));
    }
    else {
      alert('you win.');
      break;
    }
  }

  guessN(t);

  var contentContainer = document.getElementById('content');

}
