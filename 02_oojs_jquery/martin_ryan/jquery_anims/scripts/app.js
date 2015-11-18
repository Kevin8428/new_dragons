$(document).ready(function(){

  // console.log('everything is loaded')
  //
  // $('#goToPage').click(function(event){
  //   event.preventDefault();
  //   var link = $('#goToPage a').prop('href');
  //   console.log(link);
  //   console.log('click is working');
  // });
  //
  //
  // //
  //
  // $('h1').fadeIn('slow');

  $('#btnRight').click(function (){
    $('.box1').animate({'left': '+=150px'}, {duration: 1000, easing: "easeOutBounce"});
  });
  $('#btnLeft').click(function (){
    $('.box1').animate({'left': '-=150px'}, {duration: 800, easing: "easeOutElastic"});
  });
  $('#btnUp').click(function (){
    $('.box1').animate({'left': '+=100px'}, {duration: 200, easing: "easeOutQuint"});
  });
  $('#btnDown').click(function (){
    $('.box1').animate({'left': '-=100px'}, {duration: 200, easing: "easeOutQuint"});
  });



}); // end of document.ready


// $('#myDiv').animate(
//     { opacity: 0 }, // what we are animating
//     {
//         duration: 'fast', // how fast we are animating
//         easing: 'swing', // the type of easing
//         complete: function() { // the callback
//             alert('done');
//         }
//     });
