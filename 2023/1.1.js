let lines = document.querySelector('pre').innerText.split("\n")
let result = 0
lines.forEach(line => {
  let first = ""
  let last = "0"
  for (let i = 0; i < line.length; i++) {
    if (["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(line[i])) {
      last = line[i]
      if (first === "") first = line[i]
    }
  }
  console.log(first, last, Number(first + last))
  result += Number(first + last)
});
console.log(result)