class PriorityQueue {
  constructor() {
    this.elements = [];
  }

  enqueue(element, priority) {
    this.elements.push({element, priority});
    this.elements.sort((a, b) => a.priority - b.priority);
  }

  dequeue() {
    return this.elements.shift().element;
  }

  isEmpty() {
    return this.elements.length === 0;
  }
}

function manhattanDistance(pos1, pos2) {
  const [x1, y1] = pos1.split(',').map(Number);
  const [x2, y2] = pos2.split(',').map(Number);
  return Math.abs(x1 - x2) + Math.abs(y1 - y2);
}

function getNeighbors(pos) {
  const [r, c] = pos.split(',').map(Number);
  return [
    [r, c-1, 'W'],
    [r, c+1, 'E'],
    [r-1, c, 'N'],
    [r+1, c, 'S']
  ].map(([nr, nc, dir]) => [`${nr},${nc}`, dir]);
}

function findBestPaths(start, end, walls) {
  const queue = new PriorityQueue();
  const costSoFar = new Map();
  const directionSoFar = new Map();
  const bestPaths = new Set();

  queue.enqueue(start, 0);
  costSoFar.set(start, 0);
  directionSoFar.set(start, null);

  let bestCost = Infinity;

  while (!queue.isEmpty()) {
    const current = queue.dequeue();

    if (current === end) {
      if (costSoFar.get(current) <= bestCost) {
        bestCost = costSoFar.get(current);
      } else {
        continue;
      }
    }

    if (costSoFar.get(current) > bestCost) {
      continue;
    }

    bestPaths.add(current);

    for (const [next, newDir] of getNeighbors(current)) {
      if (walls.has(next)) continue;

      const currentDir = directionSoFar.get(current);
      const turnCost = currentDir && currentDir !== newDir ? 1000 : 0;
      const newCost = costSoFar.get(current) + 1 + turnCost;

      if (!costSoFar.has(next) || newCost <= costSoFar.get(next)) {
        costSoFar.set(next, newCost);
        const priority = newCost + manhattanDistance(next, end);
        queue.enqueue(next, priority);
        directionSoFar.set(next, newDir);
      }
    }
  }

  return {
    bestCost: bestCost,
    bestPathTiles: bestPaths
  };
}

// Parse the input
const input = `###############
#.......#....E#
#.#.###.#.###.#
#.....#.#...#.#
#.###.#####.#.#
#.#.#.......#.#
#.#.#####.###.#
#...........#.#
###.#.#####.#.#
#...#.....#.#.#
#.#.#.###.#.#.#
#.....#...#.#.#
#.###.#.#.#.#.#
#S..#.....#...#
###############`;

const walls = new Set();
let start = "";
let end = "";
let totalTiles = 0;

const lines = input.split("\n");
const height = lines.length;
const width = lines[0].length;

lines.forEach((row, r) => {
  row.split("").forEach((col, c) => {
    switch (col) {
      case "#":
        walls.add(`${r},${c}`);
        break;
      case "S":
        start = `${r},${c}`;
        totalTiles++;
        break;
      case "E":
        end = `${r},${c}`;
        totalTiles++;
        break;
      case ".":
        totalTiles++;
        break;
    }
  });
});

const result = findBestPaths(start, end, walls);
console.log("Best path cost:", result.bestCost);
console.log("Number of tiles on best paths:", result.bestPathTiles.size);
console.log("Total non-wall tiles:", totalTiles);

// Visualize the maze with best paths
let visualMaze = '';
for (let r = 0; r < height; r++) {
  for (let c = 0; c < width; c++) {
    const pos = `${r},${c}`;
    if (walls.has(pos)) {
      visualMaze += '#';
    } else if (result.bestPathTiles.has(pos)) {
      visualMaze += 'O';
    } else {
      visualMaze += '.';
    }
  }
  visualMaze += '\n';
}
console.log("Maze with best paths marked:");
console.log(visualMaze);