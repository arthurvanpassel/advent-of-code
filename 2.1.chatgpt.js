function isSafe(report) {
  if (report.length < 2) return true;
  
  let diff = report[1] - report[0];
  let isIncreasing = diff > 0;
  
  for (let i = 1; i < report.length; i++) {
      let currentDiff = report[i] - report[i-1];
      
      // Check if direction changes or difference is not between 1 and 3
      if ((isIncreasing && currentDiff <= 0) || (!isIncreasing && currentDiff >= 0) ||
          Math.abs(currentDiff) < 1 || Math.abs(currentDiff) > 3) {
          return false;
      }
  }
  
  return true;
}

function countSafeReports(reports) {
  return reports.filter(isSafe).length;
}

// The example data
let reports = [
  [7, 6, 4, 2, 1],
  [1, 2, 7, 8, 9],
  [9, 7, 6, 2, 1],
  [1, 3, 2, 4, 5],
  [8, 6, 4, 4, 1],
  [1, 3, 6, 7, 9]
];
let lines = document.querySelector("pre").innerText.split("\n");
lines.pop();
reports = lines.map(numbers => numbers.split(" ").map(number => +number))
console.log(reports)

let safeCount = countSafeReports(reports);
console.log(`Number of safe reports: ${safeCount}`);