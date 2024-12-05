let text = document.querySelector('pre').innerText
// text = "LLR\n\nAAA = (BBB, BBB)\nBBB = (AAA, ZZZ)\nZZZ = (ZZZ, ZZZ)\n"
// text = "RL\n\nAAA = (BBB, CCC)\nBBB = (DDD, EEE)\nCCC = (ZZZ, GGG)\nDDD = (DDD, DDD)\nEEE = (EEE, EEE)\nGGG = (GGG, GGG)\nZZZ = (ZZZ, ZZZ)\n"
let result = 0
let [moves, input] = text.split('\n\n')
console.log(moves, input)
let steps = input.split('\n')
steps.pop()
let key_array = []
let left_array = []
let right_array = []
for (let i = 0; i < steps.length; i++) {
  const [key, value] = steps[i].split(" = ");
  const [left, right] = value.slice(1, -1).split(", ")
  key_array.push(key)
  left_array.push(left)
  right_array.push(right)
}

let next_move = "AAA"
let count = 0
for (let i = 0; i < moves.length; i++) {
  let move = moves[i]  
  let next_move_key = key_array.indexOf(next_move)
  next_move = right_array[next_move_key]
  if (move == "L") next_move = left_array[next_move_key]
  count++
  if (next_move == "ZZZ") {
    break
  }
  if (i === moves.length - 1) {
    i = -1
  }
}
result = count
console.log(result)