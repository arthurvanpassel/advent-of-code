let input = "xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))"
input = document.querySelector("pre").innerText

const results = [...input.matchAll(/mul\((\d{1,3}),(\d{1,3})\)/gm)]
let sum = 0
results.forEach(element => {
  sum += +element[1] * +element[2]
});

console.log(sum)