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

function findAllShortestPaths(start, end, walls) {
  const queue = new PriorityQueue();
  const cameFrom = new Map();
  const costSoFar = new Map();
  const directionSoFar = new Map();

  queue.enqueue(start, 0);
  cameFrom.set(start, new Set([null]));
  costSoFar.set(start, 0);
  directionSoFar.set(start, new Set([null]));

  let shortestCost = Infinity;

  while (!queue.isEmpty()) {
    const current = queue.dequeue();

    if (current === end) {
      shortestCost = costSoFar.get(current);
      break;
    }

    for (const [next, newDir] of getNeighbors(current)) {
      if (walls.has(next)) continue;

      const currentDirs = directionSoFar.get(current);
      const turnCost = Array.from(currentDirs).some(dir => dir && dir !== newDir) ? 1000 : 0;
      const newCost = costSoFar.get(current) + 1 + turnCost;

      if (!costSoFar.has(next) || newCost <= costSoFar.get(next)) {
        if (!costSoFar.has(next) || newCost < costSoFar.get(next)) {
          costSoFar.set(next, newCost);
          const priority = newCost + manhattanDistance(next, end);
          queue.enqueue(next, priority);
          cameFrom.set(next, new Set([current]));
          directionSoFar.set(next, new Set([newDir]));
        } else {
          cameFrom.get(next).add(current);
          directionSoFar.get(next).add(newDir);
        }
      }
    }
  }

  const paths = reconstructPaths(cameFrom, start, end);

  return {
    cost: shortestCost,
    paths: paths
  };
}

function reconstructPaths(cameFrom, start, end) {
  const paths = [];

  function backtrack(current, path) {
    if (current === start) {
      paths.push([...path, current]);
      return;
    }

    for (const prev of cameFrom.get(current)) {
      if (prev !== null) {
        backtrack(prev, [...path, current]);
      }
    }
  }

  backtrack(end, []);
  return paths.map(path => path.reverse());
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

const result = findAllShortestPaths(start, end, walls);
console.log("Shortest path cost:", result.cost);
console.log("Number of shortest paths:", result.paths.length);

// Count unique positions in all shortest paths
const uniquePositions = new Set();
result.paths.forEach(path => {
  path.forEach(position => {
    uniquePositions.add(position);
  });
});

console.log("Number of unique positions in shortest paths:", uniquePositions.size);