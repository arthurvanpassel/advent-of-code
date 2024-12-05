let text = document.querySelector('pre').innerText
// text = "LLR\n\nAAA = (BBB, BBB)\nBBB = (AAA, ZZZ)\nZZZ = (ZZZ, ZZZ)\n"
// text = "RL\n\nAAA = (BBB, CCC)\nBBB = (DDD, EEE)\nCCC = (ZZZ, GGG)\nDDD = (DDD, DDD)\nEEE = (EEE, EEE)\nGGG = (GGG, GGG)\nZZZ = (ZZZ, ZZZ)\n"
// text = "LR\n\n11A = (11B, XXX)\n11B = (XXX, 11Z)\n11Z = (11B, XXX)\n22A = (22B, XXX)\n22B = (22C, 22C)\n22C = (22Z, 22Z)\n22Z = (22B, 22B)\nXXX = (XXX, XXX)\n"
let result = 0
let [moves, input] = text.split('\n\n')
console.log(moves, input)
let steps = input.split('\n')
steps.pop()
let key_array = []
let left_array = []
let right_array = []
let start_array = []
for (let i = 0; i < steps.length; i++) {
  const [key, value] = steps[i].split(" = ");
  const [left, right] = value.slice(1, -1).split(", ")
  if (key[2] == "A") start_array.push(key)
  key_array.push(key)
  left_array.push(left)
  right_array.push(right)
}
console.log(start_array)
debugger
let count = 0
for (let i = 0; i < moves.length; i++) {
  let next_array = []
  let finished = true
  for (let j = 0; j < start_array.length; j++) {
    let next_move = start_array[j];
    let move = moves[i]  
    let next_move_key = key_array.indexOf(next_move)
    next_move = right_array[next_move_key]
    if (move == "L") next_move = left_array[next_move_key]
    next_array.push(next_move)
    if (next_move[2] !== "Z") {
      finished = false
    }
  }
  count++
  start_array = next_array
  if (finished) {
    break
  }
  if (i === moves.length - 1) {
    i = -1
  }
}
result = count
console.log(result)