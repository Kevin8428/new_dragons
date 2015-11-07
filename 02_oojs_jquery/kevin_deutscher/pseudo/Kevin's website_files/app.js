window.onload = function(){
  console.log('all files that this page needs have been loaded');

  var component = {
    domElement: null,
    initialize: function(selector){
      //create a dom element
      this.domElement = document.createElement('div');
      //attach it
      selector.appendChild(this.domElement);
      this.domElement.addEventListener=document.createElement('div');
    },
    render: function(statusText){
      this.domElement.innerHTML = statusText;
      //update the dom element
    }
  }




  var btn = document.getElementById('buttonID');
  btn.addEventListener('click', function(){
    alert("are you sure you want to leave?");
  });

/*CHECK FOR CHANGE: document.getElementById('buttonID')*/



  }//end of window.onload
