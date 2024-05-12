
// This is for the DE : Delete Element button

function back() {
    let currentDisplay = document.getElementById("display").value;
    document.getElementById("display").value = currentDisplay.slice(0, -1);
}



// This is for the AC : all clear screen button
function clearScreen() {
    document.getElementById("display").value=" ";
}

// This is for the = : total calculation button
function calculate(){
    document.getElementById("display").value = 
    eval( display.value)
}