const max_green = 13
const max_red = 12
const max_blue = 14

let lines = document.querySelector('pre').innerText.split("\n")
let result = 0
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  if (line !== "") {
    console.log(line)
    const game_id = i + 1
    const turns = line.split(": ")[1].split(";")
    let fail = false
    for (const turn of turns) {
      const color_amounts = turn.split(', ')
      for (const color_amount of color_amounts) {
        if (color_amount.includes('green') && Number(color_amount.replace(' green', '')) > 13) {
          fail = true
          break
        }
        if (color_amount.includes('red') && Number(color_amount.replace(' red', '')) > 12) {
          fail = true
          break
        }
        if (color_amount.includes('blue') && Number(color_amount.replace(' blue', '')) > 14) {
          fail = true
          break
        }
      }
      if (fail) {
        break;
      }
    }
    console.log(fail)
    if (!fail) {
      console.log(game_id)
      result += game_id
    }
  }
};
console.log(result)