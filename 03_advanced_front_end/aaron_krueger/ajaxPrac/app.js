$(document).ready(function(){

  // $.getJSON('http://shakeitspeare.com/api/poem', function(data){
  //   console.log(data);
  //
  //   if(data.hasOwnProperty('poem')){
  //     $('#poem').text(data.poem);
  //     console.log(data.poem);
  //   }
  // })
  $.ajax({
    url: 'http://shakeitspeare.com/api/poem',
    type: 'get',
    success: function(data){
      console.log('i am teh winner');
      console.log(data);
    }
  })

})
