let lines = document.querySelector("pre").innerText.split("\n");
lines.pop()
// let lines = ["3   4", "4   3", "2   5", "1   3", "3   9", "3   3"];
let first = [];
let second = [];
lines.forEach((item) => {
  console.log(item);
  if (typeof item === "string") {
    const numbers = item.split("   ");
    first.push(+numbers[0]);
    second.push(+numbers[1]);
  }
});

console.log("here", first, second);

const first_sorted = first.sort();
const second_sorted = second.sort();
console.log(first_sorted, second_sorted);

let sum = 0;
first_sorted.forEach((first_number, index) => {
  const second_number = second_sorted[index];
  const diff = Math.abs(first_number - second_number);
  // console.log(diff)
  sum += diff;
});

console.log(sum);
