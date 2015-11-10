window.onload = function () {
  console.log('everything looks good');

  var btnClear = document.getElementById('clear')
  btnClear.innerHTML='Clear!';

  btnClear.onclick=function(){
    console.log('clear button responding');
  }

  var btnSubmit = document.getElementById('submit')
  btnSubmit.innerHTML='Sign In!<br>';
  btnSubmit.onclick=function(){
    //prompt user of information

    var $name=document.getElementById('name');
    var $email=document.getElementById('email');

    var name=$name.value;
    var email=$email.value;


    //create new instance of a component
    var uiComponent = new component(name,email);
    //intialize
    uiComponent.initialize();
    //render
    uiComponent.render();
  }
}


var component = function (name,email){

//attributes : properties
  this.name=name;
  this.email=email;
  this.domElement = document.createElement('div');

  this.initialize = function () {
    //give our component a place to live
    var body = document.getElementsByTagName('body')[0];
    body.appendChild(this.domElement);
  }
  //take some data and format it to be user friendly
  this.render= function () {
    var hello = 'Welcome, '+this.name + '! Logged in as '+this.email;
    this.domElement.innerHTML= hello;
  }

}
