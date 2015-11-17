var btnTrigger = false;

$(document).ready(function() {

  $("a").click(function(event) {
    event.preventDefault(); // stops the event from occurring
    var link = $("a").prop("href");
    console.log(link);
  });

    // $("p").animate({
    //   fontSize: "10em",
    //   opacity: 0.5
    // }, 1000 );

  // for (var i = 0; i < 5; i++) {
  //   $("p").animate({
  //     fontSize: "15em",
  //     opacity: 0.5
  //   }, 100 );
  //
  //   $("p").animate({
  //     fontSize: "1em",
  //     opacity: 0.5
  //   }, 100 );
  // }

  // $("#hide").click(function() {
  //   switch (btnTrigger) {
  //     case false:
  //       console.log(btnTrigger);
  //       $("p").fadeOut();
  //       break;
  //     case true:
  //       console.log(btnTrigger);
  //       $("p").fadeIn();
  //       break;
  //     default:
  //       console.log("whhhaaat?");
  //   }
  //
  //   btnTrigger = !btnTrigger;
  //
  // });

});
