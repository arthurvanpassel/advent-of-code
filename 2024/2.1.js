let lines = document.querySelector("pre").innerText.split("\n");
lines.pop();
let reports = lines.map(numbers => numbers.split(" ").map(number => +number))
console.log(reports)
// lines = [
//   "7 6 4 2 1",
//   "1 2 7 8 9",
//   "9 7 6 2 1",
//   "1 3 2 4 5",
//   "8 6 4 4 1",
//   "1 3 6 7 9",
// ];
let amount_safe = 0
lines.forEach((item) => {
  const numbers = item.split(" ");
  let decreasing;
  let safe = true;
  numbers.forEach((current, index) => {
    if (safe) {
      if (index > 0) {
        const prev = numbers[index - 1];
        const diff = +prev - +current;
        console.log(diff)
        if ((decreasing && (diff <= 0 || diff > 3)) || (!decreasing && (diff >= 0 || diff < -3))) {
          safe = false
          console.log('here')
          return;
        }
      } else {
        if (current === numbers[1]) safe = false
        decreasing = current > numbers[1];
      }
    }
  });
  if (!safe) console.log(safe, numbers)
  if (safe) amount_safe++
});

console.log(amount_safe)