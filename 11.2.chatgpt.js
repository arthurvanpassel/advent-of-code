function calculateFinalLength(input, iterations) {
  let numbers = input.split(' ').map(Number);
  let finalLength = 0;

  for (let num of numbers) {
      let currentLength = 1;
      for (let i = 0; i < iterations; i++) {
          if (num === 0) {
              num = 1;
          } else {
              let digits = Math.floor(Math.log10(num)) + 1;
              if (digits % 2 === 0) {
                  currentLength *= 2;
                  num = Math.floor(num / Math.pow(10, digits / 2));
              } else {
                  num *= 2024;
              }
          }
      }
      finalLength += currentLength;
  }

  return finalLength;
}

let input = "7568 155731 0 972 1 6919238 80646 22";
console.log(calculateFinalLength(input, 75));