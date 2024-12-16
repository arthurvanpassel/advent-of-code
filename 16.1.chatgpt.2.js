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

function findShortestPath(start, end, walls) {
  const queue = new PriorityQueue();
  const cameFrom = new Map();
  const costSoFar = new Map();
  const directionSoFar = new Map();

  queue.enqueue(start, 0);
  cameFrom.set(start, null);
  costSoFar.set(start, 0);
  directionSoFar.set(start, null);

  while (!queue.isEmpty()) {
    const current = queue.dequeue();

    if (current === end) {
      break;
    }

    for (const [next, newDir] of getNeighbors(current)) {
      if (walls.has(next)) continue;

      const currentDir = directionSoFar.get(current);
      const turnCost = currentDir && currentDir !== newDir ? 1000 : 0;
      const newCost = costSoFar.get(current) + 1 + turnCost;

      if (!costSoFar.has(next) || newCost < costSoFar.get(next)) {
        costSoFar.set(next, newCost);
        const priority = newCost + manhattanDistance(next, end);
        queue.enqueue(next, priority);
        cameFrom.set(next, current);
        directionSoFar.set(next, newDir);
      }
    }
  }

  // Reconstruct path
  let current = end;
  const path = [];
  while (current !== start) {
    path.unshift(current);
    current = cameFrom.get(current);
  }
  path.unshift(start);

  return {
    cost: costSoFar.get(end),
    path: path
  };
}

// Parse the input
let input = `###############
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

input.split("\n").forEach((row, r) => {
  row.split("").forEach((col, c) => {
    switch (col) {
      case "#":
        walls.add(`${r},${c}`);
        break;
      case "S":
        start = `${r},${c}`;
        break;
      case "E":
        end = `${r},${c}`;
        break;
    }
  });
});

const result = findShortestPath(start, end, walls);
console.log("Shortest path cost:", result.cost);
console.log("Path:", result.path);