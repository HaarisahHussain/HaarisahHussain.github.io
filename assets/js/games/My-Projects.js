  // Function to open the modal
  function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
  }

  // Function to close the modal
  function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
  }

  // Optional: Close modal if clicking outside modal content
  window.onclick = function(event) {
    const modals = document.querySelectorAll('.modal-overlay');
    modals.forEach(function(modal) {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    });
  }


// Wait for the DOM to be fully loaded before binding event listeners
document.addEventListener("DOMContentLoaded", function () {
  // Attach event listener to the "Calculate" button
  document.getElementById("calculateBtn").addEventListener("click", function () {
    // Get input values
    let diameter = document.getElementById("diameter").value;
    let arcAngle = document.getElementById("arcAngle").value;

    // Validate inputs
    if (!diameter || !arcAngle || isNaN(diameter) || isNaN(arcAngle)) {
      alert("Please enter valid numbers for both fields.");
      return;
    }

    // Convert inputs to numbers
    diameter = parseFloat(diameter);
    arcAngle = parseFloat(arcAngle);

    // Perform calculations
    let radius = diameter / 2;
    let areaCircle = Math.PI * Math.pow(radius, 2);  // Area = πr²
    let circumferenceCircle = Math.PI * diameter;  // Circumference = πd
    let arcLength = (circumferenceCircle * arcAngle) / 360; // Arc length = (Circumference * Arc Angle) / 360

    // Output the results
    let output = `
      <strong>Results:</strong><br>
      Radius: ${radius.toFixed(2)} units<br>
      Area: ${areaCircle.toFixed(2)} square units<br>
      Circumference: ${circumferenceCircle.toFixed(2)} units<br>
      Arc Length: ${arcLength.toFixed(2)} units
    `;
    
    // Display the result inside the modal
    document.getElementById("output").innerHTML = output;
  });

  // Modal open and close functionality
  document.querySelector('.show-profile-btn-UserInputApps').addEventListener('click', function() {
    document.getElementById('modalOverlayUserApps').style.display = 'flex';
  });

  document.getElementById('closeBtnUserApps').addEventListener('click', function() {
    document.getElementById('modalOverlayUserApps').style.display = 'none';
    resetModalState();  // Reset the modal state when closed
  });

  // Close modal when clicking outside of it
  window.onclick = function(event) {
    if (event.target == document.getElementById('modalOverlayUserApps')) {
      document.getElementById('modalOverlayUserApps').style.display = 'none';
      resetModalState();  // Reset the modal state when clicked outside
    }
  };

  // Function to reset modal state (clear inputs and output)
  function resetModalState() {
    document.getElementById('diameter').value = '';  // Clear diameter input
    document.getElementById('arcAngle').value = '';  // Clear arc angle input
    document.getElementById('output').innerHTML = '';  // Clear the result
  }
});
