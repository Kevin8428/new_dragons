$(document).ready(function() {

  console.log("Status: Loaded");

  $("h1").fadeIn(1000);

  $("#btnRight").click(function() {
    console.log("Status: Button Right is working");
    $(".box1").animate({'left': "+=50px"}, "slow");

    // $('header').css("background-color","red");
  })

  $("#btnLeft").click(function() {
    console.log("Status: Button Left is working");
    $(".box1").animate({'left': "-=50px"}, "slow");
  })

  $("#btnUp").click(function() {
    console.log("Status: Button Up is working");
    $(".box1").animate({'top': "-=50px"}, "slow");
  })

  $("#btnDown").click(function() {
    console.log("Status: Button Down is working");
    $(".box1").animate({'top': "+=50px"}, "slow");
  })

  // // Not quite working yet, always the right button...
  // console.log($("button").click().attr("id"));
  // $("button").click(function() {
  //   console.log("#" + $("button").attr("id"));
  //   var btnDir = "#" + $("button").attr("id");
  //   switch (btnDir) {
  //     case "#btnRight":
  //       $(".box1").animate({"left":"+=50px"}, "slow");
  //       break;
  //     case "#btnLeft":
  //       $(".box1").animate({"left":"-=50px"}, "slow");
  //       break;
  //     case "#btnUp":
  //       $(".box1").animate({"top":"-=50px"}, "slow");
  //       break;
  //     case "#btnDown":
  //       $(".box1").animate({"top":"+=50px"}, "slow");
  //       break;
  //     default:
  //   }
  // });

var body = document.getElementsByTagName("body")[0];
body.addEventListener("keydown", function(event) {
  // look for specific keys to be pressed
  if (event.keyCode == 13) {
    console.log("why you press enter so much yo");
    kittenImage.id = "kitten";
  }
  if (event.keyCode == 40) {
    $(".box1").animate({'top': "+=50px"}, "fast");
  }
  if (event.keyCode == 38) {
    $(".box1").animate({'top': "-=50px"}, "fast");
  }
  if (event.keyCode == 37) {
    $(".box1").animate({'left': "-=50px"}, "fast");
  }
  if (event.keyCode == 39) {
    $(".box1").animate({'left': "+=50px"}, "fast");
  }
  console.log(event.keyCode);
});
}); // end of document.ready
