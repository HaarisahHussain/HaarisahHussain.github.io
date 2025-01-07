 // Initialize grid and game variables
 let grid = [];
 const gridSize = 10;
 const numOfShips = 2;
 let bulletsLeft = 50;
 let gameOver = false;
 let numOfShipsSunk = 0;
 let shipPositions = [];
 const alphabet = "ABCDEFGHIJ"; // For Row inputs A-J

 // Initialize the grid and place ships
 function createGrid() {
   grid = [];
   for (let r = 0; r < gridSize; r++) {
     let row = [];
     for (let c = 0; c < gridSize; c++) {
       row.push('.');
     }
     grid.push(row);
   }

   let numOfShipsPlaced = 0;
   shipPositions = [];

   // Randomly place ships
   while (numOfShipsPlaced < numOfShips) {
     const randomRow = Math.floor(Math.random() * gridSize);
     const randomCol = Math.floor(Math.random() * gridSize);
     const direction = ['left', 'right', 'up', 'down'][Math.floor(Math.random() * 4)];
     const shipSize = Math.floor(Math.random() * 3) + 3;

     if (tryToPlaceShipOnGrid(randomRow, randomCol, direction, shipSize)) {
       numOfShipsPlaced++;
     }
   }

   renderGrid();
 }

 function tryToPlaceShipOnGrid(row, col, direction, length) {
   let startRow = row, endRow = row + 1, startCol = col, endCol = col + 1;

   if (direction === 'left') {
     if (col - length < 0) return false;
     startCol = col - length + 1;
   } else if (direction === 'right') {
     if (col + length >= gridSize) return false;
     endCol = col + length;
   } else if (direction === 'up') {
     if (row - length < 0) return false;
     startRow = row - length + 1;
   } else if (direction === 'down') {
     if (row + length >= gridSize) return false;
     endRow = row + length;
   }

   return validateGridAndPlaceShip(startRow, endRow, startCol, endCol);
 }

 function validateGridAndPlaceShip(startRow, endRow, startCol, endCol) {
   let allValid = true;

   // Check if the ship can be placed
   for (let r = startRow; r < endRow; r++) {
     for (let c = startCol; c < endCol; c++) {
       if (grid[r][c] !== '.') {
         allValid = false;
         break;
       }
     }
   }

   if (allValid) {
     shipPositions.push([startRow, endRow, startCol, endCol]);
     for (let r = startRow; r < endRow; r++) {
       for (let c = startCol; c < endCol; c++) {
         grid[r][c] = 'O'; // Mark as occupied by ship
       }
     }
   }

   return allValid;
 }

 // Render the grid visually in the modal
 function renderGrid() {
   const gridContainer = document.getElementById('grid-container');
   gridContainer.innerHTML = '';  // Clear the grid if already rendered

   for (let row = 0; row < gridSize; row++) {
     for (let col = 0; col < gridSize; col++) {
       const cell = document.createElement('div');
       cell.classList.add('grid-cell');
       cell.dataset.row = row;
       cell.dataset.col = col;

       if (grid[row][col] === 'X') {
         cell.classList.add('hit');
       } else if (grid[row][col] === '#') {
         cell.classList.add('miss');
       }

       gridContainer.appendChild(cell);
     }
   }
 }

 // Handle the shooting logic
 function shoot() {
   const rowInput = document.getElementById('row').value.toUpperCase();
   const colInput = parseInt(document.getElementById('col').value, 10);

   if (!rowInput || colInput < 0 || colInput > 9) {
     alert("Invalid input. Please enter valid row (A-J) and column (0-9).");
     return;
   }

   const row = alphabet.indexOf(rowInput);
   if (row === -1) {
     alert("Invalid row. Please enter a row between A-J.");
     return;
   }

   if (grid[row][colInput] === 'O') {
     grid[row][colInput] = 'X'; // Hit a ship
     numOfShipsSunk++;
     document.getElementById('ships-left').textContent = numOfShips - numOfShipsSunk;
     document.getElementById('message').textContent = 'You hit a ship!';
   } else {
     grid[row][colInput] = '#'; // Missed shot
     document.getElementById('message').textContent = 'You missed!';
   }

   bulletsLeft--;
   document.getElementById('bullets-left').textContent = bulletsLeft;

   // Check if game over
   if (numOfShipsSunk === numOfShips) {
     document.getElementById('message').textContent = 'Congratulations! You sank all ships!';
     gameOver = true;
   }

   if (bulletsLeft <= 0) {
     document.getElementById('message').textContent = 'Game over! You ran out of bullets.';
     gameOver = true;
   }

   renderGrid(); // Re-render the grid
 }
// Open the modal by setting display to flex
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'flex'; // Show the modal
  }
  
 // Close the modal
 function closeModal(modalId) {
   const modal = document.getElementById(modalId);
   modal.style.display = 'none';
 }

 // Initialize game when modal opens
 document.getElementById('modalOverlay').addEventListener('click', function() {
   if (!gameOver) {
     createGrid();
   }
 });