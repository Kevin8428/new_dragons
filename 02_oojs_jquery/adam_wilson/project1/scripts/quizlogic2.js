////////////////////////////////////////
//        TO DO LIST                  //
////////////////////////////////////////
// do javascript by lunchtime
   // get instr help AM ASAP
      // move inc++ so sure it runs???
      //why setMarker and append imgs at end ?????
         // replace inc, inc +1 "hardcoded" with
            // if (guess.toLocaleLowerCase == names.indexOf(0))
      // re initMap with each loop through family objects
         // put object names in an (array?) together?
   // add button hide/show to loop
// add aesthetic after lunch
// keep 1 player, just log some counter
// reorder text, input, button even w just a prompt
   // form input is frosting
// aesthetics
   // see other quiz/game
   // background-image grogg all family photo
   // photos line up along bottom of screen below text & map
      // maybe with hide/show('slow')
         //so i can format exactly
         // so appearance more animated/fun






/////////////////////////////////////////////////
// DOM element variables
// var ui = {}; // object to hold dom variables
// ++++++++++++++ put vars and arrays below in ui object w/ ui.varName
// var quizArea = $('.quizArea');
var quizBackground = $('.quizBackground');
var img = $('img')
var imageLocation = $('#imageLocation');

///////////////////////////////////////
//  replacing arrays with objects    //
//   to bundle values by family      //
///////////////////////////////////////
var families = [];
families[0] = {
   objectName: 'grandParents',
   city: 'Dayton',
   state: 'Ohio',
   lat: 39.74354,
   long: -84.07497,
   names: ['howard', 'kathy'],
   images: ['<img src="images/howard.jpg" />', '<img src="images/kathy.jpg" />']
   // streetView: 'https://www.google.com/maps/@39.7437098,-84.0753218,3a,75y,126.99h,80.3t/data=!3m6!1e1!3m4!1s7f6_BUyGt0IJeEy92jF1eA!2e0!7i13312!8i6656!6m1!1e1'
};



/////////////////////////////////////////////////
// declare arrays
// var names = ['Kathy', 'Howard', 'Renee', 'Adam'];
// var cities = ['Dayton', 'Chicago'];
// var states = ['Ohio', 'Illinois'];
// var locationCoordinates = {
//    daytonLat: '39.742255',
//    daytonLong: '-84.075316',
//    southLoopLat: '41.86704',
//    SouthLoopLong: '-87.62465'
// }
// var images = [, , '<img src="images/renee.jpg" />', '<img src="images/adam.jpg" />'];


 //////////////////////////////////////////////
 //                doc ready :               //
 //             where action happens         //
 // PUT ALL FUNCTION CALLS AND INSTANTIATION //
 // INSIDE OF DOCUMENT. READY TO BE SURE ALL //
 // DOM ELEMENTS ETC THEY NEED ARE LOADED    //
 // BEFORE THEY RUN !!! ///////////////////////

 $(document).ready(function() {
      initMap(); // google map
      var inc = 0; // common incrementor

   /////////button action calls function/////////
    $('button').click( function() {

      $("p").remove(); // remove previous text

      /////////////////////////////////////////////
      // FOR EVERY FAMILY /////////////////////////
      /////////////////////////////////////////////
      for (var inc = 0; inc < families.length; inc++) {

         quizBackground.append('<p>Welcome to ' + families[inc].city + '.</p>'); // 0, 1, 2

         setMarker(families[inc].lat, families[inc].lat);

         var stateGuess = prompt('What State is ' + families[inc].city + ' in?');
         quizBackground.append('<p>Yes! '+ families[inc].city + ' is in ' + families[inc].state + '.</p>');

         ///// FOR AS LENGTH OF FAMILY NAMES ARRAY - 1
         for (var i = 0; i < families[inc].names.length; i++) {
            var nameGuess = prompt('Who/who else lives in ' + families[inc].city + '? (type name)');

            // if (inc == inc)
            // if ( nameGuess.toLocaleLowerCase() ==families[inc].names[i]){
                  console.log('nameGuess comparison if stmnt running.');
                  quizBackground.append('<p>Yes! ' + nameGuess + ' lives in ' + families[inc].city + '.</p>');
                  imageLocation.append(families[inc].images[i]);
               // } // end if statment

         } // end for loop

         // END OF FAMILY NAMES /// MOVE TO NEXT FAMILY......
         inc++;  // NEXT FAMILY OBJECT NEXT LOOP THROUGH...
         quizBackground.append('<p>Great! Click button above to find more family!</p>');

      } // END FOR LOOP THAT LOOPS THRU EACH FAMILIES OBJECT
      //////////////////////////////////////////////////////
      //////////////////////////////////////////////////////


         // if ( nameGuess.toLocaleLowerCase() == (
         //    families[inc].name1.toLocaleLowerCase()  ||
         //    families[inc].name2.toLocaleLowerCase()  || families[inc].child1.toLocaleLowerCase() || families[inc].child2.toLocaleLowerCase() || families[inc].child3.toLocaleLowerCase()
         //    )

         // )  {
         //    quizBackground.append('<p>Yes! ' + nameGuess + ' lives in ' + families[inc].city + '.</p>');
         //    imageLocation.append(families[inc].image1);
         //
         // } else if (nameGuess.toLocaleLowerCase() == names[inc + 1].toLocaleLowerCase()) {
         //    quizBackground.append('<p>Yes! ' + names[inc + 1] + ' lives in ' + cities[inc] + '.</p>');
         //    imageLocation.append(images[inc + 1]); // add their img
         // }
         // var nameGuess = prompt('Who ELSE lives in ' + cities[inc] + '? (type name)');
         // if (nameGuess.toLocaleLowerCase() == names[inc].toLocaleLowerCase()) {
         //    quizBackground.append('<p>Yes! ' + names[inc] + '  lives in ' + cities[inc] + '.</p>');
         //    imageLocation.append(images[inc]); // add their img
         //    inc++;
         // } else if (nameGuess.toLocaleLowerCase() == names[inc + 1].toLocaleLowerCase()) {
         //    quizBackground.append('<p>Yes! ' + names[inc + 1] + ' lives in ' + cities[inc] + '.</p>');
         //    imageLocation.append(images[inc + 1]); // add their img
         //    inc++;
         // }

         // ONCE THRU ALL FAMILIES OBJECTS YOU  "WIN" THE "GAME"
        quizBackground.append('The Family is All Here!');

///////////////////////////////////////////
  }) // end button click function /////////
  /////////////////////////////////////////


////////////////////////////////////////
 }); // end of doc.ready              //
 ///////////////////////////////////////



/////// map initilize and setmarker(lat, long) from libr locator /
var mapCanvas, mapOptions, map;
function initMap() {
  mapCanvas = document.getElementById('map-canvas');
  mapOptions = {
      center: new google.maps.LatLng(41.931929, -87.698327),
      zoom: 4,
      mapTypeId: google.maps.MapTypeId.HYBRID
   } // end options

 //the map object constructor takes two arguments
 // mapCanvas and mapOptions
  map = new google.maps.Map(mapCanvas, mapOptions);

/// THIS IS A STATIC setMARKER, NOT A DYNAMIC ARG DRIVEN ONE
  // var marker = new google.maps.Marker({
  //    position: new google.maps.LatLng(41.889793, -87.627270),
  //    map: map,
  //    animation: google.maps.Animation.DROP
 // }) // end marker
} // end initMap function


 function setMarker (lat, long) {
    console.log('test');
    console.log(lat, long);
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(lat, long),
      map: map,
      animation: google.maps.Animation.DROP
  }) // end marker
 }











///this Wed Afternoon Map code commmented out temporarily...//
// ++++++++ add back in?????? ++++++++++

// var myLatLng = {lat: -25.363, lng: 131.044}; // location object
// ///******************************************///
// //       new map code from google api help    //
// ///******************************************///
// function initMap(lat, lng) {
//    // var myLatLng = {latitude, longitude};
//
//   var map = new google.maps.Map(document.getElementById('map-canvas'), {
//     zoom: 4,
//     center: (latitude, longitude)
//   });
//
//   var marker = new google.maps.Marker({
//     position: (latitude, longitude),
//     map: map,
//     title: 'Hello World!'
//   });
// } // end initMap





///******************************************///
//        map code below commented out        //
///******************************************///

//
// /////////map code///////////////////////////
// // initMap has been called up in doc.ready
// ///++++++++++++can in initMap with parameters of new Lat.Lng?????? each time change states?
// ///////map constructor /////////////////////
// // declare variables for initMap
// var mapCanvas, mapOptions, map;
// //initMap map
// function initMap() {
//   mapCanvas = document.getElementById('map-canvas');
//   mapOptions = {
//       center: new google.maps.LatLng(41.931929, -87.698327),
//       zoom: 4,
//       mapTypeId: google.maps.MapTypeId.ROADMAP
//    };// end options
//
// // +++++++tesing adding this w preset coord into initMap
//    var marker = new google.maps.Marker({
//      position: new google.maps.LatLng(41.931929, -87.698327),
//      map: map,
//      animation: google.maps.Animation.DROP
// }) // end var marker =
//
//    //instantiate map constructor w/ two args
//    // mapCanvas and mapOptions (dom selector, map ctr, zm, id)
//    var map = new google.maps.Map(mapCanvas, mapOptions);
//
// } // end initMap
// ///////////////////////////////////////////////
//
// //////////////////////////////////////////////
// function setMarker(lat, long) {
//      console.log('test');
//      // marker object has keys: position, map, animation
//      // position value takes 2 args:lat, long
//      var marker = new google.maps.Marker({
//        position: new google.maps.LatLng(lat, long),
//        map: map, // map is a variable set above w options & canvas
//        animation: google.maps.Animation.DROP
//    }) // end var marker =
// } // end setMarker
// ////////////////////////////////////////////////
