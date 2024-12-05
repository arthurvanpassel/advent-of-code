let lines = document.querySelector('pre').innerText.split("\n")
let result = 0
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  for (let j = 0; j < line.length; j++) {
    const char = line[j];
    if (char === "*") {
      let numbers = []
      let total_numbers = []
      for (let k = -1; k < 2; k++) {
        for (let l = -1; l < 2; l++) {
          const new_char = lines[i + k][j + l]
          if (new_char !== undefined && !isNaN(Number(new_char))) {
            let number = Number(new_char)
            if (lines[i + k][j + l + 1] !== undefined && !isNaN(Number(lines[i + k][j + l + 1]))) {
              if (lines[i + k][j + l - 1] !== undefined && !isNaN(Number(lines[i + k][j + l - 1]))) {
                number = Number(lines[i + k][j + l - 1] + new_char + lines[i + k][j + l + 1])
                l = l + 1
              } else if (lines[i + k][j + l + 2] !== undefined && !isNaN(Number(lines[i + k][j + l + 2]))) {
                number = Number(new_char + lines[i + k][j + l + 1] + lines[i + k][j + l + 2])
                l = l + 2
              } else {
                number = Number(new_char + lines[i + k][j + l + 1])
                l = l + 1
              }
            } else if (lines[i + k][j + l - 1] !== undefined && !isNaN(Number(lines[i + k][j + l - 1]))) {
              if (lines[i + k][j + l - 2] !== undefined && !isNaN(Number(lines[i + k][j + l - 2]))) {
                number = Number(lines[i + k][j + l - 2] + lines[i + k][j + l - 1] + new_char)
              } else {
                number = Number(lines[i + k][j + l - 1] + new_char)
              }
            }
            
            numbers.push(number)
            // debugger
          }
        }
        total_numbers.push(numbers)
      }

      console.log(numbers)
      if (numbers.length === 2) {
        result += numbers[0] * numbers[1]
      }
    }
  }

}
console.log(result)