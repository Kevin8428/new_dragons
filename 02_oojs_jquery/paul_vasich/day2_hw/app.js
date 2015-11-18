

window.onload = function() {
  var butts = document.getElementsByClassName('navbutt');
  for (var i = 0; i < butts.length; i++) {
    butts[i].onclick = function() {
      console.log(this.name + ' butt has been clicked')
    }
  }
}
