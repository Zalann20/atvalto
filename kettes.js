let currentCorrectAnswer = 0;

function generateQuestion() {
    const randomNumber = Math.floor(Math.random() * 256); // 0-255 között
    const binValue = randomNumber.toString(2).padStart(8, '0');
    currentCorrectAnswer = randomNumber;
    document.getElementById("binQuestion").textContent = `Mi a ${binValue} decimális megfelelője?`;
    document.getElementById("userAnswer").value = "";
    document.getElementById("result").textContent = "";
    document.getElementById("result").style.backgroundColor = "#dddddd";
    document.getElementById("nextButton").style.display = "none"; // Rejtsd el a gombot új kérdésnél
}

function checkAnswer() {
    const userInput = document.getElementById("userAnswer").value.trim();

    if (userInput === "") {
        document.getElementById("result").textContent = "Adjon meg egy számot!";
        document.getElementById("result").style.color = "white"; 
        document.getElementById("result").style.backgroundColor = "red";
        document.getElementById("result").style.padding = "5px";
        document.getElementById("result").style.borderRadius = "5px";
        document.getElementById("nextButton").style.display = "none"; // Maradjon rejtve
        return;
    }

    const userNumber = parseInt(userInput, 10);
    if (userNumber === currentCorrectAnswer) {
        document.getElementById("result").textContent = "Helyes válasz!";
        document.getElementById("result").style.color = "white";
        document.getElementById("result").style.backgroundColor = "green";
        document.getElementById("result").style.padding = "5px";
        document.getElementById("result").style.borderRadius = "5px";
    } else {
        document.getElementById("result").textContent = `Helytelen! A helyes válasz: ${currentCorrectAnswer}`;
        document.getElementById("result").style.color = "white";
        document.getElementById("result").style.backgroundColor = "red";
        document.getElementById("result").style.padding = "5px";
        document.getElementById("result").style.borderRadius = "5px";
    }

    document.getElementById("nextButton").style.display = "block"; // Csak ellenőrzés után jelenik meg
}

window.onload = generateQuestion;


    