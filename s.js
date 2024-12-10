let display = document.getElementById('display');

// Function to append value to the display
function appendValue(value) {
    display.value += value;
}

// Function to clear the display
function clearDisplay() {
    display.value = '';
}

// Function to calculate the result
function calculate() {
    try {
        display.value = eval(display.value); // Evaluate the mathematical expression
    } catch (e) {
        display.value = 'Error'; // Display 'Error' for invalid input
    }
}
