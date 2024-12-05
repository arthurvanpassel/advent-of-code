let lines = document.querySelector('pre').innerText.split("\n\n")
// lines = "seeds: 79 14 55 13\n\nseed-to-soil map:\n50 98 2\n52 50 48\n\nsoil-to-fertilizer map:\n0 15 37\n37 52 2\n39 0 15\n\nfertilizer-to-water map:\n49 53 8\n0 11 42\n42 0 7\n57 7 4\n\nwater-to-light map:\n88 18 7\n18 25 70\n\nlight-to-temperature map:\n45 77 23\n81 45 19\n68 64 13\n\ntemperature-to-humidity map:\n0 69 1\n1 0 69\n\nhumidity-to-location map:\n60 56 37\n56 93 4\n".split("\n\n")
let seeds = lines[0].split(': ')[1].split(" ")
console.log(seeds)
let data = []
for (let i = 1; i < lines.length; i++) {
  let [category, table] = lines[i].split(' map:\n')
  const [srcLabel, , destLabel] = category.split('-')
  seeds.forEach((seed, index) => {
    if (!data[index]){
      data[index] = {
        seed: Number(seed)
      };
    }
    table.split("\n").forEach((element, j, arr) => {
      const [dest, src, rng] = element.split(' ').map((str) => parseInt(str))
      if (!data[index][destLabel] && (data[index][srcLabel] >= src && data[index][srcLabel] < src + rng)) {
        let diff = Number(src) - Number(dest)
        data[index][destLabel] = data[index][srcLabel] - diff
      } else if (!data[index][destLabel] && !arr[j + 1]) {
        data[index][destLabel] = data[index][srcLabel]
      }
    });

  })
}
let lowest_location = -1
data.forEach(element => {
  if (lowest_location === -1 || lowest_location > element['location']) lowest_location = element['location']
});

let result = lowest_location
console.log(result)