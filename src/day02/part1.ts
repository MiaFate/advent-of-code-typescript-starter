// Advent of Code - Day 2 - Part One
interface CubeSubset {
  red: number;
  green: number;
  blue: number;
}
const bagOfCubes = { red: 12, green: 13, blue: 14 } as const

export function part1(input: string): number {
  if (input.trim() == "") return 0
  const arrayOfLines: string[] = input.split('\n');
  let result = 0;

  arrayOfLines.forEach(line => {
    result += findIdOfPossibleGame(line)
  })

  return result;
}

function findIdOfPossibleGame(line: string) {

  const lineArray: string[] = line.split(':')
  let gameId: number = parseInt(lineArray[0].split(" ").at(-1) ?? '0');
  const sets: string[] = lineArray[1].split(";")

  sets.forEach(subsetAsString => {

    const cubeSubsetArray: (string | number)[][] = subsetAsString?.trim().split(',').map(cubeAsString => {
      const [quantity, colour] = cubeAsString.trim().split(" ") ?? ['0', 'red']
      return [colour, parseInt(quantity)]
    })

    const cubeSubsetObject: CubeSubset = Object.fromEntries(cubeSubsetArray);
    //      ^?
    if (cubeSubsetObject.red > bagOfCubes.red || cubeSubsetObject.green > bagOfCubes.green || cubeSubsetObject.blue > bagOfCubes.blue) {
      gameId = 0
    }

  });

  return gameId
}
