let currentOctal = "";

        function generateQuestion() {
            const randomNumber = Math.floor(Math.random() * 512); // 0-511 között (oktális 777)
            currentOctal = randomNumber.toString(8);
            document.getElementById("binaryQuestion").textContent = `Mi a(z) ${currentOctal} oktális szám decimális megfelelője?`;
            document.getElementById("userAnswer").value = "";
            document.getElementById("result").textContent = "";
        }

        function checkAnswer() {
            const userAnswer = document.getElementById("userAnswer").value.trim();
            const correctAnswer = parseInt(currentOctal, 8);

            if (userAnswer === "") {
                document.getElementById("result").textContent = "Írjon be egy számot!";
                document.getElementById("result").style.color = "red";
                return;
            }

            if (parseInt(userAnswer) === correctAnswer) {
                document.getElementById("result").textContent = "Helyes válasz! 🎉";
                document.getElementById("result").style.color = "green";
            } else {
                document.getElementById("result").textContent = `Helytelen! A helyes válasz: ${correctAnswer}`;
                document.getElementById("result").style.color = "red";
            }
        }

        // Induláskor generáljon egy kérdést
        window.onload = generateQuestion;