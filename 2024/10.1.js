let input = [
  "89010123",
  "78121874",
  "87430965",
  "96549874",
  "45678903",
  "32019012",
  "01329801",
  "10456732",
];

let heights = [[]];
let field = [];
input.forEach((row, r) => {
  field.push(row.split("").map((item) => +item));
  row.split("").forEach((col, c) => {
    if (col === "0") heights[0].push(`${r},${c}`);
  });
});
for (let h = 0; h < 10; h++) {
  heights[h + 1] = [];
  heights[h].forEach((pos) => {
    const [r, c] = pos.split(',').map(item => +item);
    debugger;
    if (field[r][c - 1] === h + 1) heights[h + 1].push(`${r},${c - 1}`);
    if (field[r][c + 1] === h + 1) heights[h + 1].push(`${r},${c + 1}`);
    if (field[r - 1]?.[c] === h + 1) heights[h + 1].push(`${r - 1},${c}`);
    if (field[r + 1]?.[c] === h + 1) heights[h + 1].push(`${r + 1},${c}`);
  });
}
console.log(heights);
console.log(heights[9].length);
