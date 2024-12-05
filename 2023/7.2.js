let text = document.querySelector('pre').innerText
// text = "32T3K 765\nT55J5 684\nKK677 28\nKTJJT 220\nQQQJA 483\n"
let hands = text.split('\n')
hands.pop()
const cards = ['A', 'K', 'Q', 'T', '9', '8', '7', '6', '5', '4', '3', '2', 'J']
const cards_alph = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm']
let bids = []
let result = 0
for (let i = 0; i < hands.length; i++) {
  const [hand, bid] = hands[i].split(' ');
  let highest_count = 0
  let second_highest_count = 0
  for (let j = 0; j < cards.length; j++) {
    const card = cards[j];
    if (card !== 'J') {
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
    }
  }

  if (hand.includes('J')) {
    highest_count
    let amount = 5 - hand.replaceAll("J", '').length
    highest_count += amount
  }

  let score = '7'
  if (highest_count === 5) {
    score = '1'
  }
  else if (highest_count === 4) {
    score = '2'
  }
  else if (highest_count === 3 && second_highest_count === 2) {
    score = '3'
  }
  else if (highest_count === 3) {
    score = '4'
  }
  else if (highest_count === 2 && second_highest_count === 2) {
    score = '5'
  }
  else if (highest_count === 2) {
    score = '6'
  }

  let str = ""
  for (let j = 0; j < hand.length; j++) {
    let pos = cards.indexOf(hand[j])
    str += cards_alph[pos]
  }
  score += str
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
  if (a.score < b.score) {
    return 1;
  }
  if (a.score > b.score) {
    return -1;
  }
  return 0;
});
console.log(bids, bids.map((e) => e.score))

for (let i = 0; i < sorted_bids.length; i++) {
  console.log((i+1), sorted_bids[i], (i+1) * sorted_bids[i].bid)
  result += (i + 1) * sorted_bids[i].bid
}

console.log(result)