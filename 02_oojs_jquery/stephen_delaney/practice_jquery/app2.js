$(document).ready(function(){ // start

  //audio function


  (function($){

    $.extend({
      playSound: function(){
        return $("<embed src='"+arguments[0]+".mp3' hidden='true' autostart='true' loop='false' class='playSound'>" + "<audio autoplay='autoplay' style='display:none;' controls='controls'><source src='"+arguments[0]+".mp3' /><source src='"+arguments[0]+".ogg' /></audio>").appendTo('body');
      }
    });

  })(jQuery);

  //end audio function
$ ("#britney1").hide();
$ ("#britney2").hide();
$ ("#britney3").hide();
$ ("#britney4").hide();
$ ("#britney5").hide();
$ ("#britney6").hide();
$ ("#britney7").hide();
$ ("#britney8").hide();

//appear1
$( "#begin" ).click(function() {
 $.playSound('Clips/bomt');
  $( "#britney1" ).slideDown( "slow", function() {
  });
$( "#begin" ).remove();
});

//appear 2
$( "#clickme" ).click(function() {
   $.playSound('Clips/oops');
  $( "#britney2" ).slideDown( "slow", function() {
  });
  $( "#britney1" ).animate({
    left: "+=300",
  }, 1000, function() {
  });
  $( "#britney2" ).animate({
    bottom: "+=303",
  }, 1000, function() {
  });
});

// appear 3
$( "#clickme2" ).click(function() {
$.playSound('Clips/sfy');
  $( "#britney3" ).slideDown( "slow", function() {
  });
  $( "#britney1" ).animate({
    left: "+=300",
  }, 1000, function() {
  });
  $( "#britney2" ).animate({
    left: "+=300",
  }, 1000, function() {
  });
  $( "#britney3" ).animate({
    bottom: "+=307",
  }, 1000, function() {
  });
});

// appear 4
$( "#clickme3" ).click(function() {
  $.playSound('Clips/toxic');
  $( "#britney4" ).slideDown( "slow", function() {
  });
  $( "#britney1" ).animate({
    left: "+=300",
  }, 1000, function() {
  });
  $( "#britney2" ).animate({
    left: "+=300",
  }, 1000, function() {
  });  $( "#britney3" ).animate({
      left: "+=300",
    }, 1000, function() {
    });
  $( "#britney4" ).animate({
    bottom: "+=311",
  }, 1000, function() {
  });
});

// appear 5
$( "#clickme4" ).click(function() {
  $.playSound('Clips/gimmemore');
  $( "#britney5" ).slideDown( "slow", function() {
  });
  $( "#britney1" ).animate({
    left: "+=300",
  }, 1000, function() {
  });
  $( "#britney2" ).animate({
    left: "+=300",
  }, 1000, function() {
  });  $( "#britney3" ).animate({
      left: "+=300",
    }, 1000, function() {
    });
    $( "#britney4" ).animate({
      left: "+=300",
    }, 1000, function() {
    });
  $( "#britney5" ).animate({
    bottom: "+=315",
  }, 1000, function() {
  });
});

// appear 6
$( "#clickme5" ).click(function() {
  $.playSound('Clips/womanizer');
  $( "#britney6" ).slideDown( "slow", function() {
  });
  $( "#britney1" ).animate({
    left: "+=300",
  }, 1000, function() {
  });
  $( "#britney2" ).animate({
    left: "+=300",
  }, 1000, function() {
  });  $( "#britney3" ).animate({
      left: "+=300",
    }, 1000, function() {
    });
    $( "#britney4" ).animate({
      left: "+=300",
    }, 1000, function() {
    });
    $( "#britney5" ).animate({
      left: "+=300",
    }, 1000, function() {
    });
  $( "#britney6" ).animate({
    bottom: "+=318",
  }, 1000, function() {
  });
});

// appear 7
$( "#clickme6" ).click(function() {
  $.playSound('Clips/worldends');
  $( "#britney7" ).slideDown( "slow", function() {
  });
  $( "#britney1" ).animate({
    left: "+=300",
  }, 1000, function() {
  });
  $( "#britney2" ).animate({
    left: "+=300",
  }, 1000, function() {
  });  $( "#britney3" ).animate({
      left: "+=300",
    }, 1000, function() {
    });
    $( "#britney4" ).animate({
      left: "+=300",
    }, 1000, function() {
    });
    $( "#britney5" ).animate({
      left: "+=300",
    }, 1000, function() {
    });
    $( "#britney6" ).animate({
      left: "+=300",
    }, 1000, function() {
    });
  $( "#britney7" ).animate({
    bottom: "+=318",
  }, 1000, function() {
  });
});

// appear 8
$( "#clickme7" ).click(function() {
  $.playSound('Clips/workb');
  $( "#britney8" ).slideDown( "slow", function() {
  });
  $( "#britney1" ).animate({
    left: "+=300",
  }, 1000, function() {
  });
  $( "#britney2" ).animate({
    left: "+=300",
  }, 1000, function() {
  });  $( "#britney3" ).animate({
      left: "+=300",
    }, 1000, function() {
    });
    $( "#britney4" ).animate({
      left: "+=300",
    }, 1000, function() {
    });
    $( "#britney5" ).animate({
      left: "+=300",
    }, 1000, function() {
    });
    $( "#britney6" ).animate({
      left: "+=300",
    }, 1000, function() {
    });
    $( "#britney7" ).animate({
      left: "+=300",
    }, 1000, function() {
    });
  $( "#britney8" ).animate({
    bottom: "+=321",
  }, 1000, function() {
  });
});

}); // end
