
window.onload = function(){
    // your code

var arr = ["mangos", "apples", "pears", "pizzas", "McMuffins"];

for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]+" are delicious");
}

var Simran = {
  age: 25,
  favFoods: ["mangos", "apples", "pears", "pizzas", "McMuffins"],
  height: "5.11",
  listFoods: function(){
    for (var i = 0; i < arr.length; i++)
      {
      console.log(arr[i]+" are delicious");
      }
  }
}

var button = document.getElementById('button');
button.onclick = function buttonClick() {
  console.log('button is working');
  Simran.listFoods();
}

};
