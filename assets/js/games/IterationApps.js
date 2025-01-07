// Function to open the modal
function openIterationModal() {
    document.getElementById('modalOverlayIterationApps').style.display = 'flex';
}

// Function to close the modal
function closeIterationAppsModal() {
    document.getElementById('modalOverlayIterationApps').style.display = 'none';
    // Clear the input field and message when the modal is closed
    document.getElementById('gamertagInput').value = '';
    document.getElementById('validationMessage').textContent = '';
}

// Function to validate the gamertag
function validateGamertag() {
    const gamertag = document.getElementById('gamertagInput').value;
    const gamertagLength = gamertag.length;
    const validationMessage = document.getElementById('validationMessage');

    // Reset the validation message before updating it
    validationMessage.textContent = '';

    if (gamertagLength === 15) {
        validationMessage.textContent = 'This is a valid gamertag!';
        validationMessage.style.color = 'green';
    } else {
        validationMessage.textContent = 'Gamertag must be exactly 15 characters!';
        validationMessage.style.color = 'red';
    }
}
