// Function to create pattern grid
function createPatternGrid() {
    var div = document.getElementById('patternGrid');
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            var button = document.createElement('button');
            button.innerHTML = i + ',' + j;
            div.appendChild(button);
        }
        var br = document.createElement('br');
        div.appendChild(br);
    }
}

// Call the function to create pattern grid
createPatternGrid();