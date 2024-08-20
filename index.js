// TEMPERATURE CONVERSION PROGRAM

// Get references to the HTML elements
const textBox = document.getElementById("textBox"); 
const toFahrenheit = document.getElementById("toFahrenheit"); 
const toCelsius = document.getElementById("toCelsius"); 
const result = document.getElementById("result"); 
let temp; 

// Function to perform the temperature conversion
function convert() {

    // Check if the "Celsius to Fahrenheit" radio button is selected
    if (toFahrenheit.checked) {
        temp = Number(textBox.value); 
        temp = temp * (9 / 5) + 32; 
        result.textContent = temp.toFixed(1) + "°F"; 
    }
    // Check if the "Fahrenheit to Celsius" radio button is selected
    else if (toCelsius.checked) {
        temp = Number(textBox.value); 
        temp = (temp - 32) * (5 / 9); 
        result.textContent = temp.toFixed(1) + "°C"; 
    }
    // If neither radio button is selected, prompt the user to select a unit
    else {
        result.textContent = "Select a unit!"; 
    }
}
