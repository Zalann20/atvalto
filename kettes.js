
let currentBinary = "";

function generateQuestion() {
    const randomNumber = Math.floor(Math.random() * 256); // 0-255 között
    currentBinary = randomNumber.toString(2);
    document.getElementById("binaryQuestion").textContent = `Mi a(z) ${currentBinary} bináris szám decimális megfelelője?`;
    document.getElementById("userAnswer").value = "";
    document.getElementById("result").textContent = "";
}

function checkAnswer() {
    const userAnswer = document.getElementById("userAnswer").value.trim();
    const correctAnswer = parseInt(currentBinary, 2);

    if (userAnswer === "") {
        document.getElementById("result").textContent = "Irjon be egy számot!";
        document.getElementById("result").style.color = "red";
        return;
    }

    if (parseInt(userAnswer) === correctAnswer) {
        document.getElementById("result").textContent = "Helyes válasz!";
        document.getElementById("result").style.color = "green";
    } else {
        document.getElementById("result").textContent = `Helytelen! A helyes válasz: ${correctAnswer}`;
        document.getElementById("result").style.color = "red";
    }
}

// Induláskor generáljon egy kérdést
window.onload = generateQuestion;
