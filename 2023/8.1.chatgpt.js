function solve(input, instructions) {
  // Parse the input
  const map = {};
  input.split('\n').forEach(line => {
      const [node, edges] = line.split(' = ');
      map[node] = edges.substring(1, edges.length - 1).split(', ');
  });

  // Initialize variables
  let currentNode = 'AAA';
  let counter = 0;
  let i = 0;

  // Keep following instructions until we reach the destination
  while (currentNode !== 'ZZZ') {
      currentNode = map[currentNode][instructions[i % instructions.length] === 'L' ? 0 : 1];
      counter++;
      i++;
  }

  return counter;
}

let text = document.querySelector('pre').innerText
let [moves, input] = text.split('\n\n')
console.log(moves, input)

// Example usage
console.log(solve(input.slice(0, -1), moves));  // Returns 2