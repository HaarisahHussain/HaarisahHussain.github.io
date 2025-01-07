// Open the modal when the "🖱️" button is clicked
function openModalStatementsNLoops() {
    document.getElementById("modalOverlayStatementsNLoops").style.display = "flex";
}

// Close the modal when the close button is clicked
function closeModalStatementsNLoops() {
    document.getElementById("modalOverlayStatementsNLoops").style.display = "none";
}

// Calculate Gross Pay when the user submits the input
function calculatePay() {
    // Get the input values for hours worked and pay rate
    const hoursWorked = parseFloat(document.getElementById("hoursWorked").value);
    const payRate = parseFloat(document.getElementById("payRate").value);

    // Initialize the error message and result display
    const errorMsg = document.getElementById("errorMsg");
    const result = document.getElementById("result");

    // Reset error message and result
    errorMsg.textContent = "";
    result.textContent = "";

    // Check if the input values are valid
    if (isNaN(hoursWorked) || isNaN(payRate)) {
        errorMsg.textContent = "Please enter valid numbers for both fields.";
    } else if (hoursWorked < 0 || hoursWorked > 60) {
        errorMsg.textContent = "Hours worked must be between 0 and 60.";
    } else if (payRate < 0) {
        errorMsg.textContent = "Pay rate cannot be negative.";
    } else {
        // Calculate the gross pay
        const grossPay = hoursWorked * payRate;
        result.textContent = `Your gross pay is: $${grossPay.toFixed(2)}`;
    }
}

// Function to handle closing the modal when clicked outside
window.onclick = function(event) {
    const modal = document.getElementById("modalOverlayStatementsNLoops");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}