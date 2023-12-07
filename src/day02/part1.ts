// Advent of Code - Day 2 - Part One
interface Game {
  red: number;
  green: number;
  blue: number;
}

export function part1(input: string): number {
  if (input.trim() == "") return 0
  const arrayOfLines: string[] = input.split('\n');
  let result = 0;


  arrayOfLines.forEach(line => {
    result += possibleGame(line)
  })
  return result;
}

function possibleGame(line: string) {
  const bagCubes: Game = { red: 12, green: 13, blue: 14 }

  const lineArray: string[] = line.split(':')
  const gameId: number = parseInt(lineArray[0].split(" ").at(-1)!);
  const sets = lineArray[1].split(";")
  let gameSet: Game[] = [{ red: 0, green: 0, blue: 0 }]
  // console.log(lineArray);

  gameSet = sets.map(element => {

    const elementos = element.trim().split(',').map(x => {
      let splitted: any[] = x.trim().split(" ").reverse()
      splitted[1] = parseInt(splitted[1])
      return splitted
    })

    const obj = Object.fromEntries(elementos)
    //console.log(obj);

    return obj
  });


  if (!checking(gameSet)) {
    return 0
  }

  return gameId
}



function checking(gameSet: Game[]) {
  const bagCubes: Game = { red: 12, green: 13, blue: 14 }
  let isPossible = true
  gameSet.forEach(x => {
    if (x.red > bagCubes.red) {
      isPossible = false
    }
    if (x.green > bagCubes.green) {
      isPossible = false
    }
    if (x.blue > bagCubes.blue) {
      isPossible = false
    }
  })

  return isPossible
}