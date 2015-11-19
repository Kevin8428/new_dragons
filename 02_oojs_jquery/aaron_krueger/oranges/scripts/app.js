$(document).ready(function(){

  var orangePic = '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/BSicon_KBHFa_orange.svg/500px-BSicon_KBHFa_orange.svg.png">'


  function tree(){
    this.orangeCount = 0;
    this.addOrange = function(){
      this.orangeCount++;
    }
    this.removeOrange = function(){
      if(this.orangeCount > 0){
        this.orangeCount--;
        console.log(this.orangeCount);
      }else{
        this.orangeCount;
      }
    }


  }


  var tree = new tree();


  $('#water').click(function(){
    tree.addOrange();
    $('.grove').append(orangePic);
    console.log(tree.orangeCount);
  })

  $('#pick').click(function(){
    tree.removeOrange();
    $('.grove img:last-child').remove(tree.orangePic);
  })



});
