let text = document.querySelector('pre').innerText
// text = "Time:      7  15   30\nDistance:  9  40  200\n"
let [timeString, distString,] = text.replace(/  +/g, ' ').split('\n')
let [,time] = timeString.split(": ")
time = parseInt(time.replaceAll(" ", ''))
let [,distance] = distString.split(": ")
distance = parseInt(distance.replaceAll(" ", ''))

let count = 0
for (let j = 0; j <= time; j++) {
  let dist = (time - j) * j
  // console.log(time, j, dist)
  if (dist >= distance) {
    count++
  }
}
result = count

console.log(result)