let input = `###############
#.......#....E#
#.#.###.#.###.#
#.....#.#...#.#
#.###.#####.#.#
#.#.#.......#.#
#.#.#####.###.#
#...........#.#
###.#.#####.#.#
#...#.....#.#.#
#.#.#.###.#.#.#
#.....#...#.#.#
#.###.#.#.#.#.#
#S..#.....#...#
###############`;

let walls = [];
let start = "";
let end = "";
input.split("\n").forEach((row, r) => {
  row.split("").forEach((col, c) => {
    switch (col) {
      case "#":
        walls.push(`${r},${c}`);
        break;
      case "S":
        start = `${r},${c}`;
        break;
      case "E":
        end = `${r},${c}`;
        break;
      default:
        break;
    }
  });
});

let end_scores = [];
let end_paths = []

const nextMove = (pos, dir, score, moves) => {
  const [r, c] = pos.split(",").map((item) => +item);
  if (pos === end) {
    end_scores.push(score);
    end_paths.push(moves)
  } else {
    [[[0,-1], "W"], [[0,1], 'E'],[[-1,0], 'N'],[[1,0], 'S']].forEach(([[r_diff, c_diff], new_dir]) => {
      const new_pos = `${r + r_diff},${c + c_diff}`;
      if (!walls.includes(new_pos) && !moves.includes(new_pos)) {
        let new_score = score
        let new_moves = moves
        if (dir == new_dir) new_score++;
        else new_score += 1001;
        new_moves.push(pos)
        nextMove(new_pos, new_dir, new_score, new_moves)
      }
    })
  }
};

nextMove(start, "E", 0, []);

console.log(end_scores, end_paths);
