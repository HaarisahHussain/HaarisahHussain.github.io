// Function to open the String Splitting Modal
function openStringSplittingModal() {
    document.getElementById("modalOverlayStringSplittingApps").style.display = "flex";
}

// Function to close the String Splitting Modal
function closeStatementsModal() {
    document.getElementById("modalOverlayStringSplittingApps").style.display = "none";
}

// Function to split the name into forename and surname
function splitName() {
    // Get the full name entered by the user
    const fullName = document.getElementById("fullNameInput").value.trim();

    // Clear previous error and result messages
    document.getElementById("forename").textContent = "";
    document.getElementById("surname").textContent = "";
    document.getElementById("errorMsgStringSplitting").textContent = "";

    // Validate the input to ensure it contains at least two words (forename and surname)
    if (fullName === "") {
        document.getElementById("errorMsgStringSplitting").textContent = "Please enter a full name.";
        return;
    }

    // Split the full name by spaces
    const nameParts = fullName.split(" ");

    // If there are not exactly two parts (forename and surname), show an error
    if (nameParts.length < 2) {
        document.getElementById("errorMsgStringSplitting").textContent = "Please enter both forename and surname.";
        return;
    }

    // Assign the first part as forename and the last part as surname
    const forename = nameParts[0];
    const surname = nameParts.slice(1).join(" ");  // Handles cases with middle names

    // Display the forename and surname
    document.getElementById("forename").textContent = `Forename: ${forename}`;
    document.getElementById("surname").textContent = `Surname: ${surname}`;

}
