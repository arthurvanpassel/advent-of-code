let text = document.querySelector('pre').innerText
// text = "Time:      7  15   30\nDistance:  9  40  200\n"
let [timeString, distString,] = text.replace(/  +/g, ' ').split('\n')
let [,times] = timeString.split(": ")
times = times.split(' ').map((str) => parseInt(str))
let [,distances] = distString.split(": ")
distances = distances.split(' ').map((str) => parseInt(str))


let result = 1

for (let i = 0; i < times.length; i++) {
  let count = 0
  for (let j = 0; j <= times[i]; j++) {
    let dist = (times[i] - j) * j
    console.log(times[i], j, dist)
    if (dist > distances[i]) {
      count++
    }
  }
  result *= count
}

console.log(result)