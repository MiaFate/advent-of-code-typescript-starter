// Advent of Code - Day 2 - Part One
interface Game {
  red: number;
  green: number;
  blue: number;
}
const bagCubes = { red: 12, green: 13, blue: 14 } as const

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
  const games: string[] = lineArray[1].split(";")

  games.forEach(gameAsString => {

    const gameArray: (string | number)[][] = gameAsString?.trim().split(',').map(setAsString => {
      const [qty, colour] = setAsString.trim().split(" ") ?? ['0', 'red']
      return [colour, parseInt(qty)]
    })

    const gameObject: Game = Object.fromEntries(gameArray);
    //      ^?
    if (gameObject.red > bagCubes.red || gameObject.green > bagCubes.green || gameObject.blue > bagCubes.blue) {
      gameId = 0
    }

  });

  return gameId
}
