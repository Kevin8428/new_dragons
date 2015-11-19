$(document).ready(function(){
  console.log('jQuery looks great!');

  var $body=$('body');
  var $btn=$('#btn');
  var $p=$('p');
  var $div=$('#div');

  $body.prepend('Hello World!');
  $btn.append('click Me!')


  // console.log(typeof $body);
  // console.log(Object.keys($body));
  // $body.style.backgroundColor='gray';

  $btn.click(function(){
    $div.append('<br>stop clicking me!');

  });// end of .click()

  $('a').click(function(event){
    event.preventDefault();
    var link = $('a').prop('href');
    console.log(link);

  })//end .click()

});//end of document.ready()

// window.onload=function(){
//   body=document.getElementsByTagName('body')[0];
//   console.log(body);
//   console.log(typeof body);
//   console.log(Object.keys(body));
//   body.style.backgroundColor='green';
// }
