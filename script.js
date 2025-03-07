function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    let expression = document.getElementById('display').value;
    
    // Replace any square root and trigonometric functions with valid JavaScript functions
    expression = expression.replace(/sqrt/g, 'Math.sqrt');
    expression = expression.replace(/sin/g, 'Math.sin');
    expression = expression.replace(/cos/g, 'Math.cos');
    expression = expression.replace(/tan/g, 'Math.tan');
    expression = expression.replace(/\^/g, '**');  // Handle exponentiation

    // Use try-catch block to handle any errors (like invalid syntax)
    try {
        let result = eval(expression);
        document.getElementById('display').value = result;
    } catch (e) {
        document.getElementById('display').value = 'Error';
    }
}

function calculateFactorial() {
    let number = parseInt(document.getElementById('display').value);
    if (isNaN(number) || number < 0) {
        document.getElementById('display').value = 'Error';
    } else {
        let result = 1;
        for (let i = 1; i <= number; i++) {
            result *= i;
        }
        document.getElementById('display').value = result;
    }
}

// Function for clearing the display completely
function clearDisplay() {
    document.getElementById('display').value = ''; // This clears the input box
}

// Function for clearing the display completely (if the user clicks AC)
function clearAll() {
    document.getElementById('display').value = ''; // Clears everything in the display
}







