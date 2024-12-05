let text = document.querySelector('pre').innerText
// text = "32T3K 765\nT55J5 684\nKK677 28\nKTJJT 220\nQQQJA 483\n"
let hands = text.split('\n')
const factor = 10
hands.pop()
const cards = ['A', 'K', 'Q', 'J', 'T', '9', '8', '7', '6', '5', '4', '3', '2']
let bids = []
let result = 0
for (let i = 0; i < hands.length; i++) {
  const [hand, bid] = hands[i].split(' ');
  let highest_count = 0
  let second_highest_count = 0
  for (let j = 0; j < cards.length; j++) {
    const card = cards[j];
    // let amount = (hand.match(new RegExp(card, "g")) || []).length
    // let amount = (hand.split(card).length - 1)
    let amount = 5 - hand.replaceAll(card, '').length

    if (amount > second_highest_count) {
      if (amount > highest_count) {
        second_highest_count = highest_count
        highest_count = amount;
      }
      else {
        second_highest_count = amount;
      }
    }
    console.log(hand, card, amount, highest_count, second_highest_count)
  }
  let score = 0
  for (let j = 0; j < hand.length; j++) {
    const card = hand[j];
    const pos = (13 - cards.indexOf(card)) * Math.pow(10, factor)
    const bot = 13 * (Math.pow(10, j))
    score += pos / bot
  }

  score += 1 * Math.pow(10, factor)
  if (highest_count === 5) {
    score += 7 * Math.pow(10, factor)
  }
  else if (highest_count === 4) {
    score += 6 * Math.pow(10, factor)
  }
  else if (highest_count === 3 && second_highest_count === 2) {
    score += 5 * Math.pow(10, factor)
  }
  else if (highest_count === 3) {
    score += 4 * Math.pow(10, factor)
  }
  else if (highest_count === 2 && second_highest_count === 2) {
    score += 3 * Math.pow(10, factor)
  }
  else if (highest_count === 2) {
    score += 2 * Math.pow(10, factor)
  }
  bids.push({
    i,
    highest_count,
    second_highest_count,
    hand,
    bid,
    score,
  })
}

const sorted_bids = bids.sort(function (a, b) {
  return a.score - b.score;
});
console.log(bids, bids.map((e) => e.score))

for (let i = 0; i < sorted_bids.length; i++) {
  // console.log((i+1), sorted_bids[i], (i+1) * sorted_bids[i].bid)
  result += (i + 1) * sorted_bids[i].bid
}

console.log(result)