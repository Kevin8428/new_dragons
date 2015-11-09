$('document').ready(function(){
//   var orangePic = '<img src="http://www.churchhousecollection.com/resources/Orange%20Drinking%20Orange%20Juice%20Cartoon%20PNG.png?timestamp=1433185237058" alt="">';
//
//   function Tree(){
//     this.orangeCount = 0
//   };
//
//   var tree = new Tree();
//
//   $('#water').click(function(){
//     tree.orangeCount +=1;
//     console.log(tree.orangeCount);
//
//   $('.grove').append(orangePic);
// });
//
//   $('#pick').click(function(){
//     tree.orangeCount -=1;
//     $('.grove img:last-child').remove();
//   })
var magicPic = '<img src="http://www.mannythemovieguy.com/images/magic_8_ball_the_movie.jpg" alt="magic 8 ball image">';

$('#magic8').click(function(){
  console.log('magic is happening');
  $('.screen').append(magicPic);
})

$('#fortune').click(function(){
var userInput = prompt('Pick a number between 1 & 10');
  if (userInput == 1) {
    alert('You will have good luck all month long!!!');
  }
    else if (userInput == 2) {
      alert('The holidays will be a lucky time for you!');
    }
})

}); //end window onload function
