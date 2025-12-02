const field = [
    "....#.....",
    ".........#",
    "..........",
    "..#.......",
    ".......#..",
    "..........",
    ".#..^.....",
    "........#.",
    "#.........",
    "......#...",
  ];
  
  const height = field.length;
  const width = field[0].length;
  let startRow, startCol;
  
  // Find the starting position of the guard
  field.forEach((row, index) => {
    const col = row.indexOf("^");
    if (col >= 0) {
      startRow = index;
      startCol = col;
    }
  });
  
  // Function to simulate the guard's movement
  function simulateGuard(field, row, col, direction) {
    const path = new Set();
    const visited = new Set();
  
    while (true) {
      const key = `${row},${col},${direction}`;
      if (visited.has(key)) {
        return path.size === visited.size; // Returns true if stuck in a loop
      }
      visited.add(key);
      path.add(`${row},${col}`);
  
      let newRow = row, newCol = col, newDirection = direction;
  
      switch (direction) {
        case "up":
          if (row > 0 && field[row - 1][col] !== "#") newRow--;
          else newDirection = "right";
          break;
        case "right":
          if (col < width - 1 && field[row][col + 1] !== "#") newCol++;
          else newDirection = "down";
          break;
        case "down":
          if (row < height - 1 && field[row + 1][col] !== "#") newRow++;
          else newDirection = "left";
          break;
        case "left":
          if (col > 0 && field[row][col - 1] !== "#") newCol--;
          else newDirection = "up";
          break;
      }
  
      row = newRow;
      col = newCol;
      direction = newDirection;
    }
  }
  
  // Function to check if adding an obstruction at (row, col) creates a loop
  function createsLoop(field, row, col) {
    if (field[row][col] !== "." || (row === startRow && col === startCol)) {
      return false;
    }
    
    const newField = field.map(row => row.split(''));
    newField[row][col] = "#";
    
    return simulateGuard(newField, startRow, startCol, "up");
  }
  
  // Find all positions that create a loop
  let loopPositions = 0;
  for (let row = 0; row < height; row++) {
    for (let col = 0; col < width; col++) {
      if (createsLoop(field, row, col)) {
        loopPositions++;
      }
    }
  }
  
  console.log(`Number of positions that create a loop: ${loopPositions}`);