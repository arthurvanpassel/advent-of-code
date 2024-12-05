
let lines = document.querySelector('pre').innerText.split("\n")
// lines = "Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53\nCard 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19\nCard 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1\nCard 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83\nCard 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36\nCard 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11\n".split("\n")
let result = 0
let arr = Array(lines.length - 1).fill(1)
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  let score = 0
  if (line !== "") {
    let [my_numbers, winning_numbers] = line.split(": ")[1].replaceAll('  ', ' ').split(" | ")
    my_numbers = my_numbers.split(' ')
    winning_numbers = winning_numbers.split(' ')
    winning_numbers.forEach(winning_number => {
      my_numbers.forEach(my_number => {
        if (my_number === winning_number) {
          score++;
        }
      });
    });

    console.log(i, score)
    if (score>0) {
      for (let j = 1; j <= score; j++) {
        arr[i + j] += arr[i]
      }
    }
  };
}
result = arr.reduce((partialSum, a) => partialSum + a, 0);
console.log(arr)
console.log(result)