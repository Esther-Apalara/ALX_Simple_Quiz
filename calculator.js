// Add function
function add(number1, number2) {
    return number1 + number2;
}

// Subtract function
function subtract(number1, number2) {
    return number1 - number2;
}

// Multiply function
function multiply(number1, number2) {
    return number1 * number2;
}

// Divide function
function divide(number1, number2) {
    return number1 / number2;
}

// Event listener for Add
document.getElementById("add").addEventListener("click", function() {
    const number1 = parseFloat(document.getElementById("number1").value) || 0;
    const number2 = parseFloat(document.getElementById("number2").value) || 0;
    const result = add(number1, number2);
    document.getElementById("calculation-result").textContent = result;
});

// Event listener for Subtract
document.getElementById("subtract").addEventListener("click", function() {
    const number1 = parseFloat(document.getElementById("number1").value) || 0;
    const number2 = parseFloat(document.getElementById("number2").value) || 0;
    const result = subtract(number1, number2);
    document.getElementById("calculation-result").textContent = result;
});

// Event listener for Multiply
document.getElementById("multiply").addEventListener("click", function() {
    const number1 = parseFloat(document.getElementById("number1").value) || 0;
    const number2 = parseFloat(document.getElementById("number2").value) || 0;
    const result = multiply(number1, number2);
    document.getElementById("calculation-result").textContent = result;
});

// Event listener for Divide
document.getElementById("divide").addEventListener("click", function() {
    const number1 = parseFloat(document.getElementById("number1").value) || 0;
    const number2 = parseFloat(document.getElementById("number2").value) || 0;
    const result = divide(number1, number2);
    document.getElementById("calculation-result").textContent = result;
});