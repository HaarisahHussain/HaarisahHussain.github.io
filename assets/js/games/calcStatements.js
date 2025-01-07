// Function to open the modal
function openCalcStatementsModal() {
    document.getElementById('modalOverlayCalcStatements').style.display = 'flex';
}

// Function to close the modal
function closeCalcStatementsModal() {
    document.getElementById('modalOverlayCalcStatements').style.display = 'none';
    
    // Clear the output when the modal is closed
    document.getElementById('outputFib').innerHTML = ""; // This will clear the content
}

// Wait until the document is fully loaded
window.onload = function() {
    // Event Listener for the Fibonacci button
    document.getElementById('startBtn').onclick = function () {
        console.log("Button clicked!"); // Check if button is working

        // Initialize Fibonacci sequence variables
        var number1 = 1;
        var number2 = 1;
        var sequence = ""; // String to hold the Fibonacci sequence
        
        // Generate Fibonacci sequence while number2 is less than 200
        while (number2 < 200) {
            sequence += number2 + "<br>"; // Add number2 to sequence with a line break
            number2 = number2 + number1;
            number1 = number2 - number1;
        }

        // Set the sequence inside the output <p> element
        document.getElementById('outputFib').innerHTML = sequence; // This will update the <p> tag with the Fibonacci sequence
    };
};