      // Array of notes (this is the original set of notes)
      const originalNotes = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
      let notes = [...originalNotes]; // Clone the original notes for current modifications

      // Function to open the modal and display the notes
      function openArraysList() {
          // Reset the notes to original before displaying the modal
          notes = [...originalNotes]; // Clone the original notes every time the modal is opened
          document.getElementById('modalOverlayArraysList').style.display = 'flex';
          displayNotes(); // Refresh the list with the original notes
      }

      // Function to close the modal
      function closeArraysListModal() {
          document.getElementById('modalOverlayArraysList').style.display = 'none';
      }

      // Function to display the current list of notes in the modal
      function displayNotes() {
          const noteListDiv = document.getElementById('noteList');
          noteListDiv.innerHTML = "";  // Clear the current list before updating

          // Display each note from the notes array
          notes.forEach((note, index) => {
              const noteElement = document.createElement('p');
              noteElement.textContent = `Note ${index}: ${note}`;
              noteListDiv.appendChild(noteElement);
          });
      }

      // Function to update a specific note in the array
      function updateNote() {
          const noteIndex = parseInt(document.getElementById('noteIndex').value);
          const newNote = document.getElementById('newNote').value;

          if (isNaN(noteIndex) || noteIndex < 0 || noteIndex > 8 || newNote === "") {
              alert("Please enter a valid index (0-8) and a non-empty note.");
              return;
          }

          // Update the note at the specified index
          notes[noteIndex] = newNote;

          // Clear the input fields after updating
          document.getElementById('noteIndex').value = '';
          document.getElementById('newNote').value = '';

          // Refresh the note list to show the updated notes
          displayNotes();
      }