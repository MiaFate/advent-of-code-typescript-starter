// Advent of Code - Day 2 - Part Two
interface CubeSubset {
  red: number;
  green: number;
  blue: number;
}

export function part2(input: string): number {
  const arrayOfLines: string[] = input.split('\n');
  if (input.trim() == "") return 0
  let result = 0;

  arrayOfLines.forEach(line => {
    result += findIdOfPossibleGame(line)
  })

  return result;
}

function findIdOfPossibleGame(line: string) {

  const [_, gameSet] = line.split(':')
  const sets: string[] = gameSet.split(";")

  const minimumSetPossible = { red: 0, green: 0, blue: 0 };

  sets.forEach(subsetAsString => {

    const cubeSubsetArray: (string | number)[][] = subsetAsString?.trim().split(',').map(cubeAsString => {
      const [quantity, colour] = cubeAsString.trim().split(" ") ?? ['0', 'red']
      return [colour, parseInt(quantity)]
    })

    const cubeSubsetObject: CubeSubset = Object.fromEntries(cubeSubsetArray);

    if (cubeSubsetObject.red > minimumSetPossible.red) {
      minimumSetPossible.red = cubeSubsetObject.red
    }
    if (cubeSubsetObject.green > minimumSetPossible.green) {
      minimumSetPossible.green = cubeSubsetObject.green
    }
    if (cubeSubsetObject.blue > minimumSetPossible.blue) {
      minimumSetPossible.blue = cubeSubsetObject.blue
    }

  });
  const power = minimumSetPossible.red * minimumSetPossible.green * minimumSetPossible.blue
  return power
}