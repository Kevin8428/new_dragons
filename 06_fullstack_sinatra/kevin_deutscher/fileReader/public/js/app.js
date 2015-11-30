$(document).ready(function(){
  console.log('aaaaaaa');

});

  // function performClick(elemId) {
  //    var elem = document.getElementById(elemId);
  //    if(elem && document.createEvent) {
  //       var evt = document.createEvent("MouseEvents");
  //       evt.initEvent("click", true, false);
  //       elem.dispatchEvent(evt);
  //    }
  // }

// function appendImage(data){
//     console.log('function runs');
//     // var photoLocation = document.getElementById('testID').files[0];
//     var photoLocation = document.getElementById('imageHere'); // in JQUERY = $(#imageHere)[0];
//     var imgVar = $('<div>');
//     imgVar.attr('id','imgID');
//     imgVar.addClass('imgClass');
//     imgVar.text('Base64 here');
//     // console.log(photoLocation);
//     $('body').append(imgVar);
// }

function show_image(x){
  console.log('working')
  var img = document.createElement("img");
  img.src = x;
  document.body.appendChild(img);
}

function appendImage (data){
  console.log(data);
  console.log('33333');
  var photoLocation = document.getElementById('imageHere');
  var imgVar = document.createElement('imgVar');
  imgVar.src = data;
  photoLocation.appendChild(imgVar);
}


function getBase64Image(img) {
    // Create an empty canvas element
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;

    // Copy the image contents to the canvas
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);

    // Get the data-URL formatted image
    // Firefox supports PNG and JPEG. You could check img.src to guess the
    // original format, but be aware the using "image/jpg" will re-encode the image.
    var dataURL = canvas.toDataURL("image/png");

    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}


// FileReader(){
//
// }

// http://stackoverflow.com/questions/6150289/how-to-convert-image-into-base64-string-using-javascript
// https://developer.mozilla.org/en-US/docs/Using_files_from_web_applications
