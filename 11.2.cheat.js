function blink(stone) {
  if (stone === 0) return [1];

  const stoneAsString = stone.toString();
  if (stoneAsString.length % 2 === 1) return [stone * 2024];

  return [
    Number(stoneAsString.substring(0, stoneAsString.length / 2)),
    Number(stoneAsString.substring(stoneAsString.length / 2)),
  ];
}

function processStones(stones, index, numberOfBlinks, cache) {
  let count = 0;

  if (index === numberOfBlinks) return stones.length;

  for (const stone of stones) {
    if (cache.has(`${stone}|${index}`)) {
      count += cache.get(`${stone}|${index}`);
      continue;
    }

    const newStones = blink(stone);
    const numberOfStones = processStones(
      newStones,
      index + 1,
      numberOfBlinks,
      cache
    );
    cache.set(`${stone}|${index}`, numberOfStones);
    count += numberOfStones;
  }

  return count;
}

/* ========================================================================== */

function countStonesAfterBlinking(stones, numberOfBlinks) {
  let count = 0;
  const cache = new Map();

  for (let stone = 0; stone < stones.length; stone++) {
    count += processStones([stones[stone]], 0, numberOfBlinks, cache);
  }

  return count;
}

input = "7568 155731 0 972 1 6919238 80646 22"

const stones = input.split(" ").map(Number);

console.log(countStonesAfterBlinking(stones, 75));
