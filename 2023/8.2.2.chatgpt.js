function stepsToReachDestination(instructions, nodes) {
    let startNodes = Object.keys(nodes).filter(node => node.endsWith('A'));
    let endNodes = Object.keys(nodes).filter(node => node.endsWith('Z'));
    let visited = new Set(startNodes);
    let queue = startNodes.map(node => ({ node, steps: 0 }));
    let instructionLength = instructions.length;

    while(queue.length > 0) {
        let current = queue.shift();
        if(endNodes.includes(current.node)) {
            return current.steps;
        }

        if(nodes[current.node]) {
            let nextInstruction = instructions[current.steps % instructionLength] === 'L' ? 0 : 1;
            let nextNodes = nodes[current.node][nextInstruction];

            for (let nextNode of nextNodes) {
                if(!visited.has(nextNode)) {
                    visited.add(nextNode);
                    queue.push({ node: nextNode, steps: current.steps + 1 });
                }
            };
        }
    }

    return -1; // Return -1 if we cannot reach a node that ends with 'Z'
}

let text = document.querySelector('pre').innerText
let [instructions, input] = text.split('\n\n')
console.log(instructions, input)
const nodes = {};
input.slice(0,-1).split('\n').forEach(line => {
    const [node, edges] = line.split(' = ');
    nodes[node] = edges.substring(1, edges.length - 1).split(', ');
});
console.log(instructions, nodes)

console.log(stepsToReachDestination(instructions, nodes));