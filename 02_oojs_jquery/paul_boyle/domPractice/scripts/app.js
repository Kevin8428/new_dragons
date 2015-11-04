window.onload = function(){
  console.log('javascript is working');
}

var comp= {

  domElement:null,

  intialize: function(domSelector){
    console.log('initializing component');
    this.domElement = document.createElement('img'); //<img />
    domSelector.appendChild(this.domElement);
  },
  render:function(imageSrc){
    this.domElement.src=imageSrc; //<img src='' />
  }


}//end of comp object
