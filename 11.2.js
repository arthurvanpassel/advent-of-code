let input = '125 17'
input = "7568 155731 0 972 1 6919238 80646 22"
input = input.split(' ').map(item => +item)

for (let i = 0; i < 75; i++) {
  for (let j = 0; j < input.length; j++) {
    const element = input[j];
    const digit_length = element.toString().length
    if (element == 0) input[j] = 1
    else if (digit_length % 2 === 0) {
      const first = +element.toString().substring(0,digit_length/2)
      const second = +element.toString().substring(digit_length/2,digit_length)
      input.splice(j, 1, first, second)
      j++
    } else input[j] = element * 2024
    
  }
}
console.log(input.length)