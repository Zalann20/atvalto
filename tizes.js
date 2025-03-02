let decimalNumber = 0;

function generateQuestions() {
decimalNumber = Math.floor(Math.random() * 256); // 0-255 között
document.getElementById("binaryQuestion").textContent = `Mi a(z) ${decimalNumber}  szám bináris megfelelője?`;
document.getElementById("octalQuestion").textContent = `Mi a(z) ${decimalNumber}  szám oktális megfelelője?`;
document.getElementById("hexQuestion").textContent = `Mi a(z) ${decimalNumber}  szám hexadecimális megfelelője?`;
    
document.getElementById("binaryAnswer").value = "";
document.getElementById("octalAnswer").value = "";
document.getElementById("hexAnswer").value = "";
    
document.getElementById("binaryResult").textContent = "";
document.getElementById("octalResult").textContent = "";
document.getElementById("hexResult").textContent = "";
document.getElementById("binaryResult").style.backgroundColor = "#dddddd";
document.getElementById("octalResult").style.backgroundColor = "#dddddd";
document.getElementById("hexResult").style.backgroundColor = "#dddddd";
}

function checkBinary() {
checkAnswer("binaryAnswer", decimalNumber.toString(2), "binaryResult");
}

function checkOctal() {
checkAnswer("octalAnswer", decimalNumber.toString(8), "octalResult");
}

function checkHex() {
checkAnswer("hexAnswer", decimalNumber.toString(16).toUpperCase(), "hexResult");
}

function checkAnswer(inputId, correctAnswer, resultId) {
const userInput = document.getElementById(inputId).value.trim().toUpperCase();
if (!userInput.match(/^[0-9A-F]+$/i)) {
document.getElementById(resultId).textContent = "Adjon meg egy számot!";
document.getElementById(resultId).style.color = "white";
document.getElementById(resultId).style.backgroundColor = "red";
document.getElementById(resultId).style.padding = "5px";
document.getElementById(resultId).style.borderRadius = "5px";
return;
}
if (userInput === correctAnswer) {
document.getElementById(resultId).textContent = "Helyes válasz!";
document.getElementById(resultId).style.color = "white";
document.getElementById(resultId).style.backgroundColor = "green";
document.getElementById(resultId).style.padding = "5px";
document.getElementById(resultId).style.borderRadius = "5px";
} else {
document.getElementById(resultId).textContent = `Helytelen! A helyes válasz: ${correctAnswer}`;
document.getElementById(resultId).style.color = "white";
document.getElementById(resultId).style.backgroundColor = "red";
document.getElementById(resultId).style.padding = "5px";
document.getElementById(resultId).style.borderRadius = "5px";
}
}


window.onload = generateQuestions;
