let text = document.querySelector('pre').innerText
let lines = text.split("\n")
// lines = "two1nine\neightwothree\nabcone2threexyz\nxtwone3four\n4nineeightseven2\nzoneight234\n7pqrstsixteen\n".split("\n")
const numbers = [
  { label: "oneight", value: "18" },
  { label: "twone", value: "21" },
  { label: "threeight", value: "38" },
  { label: "fiveight", value: "58" },
  { label: "sevenine", value: "79" },
  { label: "eightwo", value: "82" },
  { label: "eighthree", value: "83" },
  { label: "nineight", value: "98" },
  { label: "one", value: "1" },
  { label: "two", value: "2" },
  { label: "three", value: "3" },
  { label: "four", value: "4" },
  { label: "five", value: "5" },
  { label: "six", value: "6" },
  { label: "seven", value: "7" },
  { label: "eight", value: "8" },
  { label: "nine", value: "9" }]

let result = 0
lines.forEach(line => {
  for (const element of numbers) {
    line = line.replaceAll(element.label, element.value)
  }
  console.log(line)
  let first = ""
  let last = ""
  for (const element of line) {
    if (["1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(element)) {
      last = element
      if (first === "") first = element
    }
  }
  if (first !== "" && last !== "") {
    result += Number(first + last)
  }
});
console.log(result)