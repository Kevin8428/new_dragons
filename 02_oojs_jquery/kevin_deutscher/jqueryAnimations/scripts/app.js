$(document).ready(function(){

  console.log('everything is loaded');

$('h1').fadeIn(5000);
$('.btnLeft').fadeIn(5000);//need to set css block to none;


$('#btnRight').click(function(){
  console.log('my button is working');
  $('.box1').animate({'left': '+=50px'},'fast');//must specify to DOM element the position

  //$('header').css("background-color","red");
});

$('#btnLeft').click(function(){
  console.log('my button is working');
  $('.box1').animate({'left': '-=' + randomNumber()},'fast');//must specify to DOM element the position
});

$('#btnUp').click(function(){
  console.log('my button is working');
  $('.box1').animate({'top': '-=50px'},'fast');//must specify to DOM element the position
});
$('#btnDown').click(function(){
  console.log('my button is working');
  $('.box1').animate({'top': '+=50px'},'fast');//must specify to DOM element the position
});

var raceNow = function(){//race once function
  $('#btnRight').animate({'right': '-=' + randomNumber()},'fast');//must specify to DOM element the position
  $('#btnDown').animate({'right': '-=' + randomNumber()},'fast');//must specify to DOM element the position
  $('#btnUp').animate({'right': '-=' + randomNumber()},'fast');//must specify to DOM element the position
  $('#btnLeft').animate({'right': '-=' + randomNumber()},'fast');//must specify to DOM element the position
};

$('#race').click(function(){//race once using button
  raceNow();
});

$('#race5x').click(function(){//race 5x function
  var counter = 0;
  for(i=0; i<3; i++)
  raceNow();
  //console.log(i);
});

var randomNumber = function(){//random number generator
  console.log(randomNumber);
  return Math.floor(Math.random()*500) + 'px';
};


var getPosition = function(){
var startPos = document.getElementById("btnRight");
//console.log(startPos);
var left = startPos.offsetLeft;
var top = startPos.offsetTop;
return left;
console.log("left: " + left + " " + "Top: " + top);
}


//https://www.youtube.com/watch?v=a0M9iYhc1YA// -- video on positioning


})//end of document.ready
