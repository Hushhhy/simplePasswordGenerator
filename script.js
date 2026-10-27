const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T",
    "U","V","W","X","Y","Z","a","b", "c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s",
    "t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6","7", "8", "9","~","`","!","@","#",
    "$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const withoutSymbols = [
    "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T",
    "U","V","W","X","Y","Z","a","b", "c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s",
    "t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6","7", "8", "9"
];

let pwd1 = document.getElementById("pwd1-el")
let pwd2 = document.getElementById("pwd2-el")
let isChecked = document.getElementById("sAndN")
let pwdLength = document.getElementById("pwdLength")
let count1 = 91
let count2 = 62

function generatePassword() {
    pwd1.textContent = ""
    pwd2.textContent = ""
    if (isChecked.checked === true) {
        for (let i = 0; i < pwdLength.value; i++)
            pwd1.textContent += characters[Math.floor(Math.random() * count1)]
        for (let j = 0; j < pwdLength.value; j++)
            pwd2.textContent += characters[Math.floor(Math.random() * count1)]
    } else {
        for (let i = 0; i < pwdLength.value; i++)
            pwd1.textContent += withoutSymbols[Math.floor(Math.random() * count2)]
        for (let j = 0; j < pwdLength.value; j++)
            pwd2.textContent += withoutSymbols[Math.floor(Math.random() * count2)]
    }
}