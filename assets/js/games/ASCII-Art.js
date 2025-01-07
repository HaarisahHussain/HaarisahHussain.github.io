  // Function to open the ASCII Art modal and display the ASCII pattern
  function openAsciiModal() {
    const asciiOutput = document.getElementById('ascii-output');
    
    // ASCII Art pattern (example)
    const pattern = "72#H";
    const space = "    ";  // Space between patterns

    // Generate the ASCII art and display it in the modal
    asciiOutput.textContent = `
      ${pattern}${space}${space}${space}${space}73#H
      ${pattern}${space}${space}${space}${space}73#H
      ${pattern}${space}${space}${space}${space}73#H
      ${pattern}${pattern}${pattern}72
      ${pattern}${space}${space}${space}${space}73#H
      ${pattern}${space}${space}${space}${space}73#H
      ${pattern}${space}${space}${space}${space}73#H
    `;

    // Show the modal by changing its display style
    document.getElementById('modalOverlayAscii').style.display = 'flex';
  }

  // Function to close the ASCII Art modal
  function closeAsciiModal() {
    document.getElementById('modalOverlayAscii').style.display = 'none';
  }