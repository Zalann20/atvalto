let currentCorrectAnswer = 0;

function generateQuestion() {
const randomNumber = Math.floor(Math.random() * 256); // 0-255 között
const binValue = randomNumber.toString(2).padStart(8, '0');
currentCorrectAnswer = randomNumber;
document.getElementById("binQuestion").textContent = `Mi a(z) ${binValue} bináris szám decimális megfelelője?`;
document.getElementById("userAnswer").value = "";
document.getElementById("result").textContent = "";

}
function checkAnswer() {
const userInput = document.getElementById("userAnswer").value.trim();
if (!/^[0-9]+$/.test(userInput)) {
document.getElementById("result").textContent = "Csak számokat adj meg!";
document.getElementById("result").style.color = "red";
return;

}
            
const userNumber = parseInt(userInput, 10);
if (userNumber === currentCorrectAnswer) {
document.getElementById("result").textContent = "Helyes válasz! 🎉";
document.getElementById("result").style.color = "green";
} else {
document.getElementById("result").textContent = `Helytelen! A helyes válasz: ${currentCorrectAnswer}`;
document.getElementById("result").style.color = "red";

}
}


window.onload = generateQuestion;indow.onload = generateQuestion;
    