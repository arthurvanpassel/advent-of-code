let lines = document.querySelector('pre').innerText.split("\n")
let result = 0
for (const element of lines) {
  const line = element;
  let green = 0, red = 0, blue = 0
  if (line !== "") {
    console.log(line)
    const turns = line.split(": ")[1].split(";")
    for (const turn of turns) {
      const color_amounts = turn.split(', ')
      for (const color_amount of color_amounts) {
        if (color_amount.includes('green') && Number(color_amount.replace(' green', '')) > green) {
          green = Number(color_amount.replace(' green', ''))
        }
        if (color_amount.includes('red') && Number(color_amount.replace(' red', '')) > red) {
          red = Number(color_amount.replace(' red', ''))
        }
        if (color_amount.includes('blue') && Number(color_amount.replace(' blue', '')) > blue) {
          blue = Number(color_amount.replace(' blue', ''))
        }
      }
    }
    console.log(green, red, blue)
    result += green * red * blue
  }
};
console.log(result)