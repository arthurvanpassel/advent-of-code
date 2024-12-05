let lines = document.querySelector('pre').innerText.split("\n\n")
// lines = "seeds: 79 14 55 13\n\nseed-to-soil map:\n50 98 2\n52 50 48\n\nsoil-to-fertilizer map:\n0 15 37\n37 52 2\n39 0 15\n\nfertilizer-to-water map:\n49 53 8\n0 11 42\n42 0 7\n57 7 4\n\nwater-to-light map:\n88 18 7\n18 25 70\n\nlight-to-temperature map:\n45 77 23\n81 45 19\n68 64 13\n\ntemperature-to-humidity map:\n0 69 1\n1 0 69\n\nhumidity-to-location map:\n60 56 37\n56 93 4\n".split("\n\n")
let seeds = lines[0].split(': ')[1].split(" ").map((str) => parseInt(str))
console.log(seeds)
number_not_found = true
let loc_number = 0;
let lowest_location = -1
while (number_not_found) {
  let data = {
    location: loc_number
  };
  for (let i = lines.length - 1; i > 0; i--) {
    let [category, table] = lines[i].split(' map:\n')
    const [srcLabel, , destLabel] = category.split('-')
    let arr = table.split("\n")
    for (let j = 0; j < arr.length; j++) {
      const element = arr[j];
      const [dest, src, rng] = element.split(' ').map((str) => parseInt(str))
      if (data[destLabel] >= dest && data[destLabel] < dest + rng) {
        let diff = Number(src) - Number(dest)
        data[srcLabel] = data[destLabel] + diff
        break
      } else if (!arr[j + 1]) {
        data[srcLabel] = data[destLabel]
        break
      }      
    }
  }
  console.log(loc_number)
  for (let i = 0; i < seeds.length; i++) {
    if (data['seed'] >= seeds[i] && data['seed'] < seeds[i] + seeds[i+1]) {
      number_not_found = false
      lowest_location = data['location']
      console.log(seeds[i], seeds, data)
      break
    }
    i++
  }
  loc_number++;
}

let result = lowest_location
console.log(result)