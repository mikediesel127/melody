// Array of instrument names
var instruments = ['piano', 'guitar', 'kick', 'snare'];

// Function to add instruments to the list
function addInstruments() {
    var ul = document.getElementById('instruments');
    for (var i = 0; i < instruments.length; i++) {
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(instruments[i]));
        ul.appendChild(li);
    }
}

// Call the function to add instruments
addInstruments();