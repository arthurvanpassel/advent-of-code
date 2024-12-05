let lines = document.querySelector('pre').innerText.split("\n")
let result = 0
for (const element of lines) {
  const line = element;
  let score = -1
  if (line !== "") {
    let [my_numbers, winning_numbers] = line.split(": ")[1].replaceAll('  ', ' ').split(" | ")
    let my_winners = []
    my_numbers = my_numbers.split(' ')
    winning_numbers = winning_numbers.split(' ')
    winning_numbers.forEach(winning_number => {
      my_numbers.forEach(my_number => {
        if (my_number === winning_number) {
          score++;
          my_winners.push(my_number)
        }
      });
    });

    console.log(score, my_winners)
    if (score>=0) {
      result += Math.pow(2, score)
    }
  };
}
console.log(result)