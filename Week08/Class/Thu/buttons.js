function updateName() {
    const name = prompt("Enter a new name!")
    button.textContent = `Player 1: ${name}`
}

function updateButton() {
    if(realbutton.textContent == "BUTTON") {
        realbutton.textContent = "UNBUTTON"
    } else {
        realbutton.textContent = "BUTTON"
    }
}


const realbutton = document.getElementById("realbutton")
realbutton.addEventListener("click", updateButton)