let display = document.getElementById('display');
let expression = '';

function appendNumber(num) {
    expression += num;
    updateDisplay();
}

function appendOperator(op) {
    if (expression === '') return;
    
    // Prevent multiple operators in a row
    if (['+', '-', '*', '/'].includes(expression.slice(-1))) {
        expression = expression.slice(0, -1);
    }
    
    expression += op;
    updateDisplay();
}

function clearDisplay() {
    expression = '';
    updateDisplay();
}

function deleteLast() {
    expression = expression.slice(0, -1);
    updateDisplay();
}

function updateDisplay() {
    display.value = expression;
}

function calculate() {
    if (expression === '') return;
    
    try {
        // Evaluate the expression
        let result = eval(expression);
        
        // Handle division by zero
        if (!isFinite(result)) {
            display.value = 'Error';
            expression = '';
            return;
        }
        
        // Round to avoid floating point errors
        result = Math.round(result * 100000000) / 100000000;
        
        expression = result.toString();
        updateDisplay();
    } catch (error) {
        display.value = 'Error';
        expression = '';
    }
}