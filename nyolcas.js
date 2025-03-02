let currentCorrectAnswer = 0;

function generateQuestion() {
const randomNumber = Math.floor(Math.random() * 256); // 0-255 között
const octalValue = randomNumber.toString(8).toUpperCase();
currentCorrectAnswer = randomNumber;
document.getElementById("octalQuestion").textContent = `Mi a ${octalValue}  decimális megfelelője?`;
    
    
const optionsContainer = document.getElementById("options");
optionsContainer.innerHTML = "";
    
let options = new Set();
options.add(currentCorrectAnswer);
while (options.size < 4) {
options.add(Math.floor(Math.random() * 256));

}
    
options = Array.from(options).sort(() => Math.random() - 0.5);
    
options.forEach(option => {
const btn = document.createElement("button");
btn.textContent = option;
btn.onclick = () => checkAnswer(option);
optionsContainer.appendChild(btn);});
document.getElementById("result").style.backgroundColor="#dddddd";
document.getElementById("result").textContent = "";

}

function checkAnswer(selectedAnswer) {
if (selectedAnswer === currentCorrectAnswer) {
document.getElementById("result").textContent = "Helyes válasz!";
document.getElementById("result").style.color = "white";
document.getElementById("result").style.backgroundColor = "green";
document.getElementById("result").style.padding = "5px";
document.getElementById("result").style.borderRadius = "5px";

}

else {
document.getElementById("result").textContent = `Helytelen! A helyes válasz: ${currentCorrectAnswer}`;
document.getElementById("result").style.color = "white";
document.getElementById("result").style.backgroundColor = "red";
document.getElementById("result").style.padding = "5px";
document.getElementById("result").style.borderRadius = "5px";
    

}
}

// Induláskor generáljon egy kérdést
window.onload = generateQuestion;