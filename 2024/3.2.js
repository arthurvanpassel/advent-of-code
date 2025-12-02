let input =
  "xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))";
input = document.querySelector("pre").innerText

const do_splits = input.split(`do()`);
console.log(do_splits);
let sum = 0;
do_splits.forEach((do_split) => {
  const results = [
    ...do_split.split(`don't()`)[0].matchAll(/mul\((\d{1,3}),(\d{1,3})\)/gm),
  ];

  results.forEach((element) => {
    sum += +element[1] * +element[2];
  });
});

console.log(sum)
