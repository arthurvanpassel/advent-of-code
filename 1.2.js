let lines = document.querySelector("pre").innerText.split("\n");
lines.pop()
// let lines = ["3   4", "4   3", "2   5", "1   3", "3   9", "3   3"];
let first = [];
let second = [];
lines.forEach((item) => {
  const numbers = item.split("   ");
  first.push(+numbers[0]);
  second.push(+numbers[1]);
});

let sum = 0;
first.forEach((first_number, index) => {
  const amount = second.filter(second_number => second_number === first_number).length
  console.log(first_number, amount)
  sum += first_number * amount
});

console.log(sum);
