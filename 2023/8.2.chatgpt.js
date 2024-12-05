function solve(input, instructions) {
  const map = {};
  input.split('\n').forEach(line => {
      const [node, edges] = line.split(' = ');
      map[node] = edges.substring(1, edges.length - 1).split(', ');
  });

  const visited = new Map();
  let nodes = Object.keys(map).filter(node => node.endsWith('A'));
  let steps = 0;

  while (!nodes.every(node => node.endsWith('Z'))) {
      const nextNodes = [];

      for (const node of nodes) {
          if (node.endsWith('Z')) continue;

          const nextNode = map[node][instructions[steps % instructions.length] === 'L' ? 0 : 1];
          if (!visited.has(nextNode) || visited.get(nextNode) > steps + 1) {
              visited.set(nextNode, steps + 1);
              nextNodes.push(nextNode);
          }
      }

      nodes = nextNodes;
      steps++;
  }

  return steps;
}

// Example usage
// const input = '11A = (11B, XXX)\n11B = (XXX, 11Z)\n11Z = (11B, XXX)\n22A = (22B, XXX)\n22B = (22C, 22C)\n22C = (22Z, 22Z)\n22Z = (22B, 22B)\nXXX = (XXX, XXX)';
// const instructions = 'LR';


let text = document.querySelector('pre').innerText
let [moves, input] = text.split('\n\n')
console.log(moves, input)

console.log(solve(input.slice(0,-1), moves));  // Returns 6