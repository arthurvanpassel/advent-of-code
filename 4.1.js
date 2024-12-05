let rows = document.querySelector("pre").innerText.split("\n");
rows.pop();
// rows = [
//   "MMMSXXMASM",
//   "MSAMXMSMSA",
//   "AMXSXMAAMM",
//   "MSAMASMSMX",
//   "XMASAMXAMM",
//   "XXAMMXXAMA",
//   "SMSMSASXSS",
//   "SAXAMASAAA",
//   "MAMMMXMMMM",
//   "MXMXAXMASX",
// ];
let total = 0;
rows.forEach((row, rowIndex) => {
  row.split('').forEach((letter, letterIndex) => {
    if (letter === "X") {
      if (
       ( row[letterIndex + 1] === "M" &&
        row[letterIndex + 2] === "A" &&
        row[letterIndex + 3] === "S")
      )
        total++;
      if (
        row[letterIndex - 1] === "M" &&
        row[letterIndex - 2] === "A" &&
        row[letterIndex - 3] === "S"
      )
        total++;
      if (
        rows[rowIndex + 1]?.[letterIndex] === "M" &&
        rows[rowIndex + 2]?.[letterIndex] === "A" &&
        rows[rowIndex + 3]?.[letterIndex] === "S"
      )
        total++;
      if (
        rows[rowIndex - 1]?.[letterIndex] === "M" &&
        rows[rowIndex - 2]?.[letterIndex] === "A" &&
        rows[rowIndex - 3]?.[letterIndex] === "S"
      )
        total++;
      if (
        rows[rowIndex + 1]?.[letterIndex + 1] === "M" &&
        rows[rowIndex + 2]?.[letterIndex + 2] === "A" &&
        rows[rowIndex + 3]?.[letterIndex + 3] === "S"
      )
        total++;
      if (
        rows[rowIndex - 1]?.[letterIndex - 1] === "M" &&
        rows[rowIndex - 2]?.[letterIndex - 2] === "A" &&
        rows[rowIndex - 3]?.[letterIndex - 3] === "S"
      )
        total++;
      if (
        rows[rowIndex + 1]?.[letterIndex - 1] === "M" &&
        rows[rowIndex + 2]?.[letterIndex - 2] === "A" &&
        rows[rowIndex + 3]?.[letterIndex - 3] === "S"
      )
        total++;
      if (
        rows[rowIndex - 1]?.[letterIndex + 1] === "M" &&
        rows[rowIndex - 2]?.[letterIndex + 2] === "A" &&
        rows[rowIndex - 3]?.[letterIndex + 3] === "S"
      )
        total++;
    }
  });
});

console.log(total)