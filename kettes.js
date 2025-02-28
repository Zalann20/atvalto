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
const userInput = parseInt(document.getElementById("userAnswer").value, 10);
if (userInput === currentCorrectAnswer) {
document.getElementById("result").textContent = "Helyes válasz! 🎉";
document.getElementById("result").style.color = "green";

} 

else {
document.getElementById("result").textContent = `Helytelen! A helyes válasz: ${currentCorrectAnswer}`;
document.getElementById("result").style.color = "red";

}
}

        
window.onload = generateQuestion;
    