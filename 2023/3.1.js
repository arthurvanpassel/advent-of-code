let lines = document.querySelector('pre').innerText.split("\n")
let result = 0
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  for (let j = 0; j < line.length; j++) {
    const char = line[j];
    if (!isNaN(Number(char))) {
      let part = false
      let number = Number(char)
      let first_checks = [
        lines[i - 1]?.[j - 1],
        lines[i - 1]?.[j],
        lines[i - 1]?.[j + 1],
        lines[i][j - 1],
        lines[i][j + 1],
        lines[i + 1]?.[j - 1],
        lines[i + 1]?.[j],
        lines[i + 1]?.[j + 1]
      ]
      for (const element of first_checks) {
        if (element !== undefined && isNaN(Number(element)) && element !== ".") {
          part = true
          break
        }
      }

      let second_checks = []
      if (line[j+1] !== undefined && !isNaN(Number(line[j + 1]))) {
        if (line[j+2] !== undefined && !isNaN(Number(line[j + 2]))) {
          number = Number(char + line[j + 1] + line[j + 2])
          if (!part) {
            second_checks = [
              lines[i - 1]?.[j + 2],
              lines[i + 1]?.[j + 2],
              lines[i - 1]?.[j + 3],
              lines[i]?.[j + 3],
              lines[i + 1]?.[j + 3],
            ]
          }
          j = j + 2
        } else {
          number = Number(char + line[j + 1])
          if (!part) {
            second_checks = [
              lines[i - 1]?.[j + 2],
              lines[i + 1]?.[j + 2],
              lines[i]?.[j + 2],
            ]
          }
          j = j + 1
        }
      }

      if (!part) {
        for (const element of second_checks) {
          if (element !== undefined && isNaN(Number(element)) && element !== ".") {
            part = true
            break
          }
        }
      }
      console.log(number, part, result)
      if (part) {
        result += number
      }
    }
  }

}
console.log(result)