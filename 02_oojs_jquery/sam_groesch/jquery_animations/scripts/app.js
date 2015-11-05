$(document).ready(function(){

  console.log('Everything is loaded');

  $('h1').fadeIn(5000);

  // $('#btnRight').click(function(){
  //   console.log('my button is working');
  //   $('.box1').animate({'left':'+=50px'}, 'slow'); // .animate({'screen side start':'how far along x-axis it moves'}, 'speed')
  //   $('header').css("background-color", "red");
  // })
  // $('#btnLeft').click(function(){
  //   console.log('my button is working');
  //   $('.box1').animate({'left':'-=50px'}, 'slow');
  // })
  // $('#btnUp').click(function(){
  //   console.log('my button is working');
  //   $('.box1').animate({'top':'-=50px'}, 'slow');
  // })
  // $('#btnDown').click(function(){
  //   console.log('my button is working');
  //   $('.box1').animate({'top':'+=50px'}, 'slow');
  // })

  $('#btnRight').hover(function(){
    console.log('my button is working');
    $('.box1').animate({'left':'+=50px'}, 'slow'); // .animate({'screen side start':'how far along x-axis it moves'}, 'speed');
  }, function() {
    $('header').css("background-color", "red");
  });
  $('#btnLeft').hover(function(){
    console.log('my button is working');
    $('.box1').animate({'left':'-=50px'}, 'slow');
  }, function() {
    $('body').css("background-color", 'rgba('+(Math.round(Math.random()*255))+','+(Math.round(Math.random()*255))+','+(Math.round(Math.random()*255))+','+Math.random()+')');
  });
  $('#btnUp').hover(function(){
    console.log('my button is working');
    $('.box1').animate({'top':'-=50px'}, 'slow');
  }, function() {
    $('.box1').clone().appendTo('.box2');
  })
  $('#btnDown').hover(function(){
    console.log('my button is working');
    $('.box1').animate({'top':'+=50px'}, 'slow');
  }, function() {
    $('.box1').clone().appendTo('body');
  })



}) //end of document.ready
