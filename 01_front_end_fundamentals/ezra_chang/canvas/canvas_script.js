window.onload = function () {
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext('2d');



  function whileLoop (centerX, centerY, lolDegree, radius) {
    while (lolDegree < Math.PI * 2) {
      context.beginPath();
      context.moveTo(centerX, centerY);
      context.lineTo(centerX + radius * Math.cos(lolDegree), centerY - radius * Math.sin(lolDegree));
      context.lineWidth = 3;
      var r = parseInt(Math.random() * 255);
      var g = parseInt(Math.random() * 255);
      var b = parseInt(Math.random() * 255);
      var a = Math.random();
      context.strokeStyle = 'rgba(' + r + ', ' + g + ', ' + b + ', ' + a + ')';
      context.stroke();
      lolDegree += (Math.PI / 180);
    }
  }

  function forLoop() {
    for (var i = 0; i < 100; i++) {
      var centerX = parseInt(Math.random() * 1000);
      var centerY = parseInt(Math.random() * 1000);
      var radius = parseInt(Math.random() * 100);
      var lolDegree = 0;
      whileLoop(centerX, centerY, lolDegree, radius);
    }
  }

  forLoop();
}
