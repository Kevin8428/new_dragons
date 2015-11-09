var foods = ['milk', 'bread', 'cookies', 'berries', 'kale'];

for (var i = 0; i < foods.length; i++) {
    console.log(foods[i] + ' is delicious.');
}
var adam = {
    hood: 'south loop',
    friend: 'Renee',
    dog: 'Seamus',
    music: ['matisyahu', 'ziggy marely', 'old man luedecke'],
    speakCool: function(array) {
        for (var i = 0; i < array.length; i++) {
            console.log('Dude, ' + array[i] + ' totally.');
        } //end loop
    } //end method
} //end object

window.onLoad = function() {

var btn = document.getElementById('btn');

btn.onclick = function() {
    console.log('my button is working');
};

} // END WINDOW.ONLOAD FUNCTION
