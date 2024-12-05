let rows = document.querySelector("pre").innerText.split("\n");
rows.pop();
// rows = [
//   ".M.S......",
//   "..A..MSMS.",
//   ".M.S.MAA..",
//   "..A.ASMSM.",
//   ".M.S.M....",
//   "..........",
//   "S.S.S.S.S.",
//   ".A.A.A.A..",
//   "M.M.M.M.M.",
//   "..........",
// ];
let total = 0;
rows.forEach((row, rowIndex) => {
  row.split("").forEach((letter, letterIndex) => {
    if (letter === "A") {
      if (
        // top M
        rows[rowIndex - 1]?.[letterIndex - 1] === "M" &&
        rows[rowIndex + 1]?.[letterIndex + 1] === "S" &&
        rows[rowIndex - 1]?.[letterIndex + 1] === "M" &&
        rows[rowIndex + 1]?.[letterIndex - 1] === "S"
      )
        total++;
      if (
        // left M
        rows[rowIndex - 1]?.[letterIndex - 1] === "M" &&
        rows[rowIndex + 1]?.[letterIndex + 1] === "S" &&
        rows[rowIndex + 1]?.[letterIndex - 1] === "M" &&
        rows[rowIndex - 1]?.[letterIndex + 1] === "S"
      )
        total++;
      if (
        // bottom M
        rows[rowIndex + 1]?.[letterIndex - 1] === "M" &&
        rows[rowIndex - 1]?.[letterIndex + 1] === "S" &&
        rows[rowIndex + 1]?.[letterIndex + 1] === "M" &&
        rows[rowIndex - 1]?.[letterIndex - 1] === "S"
      )
        total++;
      if (
        // left M
        rows[rowIndex + 1]?.[letterIndex + 1] === "M" &&
        rows[rowIndex - 1]?.[letterIndex - 1] === "S" &&
        rows[rowIndex - 1]?.[letterIndex + 1] === "M" &&
        rows[rowIndex + 1]?.[letterIndex - 1] === "S"
      )
        total++;
    }
  });
});

console.log(total);
