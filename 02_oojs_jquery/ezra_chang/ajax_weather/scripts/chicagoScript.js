// 367d1eaff31957e53696bbacade447cf

$(document).ready(function () {
  $.ajax(budget);


});

var budget = {
  type: 'get',
  url: 'https://data.cityofchicago.org/resource/36y7-5nnf.json',
  //data: 'json',
  success: function (data) {

    for (var i = 0; i < data.length; i++) {
      newData.push({'accountDescription': data[i].appropriation_account_description, 'ordinanceAmount': parseInt(data[i]._ordinance_amount_)});
    };

    while (newData.length > 0) {
      var biggest = 0;
      var biggestIndex = 0;
      for (var i = 0; i < newData.length; i++) {
        if (newData[i].ordinanceAmount >= biggest) {
          biggest = newData[i].ordinanceAmount;
          biggestIndex = i;
        };
      };
      newData2.push(newData[biggestIndex]);
      newData.splice(biggestIndex, 1);
    };

    for (var i = 0; i < newData2.length; i++) {
      $('#column1').append(newData2[i].accountDescription + '<br>');
      $('#column2').append(newData2[i].ordinanceAmount + '<br>');
    }
  },
  error: function () {
    console.log('Oops.');
  }
};

var newData = [];
var newData2 = [];
