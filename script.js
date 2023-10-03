const display = document.getElementById("display")
let displayInput = ""

const buttons = document.querySelectorAll("button")


function clear() {
    display.value = displayInput
}

function appendToDisplay(value) {
    display.value += value;
}

function equal() {
    try {

        display.value = eval(display.value)
    } catch (error) {
        display.value = "error"
    }
}


