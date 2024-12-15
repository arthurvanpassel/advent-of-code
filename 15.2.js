let input = `#######
#...#.#
#.....#
#..OO@#
#..O..#
#.....#
#######

<vv<<^^<<^^`;

// input = `##################################################
// #.O.......O.....#..OOO..O...O#.##.#.O...O...O....#
// ##....##........O#...O#OOOO.O..O.....O.OO..O#.OOO#
// #.....O..O.O.....O......O...OOO....OO...O..#.#...#
// #.O#O.OO.O..#.#......O..OO......#....O#O........O#
// #.OOO.OO...O#......O.OOO.OO....O.....O...........#
// #..#.....OO..O.OOO.......OO#....OOO#O#.O#O.O..O..#
// ##..O..O#.......O.O.O#OO...OO..OO.OO.O.#O....O...#
// #...O...O...O.O..O............O.O#..O.O..OOO.....#
// #......O.O#...OOO......O....O#.........#OO.O.#O..#
// #.O....O....OOO#.#O#O#.........#O..OOO.O....OO.#O#
// #..O.OO.#OO.O#O....O.O.O..O.OOOO.OO..O#O.#OO.OO.O#
// #.O.....O.OO.OO...#.O...O..O..O...OO...O.O....O..#
// #.#OOO...O......O.......O....O#...O..OO.O..O..O..#
// ##..O....#.##OOO......#OO..O.O..OO#...O..OO##O#.##
// #O.OO.#...O#O..O.#.OO..O..###..#.O....OO......O..#
// #.O.O...OO..O.O#O.OO..O...O..#O.....O..#.O.......#
// #.O...#.O..O.O.O..OO.#.O.OO......#.OOO..O..#...#.#
// #..OOO.O..O..OOOO.O.#.....O#...#O......O..O..O..##
// #..O.....O#..OOO.O.......#..#.O.#..OOO..O........#
// ###O#.......#.......#O#.#OO.O...O..........O.....#
// ##...O..O.....O..OO.##....O.OO..#.O#.O..#..O.....#
// ##.O..O.#......O.O.OOO.........#..O...O.#O.O..O.O#
// #.O.O#..#.O......#.O..#O...O...O..#.O...#.O.O#..O#
// #.#O.OOO###.........OO#.@....O...O.O...#O..#OO.O.#
// ##.O.............###...O..O.#....O..O......OO....#
// #.O.O...O...O.#........OO..OOO..OOOO....O.O......#
// #..O.OO.O#.....O.OO..O.OO...OO......#O..O.O....###
// ###.O.O.......#...OO.OO......#.OO.O...O...#.....O#
// #O..O.O.......O......O...O..O.#....O...#O#......O#
// #....O.....O#O.#O...O........OOO.#.OO......OOO#..#
// #...O....O...#..OO..OO...O..O....O....#O.#......##
// #.#....O....##..O..#.#......O......O..O..O.OO#O#.#
// #..O......O.O.O#O....#O..O#OO...O................#
// #.O#..O........OO#O.O#.OO........#....O.O........#
// #O...#.......O##OO..O......#O.#OO.#O.#O#OO..OO..O#
// #O......O#.O.O.....#....OO....#........O..#...#..#
// #O#...##OO.O.O..OO.....OOO....O.O......OO.....OO.#
// ##.....O..O.O.....#O...#.#...OOO#....OO.O..OO..#.#
// #O...O...#OOO..O....#.#..O.O...#O.........OOOO.#O#
// #.#OOO..OO.O.......O.O...OO.O....O#..#..........O#
// #......O.......##..O...O#O..O...O#..O.O..#...OO..#
// #O..O..OO......OO....####......O....O..OOO....O.O#
// #O.......O..O..O...O...O.O#......O..........#...##
// #..#......O.##.O..O.O.OO..O...........O.......O..#
// #........#..#..##O.....OO.....#.#.O..O....O.O....#
// #.....#.......O.....O...#O.O....O...O.........#..#
// ##O#O........#.......OO..O...#OO.O....#.......O..#
// #...#...O..#O.O.....O...OO...OO..O....#O.O#.O..O.#
// ##################################################

// <>>^>vv^^<v^>^>^v>>>^<vvv>^><<<<v>vv^>>v><^v>><vv>v>v>>^^><>^^^^^^<<<^>v<<><>^<<v^>v>><^^<vv^>^v>^>><>^v>^>>^><^^v><v<v<^>v^<>vv>v^v^^^>>vvv<^v>v^<^v><^v>^>^vv>>>vvvv>^<v^vv^v^>^>v>v^>^v<v>^<><><<<>v>><<>>>^v>>><v<>>>^<^>^<<><v^<v>vv>v^<^v^v^<<^^^>^><v<<<^^<v>^^^^>^>v^^^><^<v>^>^>>vv>>^v>>><>v>^<>^^v^<v>^><>^^>v^^<>>><vv^>^v<<<>^<^^<^v^<^^<v>>><v>>^^<^v<^^>v<>v<^v>>>v>><<v^>^<>>>^<v>>>^^v<v<>>^<<v^vv>^>v<v><v^<v><<<<v<^v^>v^<^v>vv^<><<<^><v>>v><^^>v<<vv^^^vvv<<<>>^^<>>>^>^^<><>>vv>v^>v^^>>^>^<<^>^>v>^<>>^^<><v^v<vv^>v<v<<<^>>v^<^^<>v>><<<^>^^<^v>^v^^vvv<^>^>>v<<<^>v><vv<^^<v^><>>>^^v><^v<vv<^>>>v<<v<vv^vvv^><<^<v<<<^<vvvv>v^v>^^v><>^>vv<>>v<vv^>><v>>v^><><^v^^<<^vvv>^><<><>>>^<<^<^<<^<>>^>>v>vvv>v^>>v<^v^<<^>^>^<^<>>^^><<v<<^^<<>v<><>><><>><>v<^^v>^^v>v><v>v^^v<>v>v<<^v<v><v<<<>v><v<vv>>^><><^v>>v>vv<<>^^^^^^^v^>>>>^<^^>>^^<^^>>^>v^<>^vv^<^>>^>v><^^<>vv<><v^v<>^^^^^>^>>v^>>>>^vv>>^>^<<<<>^><v>v^^vv<<<<^vvv^<^^>vv>v>v^v^<v>^v>^v^>>vv<>^<^v><><vv>v<><v>^v^<>v<<^>v><<>vv<>v>>>v><<^^<^v>^>
// <v^>>^>>^v^^v^>v<v>^v><v>>^^vv^>>v^v^><<^v^^<<^>^v<^>>^<^^>><<^<^^^vv^<^>vv<v<^^<^v^<^>vv>><>^^^<v<vv<^^v^^<^vv><^v^<><vv>v><^<^^>><^v>^v<<>>>v<^^v>vvvv^v^v<>^<^^v<v<<<^>>^v<>>>>v<v^<>>^v^v^^^^^><<^v^>^<v><>>>v>>v><v<>^^v<<>v<<<<vv^^<v^<^^v^<><^v<v^>v>^^<<^v>^^><^><^^^v^^<>>><v^<<>vv^v^<<>v>^vv><vv>^v>v>>>>v<<v>>^^<^>>^vv>v<<<><><<^<<v<<<<v<>^^<v<<^^^^^v>v<^^v>>v<<v^v>>^v<<vv><><<>v<<><^<v^><vv^<>v<><v<vvv<>^v>^^^>v>^<>^^>vv^>^v>v<>^vvv><>^><<<<^^<^^^<>^>^^^^<>vv>>^<^>^vv^^^v<<^<^<^vv<vv^^^^^<^<^>^>^v^^^<^>v><>>>>^v<>v^v<<<<>v>^^<^v<v><^<>v<^<<>>^>^<<vvvv<<^v<^v>^v^<<^><<>vv>><^<^^vv<^>>^^><<<>v^^^vvv^<>^<^^^>v>^><v^>><<>>><v>v<^^^<<vvvvvv^vv<>><v><vv^>>>>^v<v><v<>v>^><<<<^>><v>^v^>v<>^><v><^^<>>><^^<<<<vv<^>>>^v<v^^v^v<v<><<v^<<v^<v^<^<^<vv>^v^v>><v>><v^vv<<v^^><><<v^v<^<v><<>><^<<><v<v>v<v<v^>v^^^>^^^^v>^>><^^<vv^<>v>vv^^<v^v<v<vv>><>^<^>v^v^^>^<^>><vvvv><<v^^^^<v<<v^^^^v<>>v<^<^>><<<<vv>^^>>vv^<>^>^><<v><<<^<<v^>^><<<<>><><v<^v^<^^<v<v<>vv><^<^^v><v<^v>^^^v>^>^<<^<vv>>><v^vv<^>>^^<<
// <v<v>><v^vv^v<>^^v<^^<<v^^v<>>vv>^>^^>>v<v^<v<^v<v^v>>>^^<>^>^<<v^^<>vv<vv><^<<^vv>v^v^^<><vvv<^^v>^v<<><>^>>^>^>^v><<v<vv<v><<vv>^^<^<v^v^<vv^vv<v<^^^^<v<<^<<>>>><<<v<vv<<^<v^>v<>^vv>v><<<>vv^>^v<<><>>^>vvv<^v>vv^>><v>^^><^^v<>v<^<v<^vv^<^vv>>><v^v^>^vvvvv^v^^<^><^vv><>v>v<<v<^v<vvvvvv^vvv>>vvv^^<v>><<<><v>^^v<<>>vv<^>v>>vv>>><<>^<<<<^><>v><<>v><>v^>^^><<>><vvv<v>vv^><<>^^>^<^<v>^>v<^<<>v<>vvv<<<<>^vv><>^^^>v><v>^v^<^<^>^><v^<v<^>^>><v<v<v^<v<v><<v>vv^<vv>^<^<<><<vv>vv<<<<vv<v<^^><^vv^^^vv^^>^^>^<>^vv^<<v>v<^><v<v^vv^<^<v>v><<<><^>^<><<^<<<v<><^^^^vv>v<v<>vv^^>><>><vv^^v>v<vv<^<>v>v<v<^>^v>>^<<>^<>v><^v^>v>>>^v<v>vv>^^^<^^<^>^<<<^^>v><v<v>>><<<<^<vv<v<>v><v^^v<^vv>^v<><^v<<<^>^vv^^>^^^>vvv^>>^<^^>v<<<^<<^^<<^>>>^<><><<<<><^^^<<<>>>^>v^>>v^<<<v>v>>^><>>>^^><<<<v^>vvv<>v<v^><<<<<><vv^v<v^v^^>>>>v^v^><^><<^<>v><<>>><^<vvvv^<^^v^>><v^v><^<<<>vv^<^^>>>^><^><<<v<^vvv^vv<>v><>><vv>^<^>^<^^^v<>^<v>^<>v<>>^<^^v>vv^vv^^>^><><^v>^<^^><v^<^><v<^<>><^v>^<>^v<<<<<^<<<>^<^<v^<^^v<<vv<v<<<>^v^v>^vv^^
// v^v<>><<^v><<<>^<^^><<^>>v^v<^v^><<<v>^vv<v>vv>^<v<<v<^>>>^^v^v^<<v<>v>vvv>>^^^<>^<v^vv^vv^vv>>>>v>>v^^v>vvv>^v^^^>^>>^<<<>^<<^<v^>v<><v<^><>^v<^<v^v><v^<^^><^vv^<^v^<^><><^<><>v<^<>>v^><<v<>^vv<>^>>^^<><<v^^<>^<v<v<^>><^vv<<<v<v>^<<>v<^^>>vv<v^^^vv^^><>>^>v<^v><^^^<^vv^vv<<<^<<><^v<^vv^>>>>vv>^vv>>^>^^<^v^v<><v^>v>vv^v><^v>>v^^<^<>>v<<<vv<v^<<>v>><>>^v^<v<><^v^<><>>><v>>v>>vvv<>vv>^>^^>v<<vv><^v<<><v<^>^<v>>^<v<>>>^^<^v<^<<<^<v>v^vv<^<>v<v<^>v>^><^^v^>^^v<>v^><v<<>^^vvv<^^^^v^^v^>vv^><<^^vvvv^^^v<^>>><<v<<v>v><<<^^vvvv<>>vv^<^>v>^vvvv^v^<<^>v<^<^<v^>v^^vv^^<vvv^><v>><v<v^v><vvvvv<>^vv><^vv>>>v>vv>>>vv^^^>><<v>>v>><>v<><vvv><>^^v<<v>v^><^^^^v<<v<vv>><<^<^^v^<<^>^v^>^<><<v^v^^v>^><v^^v>v><^v^<<><>v<<v>v>^<vv<>>>v<^><^v<^^>^v>><vv>>v<<v><^>>^<^<^>>vvvv^<>vv^v^v>vvvv>v^>^vv^^<<><v^>vvv<>>vvv^vv^<^v<^>v<vv>^<<v><^vv^<<<^v<>v<^v<><<vv^<v>v^<><<^^^v<<<><v^<><v<>^^v>v^vv>v><v>>vv>>^v><^<v<v^<v<^><v^<>>>^>^>vv<v>v^vv^>vvvv>v^<>>>^>^vv>v^<><^>>>^^>><<<v<^^<<>>^>><^v>^<<>v^v^^>><^^v^<^<^<v^v<>v<
// ><^>^v>>^^v><>^>vvv<v^^^vv<<v^^^>v^v><v<v>^^vvv>>>v<>><v>^^<^^^vv>><>v>v^<v^vv^>^v>^v><vvvvvvv<<<<^v<^^^v^>^vvv^^>>v<^<vv^<<>^<v>>^<>^<>v^><><v><>vv>^v^^^<^>>>v<^<^<<<v<>>>^v<v^>v<v^^><><><v><^>>^><^v<^<v><>^><>^v<v<v^v<v^^>v^>^<^<>><v<v<^<^>vv<v^^^^<<>vv<^v^v<v>>^v<>><^<<^^^^<v^>^v>><^vv^>^<^^vv>^>^<v>>^<^><><v>v<vv^<^<^v>>^>><^<>><>^<^<^^>^<v^>^<<^v<>v<<<>^><^^>v>><^^<^^<v^vv<v<^<<^^<<<v^^<v>^^v<<^v<<<>^<>>v><v>^<v<>^>^vvv>><>^>v><^<v<><^v^v^^vv>>^<<^<^v<>^vvv>v<^vv<^^v<^v><>><<>>^>v<>v>>v^<><<>^<<^v<>^vv<><>^vvv>v<v<^>^>^vv>>^<>v><^^^^<>v<<vv<<^v<v<>>>v^><>><^<<>v<^v>^v<<^v>v^><>^>^vv>vv>>^v<<v^^^>^<<>>>>>^>vv><^v^<vvv><>v^>><v^^v^^<>v^^<<^^v^>>v^^>v^v<<<>^>><v>v><<v<^><>>v>^^vv^>>v^>v^vvv^^vv<><>>v^^^<<vv^vv^<<>vv<>>>>^v^v^v>>vv<<<>^>v<<>><><<vvv<^<>v>v^<v^^^^vvvvv>><^^>>><^>^vv><^<<vvv^<><^<><>v<vv>>>><>vv<<^>v><<v>^<>^^v>v>v><^^><v^^<>v<>^>^<>vv>>v<>v>^v>>>v<><>^<^v^^<>^>v>v^^>v<<>vv>^v>vv>^<>v>^v<>^><>v<>>><vv<^v<>v><><v<^^^>^^^^v<>vvv^<vv>>^^^>^<vvv>>v<<<<^^>vvvvvvv<v<<>^^<>>v<
// ><v<>><v>^v^^>><<>v<v>^<<vv<<vv<^>^<v^>v>v<vvv>^vv<<^><^>^v<v>vv><^>^>v^<^v^^>>v<<^<<v>>v>>v><><<^<^v<^^v<<<v^>>^<>^^^>>v<v^<^<^^^vvv>v><<^<v>^^>>>>>^><^^>v^<v^>v^^^^^>>>><vv^>v^<><^vv<^^^^^>>^<^^^<<^<v<^vv^<><>^><v>^v<v^vvvv<v<vv<v<v<>v>^^<^^>v<<>v><<>^<>>>>^v>vv^<^v^>v^^v^^v<^^<^^>>v<<<<^^^<v<^vv<^v<v<^>><<>^v^<^<<v>^><^^^v>>>><^<<v^^><^^><^v<^<>^v^<>>v<<v>><<^v<>^<^v^v^<^<><^<>>^>><>^><vv>v<>>>v^v>^>^><vvvvvvv><vv^v^<^>>^>vv^vv<v<<<>>^<^v>>>v<><v<v<>>v>vv<><><><v>^<<<^vv<vv><vv<^v<^>>>vv^v<vv<<<>><v>^><<^vv^^<>vv>^>vv<^v^v>^>^^<<<>^>v>>>^^^v><>^<>^>><vv^<<>^>^v<^>>><>>><^^^vvvv><vv<>>^v<<<^<vv<<^<<^v>^>><<^<v>^v>><><>^<<>v<><>>><vv<^v<v>>vvv><>^<<<^<^v<^^^>v>v>^v>>^<<vv<>>^>v^>>>v>>>^<<<^<v<^vv^>>^^v<^^^^<<>vv<<<v<<v^<>>>^v>><>v>>v^^^<vv>>><<<<<><v><>vv<><v>>v<^vv<>v<vv^v^vv^>>>v>v<<^<^>v<^^<^^vv><^^<<<v>^>^v<vv^>^^<<v^v^^>^^<^^v<^<^^<^>>^vvv>^^v<v>><>^>>^<>^>><<v>vv^<>vv<vv><v^<^vv^<>>v^<^v^<^<v<>>^<v>^v>v>>^>vv^v<<><v<v^<>>>>^^<v><><v>>v<>>>><><>^v^>>>v^<<^<^^vv><><<<^v^<<v>v><vv^
// vv><^v<^<v>vv<v<v<v<v>>^>^^v^<>vv^vvv<v^<<<><^<<^<>><<v<^>>><vv^^>v^<<^>vvvv<<^vv<^^>v>>>^^^>v<>^v<vv<>v<^^vv^^<>^v<>><vv>>vv<>v^<><vv<^^>v^^v><v<^vv>><v^^>>v<<>vv^<^vv^<v>v>vv<>^v<v><<^v^>^^>>v^v<v>>^^>^^>v^^vvv>>^<<vv>v<v><v<^>>^v^<>v<>^>^<<>^<vv^>^^v<<><<^<^<>v<><^^^<v<<<<vv^<>>^^<v<v>^<v<>vv<><v^<^>^>v<v<<v><v^^>v<^>^>>^>^<^^>v^v^v^>^<v^>v<>><<^^>>v>^v^<v<v^<>>>^vvvv^^>vv^v>v<v<<<^<>v^^>^vv<^v^v^><^>>>>>>v^v><>^>><v^^^<v^>>^>>>v^><<vv><<>>v>v<^>>v^<>^v>v^<vv^<v^^<>>v^v<^vv<^v<^v>>^v^<>v<v<<<>^<vv>^<<<<^^>^v^v>vvv^^>v>^>^<><><>^^^v^>v><<<>vv>v^v<v^v<<>v>vv<>>v<v><v<v^^><>>>>>>^>>>v<^>^v><<^vv<v<<^^v>v^v<^<<<^>><^v^v>>v><vv<>>v>>v>v>>^^^>^<^<^>^><<>^v<>^>vv^v^><v^<<v<v<<vv^>>vv><>><^vv>^^v>^v>^<^^><v^^<<<^<^>>^v^<v>v^<><vv<v<<vv>>>^<<^<<>><^<vv<><^>>v<>vv^v<^^<^^>>><^><<v^>v<>>^<^<^<^>>>^v^^<><<vv>v<>vv<><^v^v>><^^>vv^<^^^>^v^<^<vv<vv><v<>^>vv>^^<^>^<v>vv<^>v<>v<v^<^<vv<v<<<>^<<v^v<<<^>>^^<<v>>vvvv^^v<<>><v^^<vvvv>v<v<^>>>^><<^>><>v<^>>^v^<v<<v^^<^>>>^^v<v^>v^^v<v^vvv<vv>^<v><>>^<<><
// >^v<^<v^v>><>v^><^<v^><<v<><<><>v<^<<<<><vv>^^><><^<<v<>^<^>><^^<^^^v^<>><^^vvv>v>>>v^^<<^<<>^^^vvvv^^<v<v^v>>><^v<>v<^v><^<v^v<<>vv<>vv<<>^>v>v<>^vv<<<<<v<<<>^^>v<>>^<^>^<v<>vvv>>^>vv<v^v>^^vvv<v<^^>>>><>vvv><>>^><vvv>v><>^v>>^>v^v>^>>^v<><^^><v>^><>^<<<<^v>v^>^<^v>>^^^^>><><<>><^<^<><<^>>^^<>^v<>^><^^<<^>><v^vv<^<v^>^v<>>v^<^^v<>^><^v<vvv><>v>^<<<^<<<^^<v<vv><^v>v>^v>>>^v>><<>v>^>^<<^<<v^>v^><^<^v<^v<><<>>vv>^^>v>v<><<^v<>v<^^<v>v^vv<<vv<<<<v^<^>vvv<^v>^<>v^v>vv>vv^><<vv<<<^vv^v><><v<v><>^v>v^v>vv>>vv<<vv>^>^^^v>^vvv^v^v<<<v^^^v>>^<><><>v<v<<>^v><v>><>^>^<<v^v<v>>v<v>v^>v>>v^>^v^>><^vvv>><^v^<><<vvv^<^<>^<><><>v>v^^<vv^^^>^<<<v>^>^<<vv>>>^<<^^<>^v>^^vv><>^^<v>><>>><^v>>^><v>v<<^v^<^^<>^<v<v>vv^<v>^v^>v>><^^^vv><<>><>>>>><<><^^>v<<>>v<v<vvv^<>v>^>^vv^<^v<<vv^<<<^^>>><<^<>^><^vv>^>v>v>^v>>v^<>>v>^^v<v>^v>><>v>v<^><^>^v><>^>>v^>v^v<^^v^>>^<v>v^<<^v<v<>^v<<vvv<<v<v^><vv^<><<v><<<vv<v>>^>>^^>^<^<><>>^^v>>v>>v>^v^vv<><^>>^>>^^^>><v^v^<<>>>v^vv<<v^<v<>>><<<>v><^vv><v^<>^v<>v<vv<>>^>v^<>>^v<
// ^<vv<vv^^^v>>>v<v^>v^v<>>^>^>^>^^<<^^>v>vv<^<^>v>>^^<^^^^v<v^^<^v^^^v^>>^<<^<^vv>^vv<v^<vv^^><^^><vv^v>>>v^><<>^^v^>^>v>^^><<v>^<v>>^^^<<^vv>>^v>>v^v>>><^><v<^<^>>>^^^<^<v<v>^<v>^^>vvv^v>^v><vvv<>^<<^<v>vv>><^^^^>vv>><^v><<^^<^^><>><<>><><<^^>^^>^<^v^vv>^^v^^<<^^^>v>>v>>^vv<^<v>v<vv<<^>^^<^^<v^>>^^<>v^<^^>v>^<^><^v<>vv^>>^>>^v>>>^>^v>v>v<^>^><vv^<^>^<^v^v>vvv<^<>v<<><v^^vv^^<^<<vv^<^^^^>^>^^<><<>^v>vv>^^v^^^<>^^v<v<<>>v>^^>v<^vvvvv>v>vv^^>>^<v<<>v^><^^>>^>>^v^<<^^^vv>>><>v<><>^>^^<v<^>^<<^v^>>v<^^>v>^^^^><^^v><v><vv^<^<<v<>>vv<>vv^^<v>^>>^>^<<v<<^>v<v^v^^^<>>vv^>><>^v><>v>v<<v>^>v<<vv>>^<^<<^>v<>^^>^vvv>>vv^v<v>^^>^^><^><><<v<v>^^<<v<><<>v>^^vvvvv^v^<v>>v>>>>><><^^>>v>vv<v^<<>>>vv<^<v>^<>^vv^vv>^v<>^>^v<^>^vv>^><<>>^>v<^>><^v<^^^^^<><v>v><v<>^v>v>^^<^>v>^v>vv^>>v<vv><>^<vv>vv<v><<v>^v^>vv>v^<>v<v<v>>^<^vv<>^><>>vv>^<>vv^^>v><vv>^<><>^v^<<><<vv><vvvv^v<><>v^^<^vvv^^<^>^<^>^v^v><v<vv>vv^^^<^^v^^v>v^<^<v><>^<^<^^>v>^v>>v>>^v^^>v>v>^<v>^<^<>v<<<<<v^<^>^^vv^^vv><><>>>>><<^v>>v<<v<<vv^<v><vv
// <>v>>>vvv<v^<<>>^^^^v<^<<v<v^>^>^v>^>^^v><^><<^^<><<^v^v^vv<<<v^<vv><<^^^^>>^>^<vv^^v>v<<^v<vv>^^v<<^vv>><<>>v<<<>v^>vv>v>><^>v<^<>>v>v^^v<<vv^v>>^<^v^^><>>>>><^<^v^^<v>>v<>v<>^v^>^^><^v>^>v>><^>>^<>vv^^^>^><^<^v<^<^<v^v^v^>><^<^<v^<^^^>^>>^>^<>^>><>^>^>>>>vv><>v^>^^>><v<>>>^>v<>v^<vvv>^<>v>vv^^>vvv<^>^v>^^><v^>vv<<^<<<<v<>^^^v<v>vv<>v>^>v<<>^^^^<>^v^v>v>^>^><>vv^>^^<<>>vv<vv^^><^<<<v>^v^>^<>^<><>>^<v<vv>^v^<<^v>>^>>^><v^v<vvv><^<vv<v>^<^vvv><^vv>^v^<v>>v>^^<v<^<<<^v<>v^^<>^>>>v^^^>vv^v>>v^>^>^<^v><<><v<>v>>^<v^<^<>^v^^v<<v>>^vv<<<^<>v<^>v<^<^vv<>>v>^^^<>>^v><<v^^^>^v^>><>>><<<<>vv><v><>vv^>^>^vv<<<v>v>>vv^><>^>v^v<^><><><>v<<v<>>^v<>vv^>v^<^>^>vvv^<<<v^<><^^>>>>>v>^<>v>^<<^>>>v^v>v<^v^>v<>>vv<<^>v^<^><vv^^>v^v<^<<v>><v<v^<^^<v^>>vv<<^v<vv>^<><v^v^v>v>v<v^v<v^<v^^>><>^^<vvv^<^v>>^^v^><^>><<^^>><^<v^>^v<^>^<^<^v^<v^^<vv>^vvv<^>^^v<<>v<v^<><^^^<><>>v^^v^<<><^>>v>v<<<>^<^>v^^<>^<vv^<<^<<^<^^<<>v<^^>>v^v^v^>v<v<><<>>>><v^v<^v<^<<<vv<<>v<v><>vv><v><vvv^v^^><<^v<<><^vvv^v^^><>>^><>^vv>>^<>><
// v><<<v>v<<<vv><^^<^^^^vv<<v^>^<^^>>v>^>v^^<><v>v<v><v<<v^vv<v>vvv>>^<<<<>v<<><>^>^v><^^><^>vv>>^^^<<>>^>><^^>vvv><<>v>v>>^v<^^><<v>v^vv^v^<^>^>^<v^<vvv^v<^v^>^v<^^^<^>v>^><>v<<>^^>><^<v><^>>>>v<v>vvvvv^^v>^>v^^<^<v>^^^^^vv<<<v^^^vv^<>^<^<^v<vv>^>vvvv><v<<vv<v>v><<v>>^><><^vv>vv^v<<<<v<<<>v>v<>^^<^<>v^v<^>v^>v^<>^^<<^<<v>v^<^><<<^^vv<<v<<>vv>v><>>><^<<<^v>v^>>^^v<^^^>>>^<^^^^<^^vvv^<^>v>^<><>v><<vv<^^>^>^<^<^v>^v>>><>^<<^<><^^<vv<^<><^^<^<v^<<<^^^v<^<v<><^^<^<>v<>>>^^^v^^<^^><vvvv^^v<<<^><^^v<<<vv<v^<<^<v^<^<<^v>v><>>v>v>^<v^^^v<^^<^^<<<>v<v>><^<><<vv>^<^>^v<v^vv>><>^v^^^^v^<><v^>^<>^<^>vv><>v^^><v>>v<<<>vv<<<vv<><^^>>v^>v^<<<<<<><^><<^^^<>><>^<vv><><^v^vv><><v<><<><^>v<<^>v^v>v^vv<v^v>^>^>><^^^v^v^>^<><^^>v>vv<<<vvv^v>>vv<<><>><>>>>^<v>>>><>>vvv<v<<>v><^<^<v<<vv>>v<^v^v>v<vvv^^^>>^v^^>>^^vv<>^vv^<vv>>v<>^>>^^^<v<<vvv<<v^v^>^^^>v>>>^vvv>vv<^<^^^>>vv^>v^>>>^<<<^v<><>^>v^^v>>><vv>>><v^<>^v>>^>^<^v^^>vvv^^vvvvv<^>>^^<vv<>^<vvv<^>^>vv<v^>^>^^<^v<vv<<><>vv<<^^vvvvv^^<^<>v>vv<>vv>>v<vvvv<vvvv
// >^><^>vvv>>^<^<<vv>^v<^^<<v^^<^<<<^v>^^^<^vv><><v<^>^^^><v^^>v^^v<^^^v<<^<^^vv>>^>><^>^^^><vv^vv<>^^>vv>v<^v>^<>><>^>>v<^^>v^v<>v>^vv>>>v<<vv>v^<v>v>>><^^><<<><^<>^>^^v<^>><>^>v><>>>^v>vvv><>>>v>>v>>^<^^v><^<v^>^^^>v>>v<>v<v<<<>vv>v^^v><>^>vv^<>vv^^<<v>^<^<>^<>^v<v<<v^^v<<v^^><^^<v><>>^^^>>>vv><^>^vvv><>>>^^^^^v^v<>>vv>>v^^>^v<^<<<<><><<>v>>>vvv<>^^<^v>^<v>^<<^^<<><>vv^^<v^v^<v<v<v>^vv<^><<><>>vv^v><^<^v<v^>v<^><<><<<<<^<>>^<><><^^v>><<^<>>>>^v^<>><><^<<vv>^vv<><<^>v^^v^>^v^vvv^<<^^v<vvv>><vvv^^>>v^<>^v>^^<^v>>><v<<^<^^vv^^v<<<vv<>^v<^<>^<>^<^v><^v^^^>>><<>><<><v>>>>>v^><<>>>>v>vvvvv>>vv^^><^v>v<v^^v>v^><v>v>v<vv><<<>>>^>><^^<^vv<>>>vvv>v^<>>^^>v^^v<v>^>v<>^v>v>><>>v<^^<<^v<v^<>><><<^^^v<>>v>v^vv><>^>><v^v<<vvv>v^<vv<^v^<v>>vv<^>v^<<v><^^>><>^v^v>^vv<><v><v>>vv^<v><v><<vvv^^>><v<vv><<^<v<<^v<^<v<>>>>^^^^^<<^<v>^^<<^^<^v<^><>v^<>>>^vv>><<v><>v^<^v^v<<^<<<><<<v^>v^v^v^^<v>vv<<>v>v<>vv^<><v^<v>><vv<^<<<>^^<<vv<v<>^>v>v^vv>v<vvvv^^><<v<v^<<^>v<<>v^v<<<<^<<^v<v<>><vv<><^v<^^<v>^<<><v>v<<^^v
// ^v^>v><v>^^v^v^>^^^>^^^v^vv^^>v>>v<<v>>^v<>>v^<^v^v<v<<v^v>^<v>^^<<<<v^^>v><<^<<<v^<^^><>><v^><><v^v^vv><><v<^vvv>><^<<<>>^>><v^v^v>^><>vvv<<^v<>^>vvv^v<>^><>>^^><<^<vv^<>^v^^^<<vv>^>^<<>>v^^>><^^^>>^^<^^<>>>v>v^vv>v<^^^v>>^^v>><>>^vv<><^>>^<vv><<^^v>>v^>vv>v><>vv>>v<v<<^vv<^>^v^^<>v><><vv^vvv><>>^<v<>^^<^>>vv<^<<<<<vvvv>^<><<^<>^v<vv>v<<^^<><<^<^v^>>v><>v<^<<v><^>>>^^v><^v^^vv^<^><^v<><^>^v<^<>^<^v<>^v<><<^>^^<>>>>v^v^><>>^<><^v><v<v^<^^><<<>>^<v<v>v^>^<v><<<<v>><v^^^v<^>v^<vv<<>^>><^<^>>^><<v^>^<<>vv<v<<^v<v>v>^^>v^^<><^v>v>^>v<<^^v<^><>>^>^<^v<vv<>vv>>^<<<>>v<>v^^<><>vvvv><^<>^v<>v><>vv^>^v^<^vv^<^v^<v><^v^<v^v><vv>>>v<>v^vvv^>>^<v>>v<<v<>vv>>>>>>^<^^v<><<><<<<^<<v^v><^>v^<vv<vv^>v^<^><<>^>v<>^<^<<<v>>vv>>>v<v<v>^<>^v<>v^v<><v>>vvv>^>^^^^>^><<<><^vv^vv>^<><<v^<<<<<v^<^v>^^^<vv>^vv^>vv<>^<^>vv^>><^><^<>vv^v^^vv<^v^v><^>v<<^v<v<^<v>><vv^^<<><^^^>>^<^^<^^<<v^v<><<v<><vv<<v>>^<^<<v><>^^>>vvv<v^v<>>^<^<^<>>^>^>^^>^v><^^<<<v^<vv<^<v^<<v><>>v>^>v<v>><<^^^^vvv<>>>^v<^<v<vv^<^<<><v<^^<^v<v>^
// v>^><><<><^v<^<v<><<><^v>><<<<<^^^>vv^^^v^<v^<^v>^^>v<>vv<<^>^<<>^vv^v<v<^^>>^^<v>^<v>^v<v>>><vv><v>v<>v<<^^v^^v<<^v<vv>^>^<>>>^<v><^^>>^<^v^v^^<^<^v>>^<<v>^^^<^<>v^>^<v<<>^^>^<v^>v>^<><>v^<v>v<<>^v<v<v><^v>^>^^^>v>>^<<^^vv>^<v>>>>^>v^><<^vv<^<vv^^<^<<<^^v^vvv^v>^>^<v^vv^^>^<>>v^^v<^^v<<^v>>vvvvv^vvv^v^v>^v<>^<v><<^^<<v^v<v><<<^vv<^^<^vv^v<<^><<^>^>>><v>^vvv>^^v>v^<^^vv<^>>^v<<^>vvv<<>^v^<<<><v<v^^<<>^v>vvv^v^<<<^v^vv^^><>v>^>^>vvvv>><<^v<<><>v^<^<>>v^^v>^^^^>v>>>v><vv<><^>v<<v<>v^><v^><>^v<vv<>v^<v^>vv<<><v<^v^<^vv^^<><^^<^<^<<>^>^^v>>v>vvv^^^v><v>><v<^<v^<v^>><v<<vv^v<>v^^v^^v>vv^<>v<<v^>>^<vv>>v^vv<<v<<><^><v^v<<<^v^v><^><>^vv>>vv>^><^vv^>^^>^<<>^v<^><>>^^<>^<<^v<^^^>v<<><<^>^<^>v<^>v<>>v>vvvv<^>^<v<>><<>v<^^<<>^^^<<vv^<>v^>v^v>v><>^<>v<<^^v><>^<>vv>^^<v<>>^v<^>>>^^^><^>^^>>vvv<>^v>^v<vv<v<>^>^>v>^^>>v<>>v^^^<^<v<><^v^<>^v^>v^<<>^^<^>^<>^^>^<^^>vv^^<<<v>><<<>^>^^v<>vv>v^v^<<<^>vv><v^^v<^^v^^<<<>v<<v^^^>>><^v<<^>>>>^<v><<<v>^vv<^<>>^^vv<>^^>v>^>>>>><^v>>>vv>v^^vv>>^^^<<<>vvv<^<<^v>^^
// >vv<><>v^><v^<^>^vv<^<>^><>>vv^<<v^<<^v>^^^v<<v<^v>><^>v^^>v^<>^><^^v<><v<>>^v^<^^<^<<<v>v<>^<>v<<^^<^>>>vv>vvv>>v>^<^>>vv>>^>^vv^>>>>><<v>v^><v<<>>v^<>^^>>v<<vvvv<v><<><v^^^^^<>>^<v<<<><>>>vv<<^><v<<v^<<^vv>^<^>vv^v>>v<vvvv><<vv<<>^v>v<<<>^^^>v^v^^vvvv<>v>^v>><^><<<vvv>v<>^^v^><v^>^><v>vv>v><>><>>v>^vv^v^^>><<^><>>^>v>v^^^>>>^vv<v^^><v<^^<<v^<>v^<<<^<^<^<<^>v><v<v^<<v<>^v^v^>><^v><^^><<v^<^^><>v>v>>>^^>><>v^^v<<vv>vv^<>>^v^vv<<>^<<v<>>>^<^<<^<^>^^<<^v<^v<>v>^^^^<^v>^>^v^^<^^<<<^<<<>><>^<vv^>^^<<<^>v>v^v>v<v^v<^^v<>><><vv<^v^vv>^<v>^>^v<<>^^<^>^<>>vv^^^>>^<v<v^<><<<^><>>v^^v^<^v<><<><v>v<><v<<^<>^^^>^<>v>>^v^vv<<v^vvv>^^><v^<v^^^<v><>^^>^v>vv<v^^^>><^>^vv>v^>^>^><><<v^^v<^^v>v<<^>>v^>^>^v<>v^><vvvv^<>^<<^vv^vv<v<<>^v>v><^v^>>^^<<v^v^^v<<>><>>v^^><>v>v<v><^>vv><>v^>^><>>>v>^v^^^vv><v<^><<v^v<v>>>^>vvvvvv^^^v>>vvv<>^>v^<^^<><vv><vv^<^v<<^>^>><>><>^>^v^v^>>^vvvvv><v>>>>^v^>>v<<<><>^>^<v<v><^v<^<>vv<>v<v^vv^<v<^v<><vv>><<v>v<<>>>v<^>>>^^v>>><><v>>v^v^v><>>>v<>^^>^<<<^<v><^><>^^^>v^<>^^v>>^
// <vvv^>^v>v^<^><>^^<<<<v>^<^^v<>v^^v>^><<v^^^<^><v^^^>>^^v>^>>vv<>v>^<>^^^vv<v>>><vv^<^v>>v>>^><>v^<^^v>v<^^><<v<>v<>v>vv<vv^<<<v>^<^^^<vv<v<v>^v^>vv<^^v>vvv^<v><v<<v<><v^^>^^^>v<^^>>^>><>^^<<vv^><v^>^^<^<><<>>^vvvvv^>^<v<>>^><>vv>^>^>^><v>>v^<>>^v<^<vv>v><v>v>>>^<^^v<<>>>v^vvv^v^>^^v^^>^^^^^><^v<v><<^v>vvv<vv<<vv>vvv>v><v>>><^v><vvv<<^>v>^>>^^^v^^v><<^><>>^v^<<>^^v<v>^^v><v^<>vv^><>vv><>^v>>^^<v<^^<^v>^>^<^vv>^^<>vv<^><>^<v><>>>>v^>^^>v>vv>^vv^v<>><<><^<vvv^v<v<<<v><v^>vvv<^>v<><v^>^vvv>v<<>><v>>^><>^^^>^vv><vv>v>vv<>^<<<<<<v^<v^<v<^v><>>>^v<>^v><>>>>v^v^<<>>^v<^><>vv<<>^>>v^>>v<>^<>vv><v<^v<vv^<<<vvv^<>>><<^v<v<>>>^^<^v><<v<>^>>v>v<><<^v^vv<><^>>>^><^<<v<^^v<v^vvv<^><<v^v^<^^>v>v<>^>><<^<^vv<^>^v^v^<v><^>>v<^><<v^<^^<^^v^<>><<^<v>><v<v>v<v>>^>><v<^><v>v<v^v^>^^v^^>v<vv^>v^><^>><<>^<^v<v>>><v><v^^<^v^><<>^<<vvvv>^vvv<^<>>^^^>>^v>^><^^<<<^<^v<vv^^vv<v>vv>^>>v>vv^v^vv^<<^^^<>v^^<><<v^v>^v<v><><<v^><^><^>^<<^^<<v^><<^<>^<^>>^<>>><><vv<^^^<><^>^<v<<v^^vvv^^^>^<^<vv>>vv>v>>^^<^><>v>><>>vv^^
// ><>><vv>v^v<v^v^^^^v><<v>>>>>vvv><<v^^<vv^^^<v<>>v><<><>^<<>^><>^<^><^^v<^v^v^^^v<v>vvv>>^<v<^>v<<^<v>vvvv<><v<>>v^><>^<<>v<>>^^^v><<><v<><^>>v>>^>^>v>^<^>><<>v<^<<><vv^^v><vv^>><<^>^>^v^^<>>vv>^<><vv^>><^v^v><<<>v^>>>v^>v<^vv^>>^<>v^<<>vv>vvv<<<><^^v^<><v<vv<>^^<><vvv<^<^><vvv<>>^v>^<>>>v><>v^>v<v<^^<>^><v>v><vvv<v<<><><v<v^^>>>v>^>v>^>v<<^v><<^>vv<<<v>>>^v^>v<v>><<>>><<^v>v<<v>><^^<^>>^<v^v<>v^v>v^v<v^^><v>^v>^v><>>v>vvv^v>^^<<v>v<^v><vvvv^<<<>^v^<v<>><^v^^<^<>vv<>>vv>^^^<<<><>><vv^v><v^v^v^<^v<<>>v>^^v^>v><<^v<<>^^vv^v^v^v>v^v^^vv^>v<<^^>^>>^vv>>>^^v<<>><v><<<^v^>^^v><vv^<vv<^>>>vv^><>>vv^^>>>^>>v>^vvv>>v>v>^vv>v>^><>^<>vv<v<v^<^^>^<<>^v>^<vv^v<^^<<vv<v>><^>>^<<^>^<^v<^vv>>>v>^^vvv^v^^^^^^^>^>^v>>^v<^^^>^vv>v>v<><^^^vv<^vv^>^v<<>^vv<v^>>^<v^^v<<v>v^v<>vv<>>^><<^<>^<v>^^vv^>^v<^<><<<><>v>v<v^^^v^>^>>v>^^^^>^^>><>v>vvv^vvv<^<>>v<><^<^>><<<<<vv<<><^v<vvvv>^^<><<<>v>^>>^v><^^v<^>v>^v^<vv^^<>^<<>^vv>>><v>^v<v<^<<<vv>^<><^v<v^<<v<v^>^v>v>^>^<<^<v>>vvv^v^>>^<^><vvvv>v>v^^<v<>vv^v>^^>>^<^v^
// ^<>vv>^^>v<><>^vvv<v^v^v><^^vv^<<^^<v^<<^^<<<v>>vvv>>><^^^^^v>^v<><<v>>^>^vv<v^<v^v^^>><vv<^<v><<^<v>vv<^v^^v><vv<<^^>>>^>^><v^^v>^v^>vvvv<><<>v>><>>v^>^<^^<>^^<<v^v<^^v^^^v<<v^<<<^<v<<>^v>>>^>^v<vv^<>>v><^<v<>v<><<>^^>v<<<^<><<^>^<v<><^>^<^^^^><v>^>^<^<^<>>^^<vv>^^^^>^<^<v<vv><vvv^^^v<><^^v^v<^^>>><>>v>v><>^<v<>vv<><v^^^>v>v<vv<vv>>>v>^<v<<v><>v>^<^^^^>>^v><<v<<>><>>v^>^v^v^v<v>vv<><^v>v^><v>^^<v^<v>v^><>v>vv<v<>><>v^vv>^>^^^^>^><^<^^>>v><<<<>^v>^^<^^^>v>^v^^v>vv>v<><v>^v^v<>>>>^>^>vv<><>v>v>^v^^<^^v<vv^v<<v^>>vv<>>>^^>>^<^^^<v<v^vv^^>><<v>^<vv>><^v>^>v<<>vv>v><>v^^<<>><<v^v<v>^^vv<>vv<<>v^>^>^^^v<>v>>>^v<>>>^^v<<>^<><v>vv>^<<v>vvvv^v^<><^>^>vvv^><<v<^<><>>^<v>v^^<^^>v<v^<>^v<<^^^^<^<^<v<^v^v><^vv>^<><^<>vv>^v^^<^^>^vv^^>>^<v^<v>^>><<vv^<<<>^>^^v>v>><<^>>^^>>^>>v<^<<v>><<^v>^<^^<<^^<><<<v<<vvvvv^<^>>>v<>^<vv^<^>>vv<^>><<^<^<<<>v^<^v^v>v^vvv<>^^>v<^v^^><v^>>>>v<<^^v^<<vv^<^v<<<^^<^v><vv^^v<<^><v<^<>^^v<^^<vv^vv>><<^^<v>^v^v<v^^^><v>v<><v^>^>><^^^v^>v><<vvv<v>^<v<<<v^<>v>^v>>>>>^>v^>v<>
// <^>><<vv>^^>vv><^^v>>>vv<^^<<^^><<^>><^<v><^<v^v>v^<^^^<><>^>v<^>>v^<^^^<^^<^<^><><^>vv>vv<vv<<v><>>vv>^^>^v><v>>><^v^vvv<><<v^^^>^>v>>^<>v<>^v><v<><v><^<^v^<v^>^^v>vvv<><v^<<<v^<v<v<v^>>vv<vv>v<<<^v^vv><>vv>v^<<^^v^><<<>^<>^vv^>v^><v<v>><v^^<<>v<v>v^^v<<>^>^>vvv>>>>>>^^<>><^vv<v>v^v<<^v><^^<>><>><v>><v^>>^<^^>>^v^^<<v<^>>^^><<>v><vvvvv<<<^<<>v^^^v^v^<>>vv^<>v<^v<^<>>^<<><^>v<<v^>^<><>v>^^>>>v<^v>^^vvv<>^<<<^>v<><v^v<<^>^^>^<^>^<vvv<^v<^^<^v>v^>>v^v><v>>v<^^^^^^^vv^<<^<^<^vvv^^<>>v^v>v^<>vv>v^><v>v^>vv<<^v>v^^v^^><<<>^>^vv>>v<v><<vv^v^v^^v>v<>v<vv^v>v^v^<>^vv<v<v^^>^v>>>^^^<<v><>>>>^vv>v^<>><>>^^>v>><>>>^^<>^^>^vv^^vv^v<^v^>vv<><<<v^^^v>><><^^>v<<<><>^v>^<>v^<^<<<v>><><vv^v<<v^v^^v<v<>>v<^<^^^vvv>v^v>^^<^>v^v^vv>v<<<>v<^^><><>>v^<v>>>v^v<>v><v><^<^v<^^^^v>v^>>v<^vvv<><><^^^><>><<><^<vvv<<^v><v><<>><vv<^>><^>v^>>v><v^<>>^>><>v>>^v><^<<<><>>>>^vv>><v><>>^<vvvvv>v<^>>v><^^v<^^^^^>^^>v>vv<vv^v<^<^^<>v^<^vv>>^>v^v>v<v^<^<^vv^^^><<<>v>^>v^^^v^^>vv<>vv<vv^v>^^>vv<^<v>>^<^>>vvvv<<>><<^v^>>v<>>
// >>vv>vv<^><>><v<^^^>>>^>v>v<vv>vv<^><v^<<>><><v^<^vv^v>><<<vv>^v<^^^^<^^<<^>v>><<<>><<>><v<>^<<<>v<<v^^<vvvv^^>vv<>v<^v^v>>>v<vvv^><v^v><^<^><>v>v^vv>^^>^^vv<<>^v>v^^^<^v<v^>^^^^<<^^^<><<<>>v<><vv>><>^<>v>>^v^>v<<v>^^^v<<><<>v^>>v<>^>v>^^v^^v<>^v<<v<v>vv^v<<>>v<<><>>^>^^>>^<v<><<v<>v>v><<>^>^v<^>>^<>v>>>vv>^>>^^^vv^<>^^>>><^^v<v><><^^vv<>^>^<<<vvvv^<^^<^<><<><^^<<>^>v><><v>>><>^v<<<<^<^<>>^<<>>v<>v^vvv^^^^^v<><<>v^vvv><^<>^vv^v^v>v^^^v^^v>>^<vv<<<<v^v>^<v>><<>>^>><>vv><v><>^vv<^>><<<^>^>v>vv^<>v><<v<<<vv>>>><v^>^>^v^<^>^<<^<^v><><>v<>^^>^^vvv^vv<<<<vv^v<><<^<^^^<<><<^^^^<^<^<>^vv>vv><^^^^<<^v^<>^^^v<>v>^>vvv<v><vv>v^>>>v>^>>^<<v<>^>vv<v^<<^>><<>^<><>>>^^>v><<^^v>>v^<^<^<>>^<<><<>^^^<v^^<>vvv><<<^<><v<>^^v^>vvv^v<>^<v<^>v<>^vv^<>>^<v>>>^<<^<^^<^^^<>><<<^^<^<<>vv>v<>v<^^<vv^>^<>^><v^vv<>vvv>^>^v^vv<^^^^v>^>>^v^>v>^>><^^^>>^>>v^><>v^<<<<<vv^^^<><><v<<>><>^<^<v^v^v>><<<v<v<<v<><<<>>^vv^^>v^^<<vvv^^^^^^^^>v>>>>v<<<v<>>v<v>^>><<>>><>v><v<>v><v<<><^v<v<<v^>v<v^^v<<^v<<<vvv>vvvv^^<vv<v>vvv^<vv`

const [room, moves] = input.split("\n\n");
let walls = [];
let boxes = [];
let robot = [];
room.split("\n").forEach((row, r) => {
  row.split("").forEach((col, c) => {
    switch (col) {
      case "#":
        walls.push(`${r},${c * 2}`);
        walls.push(`${r},${c * 2 + 1}`);
        break;
      case "O":
        boxes.push(`${r},${c * 2}`);
        break;
      case "@":
        robot = [r, c * 2];
        break;
      default:
        break;
    }
  });
});

console.log(walls, boxes, robot);

const checkNextSpace = (pos, [diff_r, diff_c]) => {
  debugger;
  const [r, c] = pos.split(",").map((item) => +item);
  const box_pos_2 = `${r},${c - 1}`;
  if (walls.includes(pos)) {
    return false;
  } else if (boxes.includes(pos) || boxes.includes(box_pos_2)) {
    let box_index = boxes.indexOf(pos);
    let new_pos = `${r + diff_r},${c + diff_c}`;
    if (box_index < 0) {
      box_index = boxes.indexOf(box_pos_2);
      new_pos = `${r + diff_r},${c - 1 + diff_c}`;
    }
    if (checkNextSpace(new_pos, [diff_r, diff_c])) {
      boxes.splice(box_index, 1, new_pos);
      return true;
    } else return false;
  } else {
    return true;
  }
};

moves
  .replaceAll("\n", "")
  .split("")
  .forEach((move) => {
    let new_pos = ``;
    debugger;
    switch (move) {
      case "^":
        new_pos = `${robot[0] - 1},${robot[1]}`;
        if (checkNextSpace(new_pos, [-1, 0])) robot = [robot[0] - 1, robot[1]];
        break;
      case ">":
        new_pos = `${robot[0]},${robot[1] + 1}`;
        if (checkNextSpace(new_pos, [0, 1])) robot = [robot[0], robot[1] + 1];
        break;
      case "v":
        new_pos = `${robot[0] + 1},${robot[1]}`;
        if (checkNextSpace(new_pos, [1, 0])) robot = [robot[0] + 1, robot[1]];
        break;
      case "<":
        new_pos = `${robot[0]},${robot[1] - 1}`;
        if (checkNextSpace(new_pos, [0, -1])) robot = [robot[0], robot[1] - 1];
        break;

      default:
        break;
    }
  });

let result = 0;
boxes.forEach((box) => {
  const [r, c] = box.split(",").map((item) => +item);
  result += 100 * r + c;
});
console.log(result);
