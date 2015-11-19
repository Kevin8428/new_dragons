window.onload = function(){
  console.log('works2');

  $.ajax({
    method: "GET",
    url: "http://localhost:9292/puppy",
    success: function (data){
      console.log('ajax request worked')
      console.dir(data)
      $('body').append('add image')
    },
    failure: function (data){
      console.log('did not work');
    },


    dataType: "json"
  });

}
