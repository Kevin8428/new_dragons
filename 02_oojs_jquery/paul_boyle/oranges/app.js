$(document).ready(function(){
  console.log('jquery is lookin good!');
  //buttons : water and pick
  //water will add a orange to the screen
  //pick will take one away from the screen
var orangePic='<img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRNA-38t2c9KWnFXgmcl1jASsLhtxlryDye4Uy09g9YWrieHMvp" style="border":"solid blue 1px">';

function Tree(){
  this.orangeCount=0;
}

var tree= new Tree ();//making a tree object


  $('#water').click(function(){
    tree.orangeCount+=1;
    console.log(tree.orangeCount);
    $('.grove').append(orangePic);

  });//end of water function

  $('#pick').click(function(){

  if(tree.orangeCount<=0){
    alert('you no oranges to pick! water your grove!');
  } else {
    tree.orangeCount-=1;
    console.log(tree.orangeCount);
    $('.grove img:last-child').remove();
  }
  });

});//end of document.ready();
