var makeMiddleEarth = function(){
  $('body').append("<section id='middle-earth'></section>");
  for (var i=0;i<lands.length;i++) {
  $('#middle-earth').append("<article><h1>" + lands[i] + "</h1></article>");
  };
  // $('body').append('#middle-earth');
};
makeMiddleEarth();

var makeHobbits = function(){
  $('article:nth-child(1)').append('<ul></ul>');
  for (var i=0;i<hobbits.length;i++){
  $('ul').append("<li class='hobbit'>" + hobbits[i] + "</li>")
  };
};
makeHobbits();
