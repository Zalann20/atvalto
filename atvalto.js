function convertBase() {
const number = document.getElementById("number").value.trim();
const fromBase = parseInt(document.getElementById("fromBase").value);
const toBase = parseInt(document.getElementById("toBase").value);

if (!number) {
alert("Nem adott meg számot!");
return;
}

try {

const decimalValue = parseInt(number, fromBase);

if (isNaN(decimalValue)) {
throw new Error("Csak számot adjon meg!");
}

        
const convertedValue = decimalValue.toString(toBase).toUpperCase();

document.getElementById("display").textContent = `Eredmény: ${convertedValue}`;
} catch (error) {
alert(error.message);
}
}