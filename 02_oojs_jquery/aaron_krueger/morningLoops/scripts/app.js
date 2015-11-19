
  //created foods array
  var foods = ['curry', 'mahi mahi', 'cake', 'guacamole', 'brownies'];

  for (var i = 0; i < foods.length; i++) {
    //console.log(foods[i]);
    console.log('You ate '+foods[i]+'!');
  }

  //created my own object
  var aaron = {
    name: 'Aaron',
    lastName: 'Krueger',
    gender: 'apache helicopter',
    orientation: ['attack helicopters', 'medical helicopters', 'primative helicopters']
  }

  console.log(aaron);
  //logged the object


  //create a method that accepts an arg which is an array and loops through the array

  aaron.orient = function(arr){
    for(i=0; i < arr.length; i++){
      console.log('you like '+ arr[i]+'.')  
    }
  }


  // var getOrientationMessage = function(grabArray){
  //   for (var key in aaron) {
  //     if(aaron.hasOwnProperty(key)){
  //       console.log('key = '+ key+ ' and object key\'s value is '+aaron[key])
  //     }
  //   }
  // }



  var btn = document.getElementById('my-btn');

  var clickBtn = function(){

    aaron.orient(aaron.orientation);

  }

  // var document.getElementById('my-btn') = function(){
  //   getOrientationMessage();
  // };
  // my-btn();
