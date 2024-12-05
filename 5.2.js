const [rules, input] = document.querySelector("pre").innerText.split("\n\n");
// const rules =
//   "47|53\n97|13\n97|61\n97|47\n75|29\n61|13\n75|53\n29|13\n97|29\n53|29\n61|53\n97|53\n61|29\n47|13\n75|47\n97|75\n47|61\n75|61\n47|29\n75|13\n53|13";
// const input =
//   "75,47,61,53,29\n97,61,53,29,13\n75,29,13\n75,97,47,61,53\n61,13,29\n97,13,75,29,47";
let search_array = [];
let second_array = [];
rules.split("\n").forEach((element) => {
  const [first, second] = element.split("|");
  search_array.push(first);
  second_array.push(second);
});
let result = 0;
input.split("\n").forEach((element) => {
  let test = true;
  const row = element.split(",");
  for (let index = 0; index < row.length; index++) {
    // debugger
    const number = row[index];
    if (index > 0) {
      const before_string = row.join(',').split(number)[0];
      for (let i = 0; i < search_array.length; i++) {
        if (
          search_array[i] === number &&
          before_string.includes(second_array[i])
        ) {
          // debugger
          const pos = row.indexOf(second_array[i]);
          console.log(number, index)
          console.log("first", row);
          row.splice(pos, 1);
          console.log("second", row);
          row.splice(index, 0, second_array[i]);
          console.log("third", row);
          test = false;
          i = search_array.length
          index = 0
        }
      }
    }
  }
  console.log(test);
  if (!test) {
    console.log(row)
    result += +row[Math.floor(row.length / 2)];}
});
console.log(result);
