function isSafe(report) {
  if (report.length < 2) return true;
  
  let isIncreasing = report[1] > report[0];
  
  for (let i = 1; i < report.length; i++) {
      let diff = report[i] - report[i-1];
      if ((isIncreasing && diff <= 0) || (!isIncreasing && diff >= 0) ||
          Math.abs(diff) < 1 || Math.abs(diff) > 3) {
          return false;
      }
  }
  
  return true;
}

function isRemovableSafe(report) {
  if (isSafe(report)) return true;
  
  for (let i = 0; i < report.length; i++) {
      let modifiedReport = [...report.slice(0, i), ...report.slice(i + 1)];
      if (isSafe(modifiedReport)) return true;
  }
  
  return false;
}

function countSafeReports(reports) {
  return reports.filter(isRemovableSafe).length;
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
reports = lines.map((numbers) => numbers.split(" ").map((number) => +number));

let safeCount = countSafeReports(reports);
console.log(`Number of safe reports with Problem Dampener: ${safeCount}`);