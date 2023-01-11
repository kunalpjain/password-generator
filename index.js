const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordsEl = document.getElementById("passwords-el")
let generatePasswordsButton = document.getElementById("generate-passwords-button")
let firstPassEl = document.getElementById("first-pass-el")
let secondPassEl = document.getElementById("second-pass-el")


generatePasswordsButton.addEventListener("click", function() {
    firstPassEl.textContent = generatePassword(15)
    secondPassEl.textContent = generatePassword(15)
    passwordsEl.classList.remove("hidden")
})

function generatePassword(passwordLength) {
    let password = ""
    for (let i=0; i<passwordLength; i++) {
        password += generateRandomLetter()
    }
    return password
}

function generateRandomLetter() {
    return characters[Math.floor(Math.random() * characters.length)]
}