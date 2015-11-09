$(document).ready(function() {

console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.body;

$(".hobbitlist").html(hobbits.map(function(value) {
    return('<span>' + value + '</span>');
}).join(""));


// var makeHobbits = $('ul.hobbitList')
// $.each(hobbits, function(i)
// {
//     var li = $('<li/>')
//         .addClass('hobbit')
//         .appendTo(makeHobbits);
//     var hobbitItem = $('<p>')
//         .text(hobbits[i])
//         .appendTo(li)
//       });
// var secret = $( "ul li:nth-child(2)" ).add( "<span> - 2nd!</span>" );

// $("#middle-earth").append(body);
});// end of document.ready function
