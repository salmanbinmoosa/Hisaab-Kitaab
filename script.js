const display = document.getElementById("display")
let displayInput = ""

const buttons = document.querySelectorAll("button")

// Array.from(buttons).forEach((button) => {
//     button.addEventListener("click", () => {
//         display.value = displayInput
//         for (let i = 0; i < buttons.length; i++) {
//             displayInput + button.innerHTML
//         }               
//     })   
// })

function equal() {
    display.value = eval(display.value)

}
