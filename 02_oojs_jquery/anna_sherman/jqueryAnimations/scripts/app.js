$(document).ready(function() {




  console.log("loaded");

  $('h1').fadeIn(5000); //milliseconds




$('#btnRight').click(function() {
  right.mover();
})

  // $('#btnRight').click(function(){
  //   console.log("my button is working");
  //   $('.box1').animate({'left': '+=50px'}, 'fast');
  //   $('header').css("background-color", "rgb(203, 208, 203)");
  //
  //
  // });

  $('#btnLeft').click(function(){
    console.log("my button is working");
    $('.box1').animate({'left': '-=50px'}, 'fast');


  });

  $('#btnUp').click(function(){
    console.log("my button is working");
    $('.box1').animate({'top': '-=50px'}, 'fast');


  });

  $('#btnDown').click(function(){
    console.log("my button is working");
    $('.box1').animate({'top': '+=50px'}, 'fast');


  });













}); //end of document.ready()
function directionButton(direction,move){
  this.direction = direction;
  console.log(this.direction);
  this.mover = function() {
      $('.box1').animate({direction: move}, 'fast');
      console.log(this.mover);
    };
};
var right = new directionButton('left', '+=50px');
