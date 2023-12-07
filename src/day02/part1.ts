// Advent of Code - Day 2 - Part One
interface Game {
  red: number;
  green: number;
  blue: number;
}

export function part1(input: string): number {
  const arrayOfLines: string[] = input.split('\n');
  if (arrayOfLines[arrayOfLines.length - 1] == "") {
    arrayOfLines.pop()
  }
  let result = 0;

  arrayOfLines.forEach(line => {
    result += possibleGame(line)
    console.log(result);
    console.log("---");


    // result
  })
  return result;
}

function possibleGame(line: string) {
  const bagCubes = { red: 12, green: 13, blue: 14 }
  const lineArray: string[] = line.split(':')
  const gameId: number = parseInt(lineArray[0].split(" ").at(-1)!);
  const sets = lineArray[1].split(";")
  let gameSet: Game[] = [{ red: 0, green: 0, blue: 0 }]
  console.log(lineArray);

  gameSet = sets.map(element => {

    const elementos = element.trim().split(',').map(x => {
      let splitted: any[] = x.trim().split(" ").reverse()
      splitted[1] = parseInt(splitted[1])
      return splitted
    })

    const obj = Object.fromEntries(elementos)
    //console.log(obj)
    return obj
  });
  // console.log(gameSet);
  // console.log("---");


  let totalGame: Game = gamesReducer(gameSet)
  console.log(totalGame);


  if (totalGame?.red > bagCubes.red) {
    return 0
  }

  if (totalGame.green > bagCubes.green) {
    return 0
  }
  if (totalGame.blue > bagCubes.blue) {
    return 0
  }



  //console.log(gameId, gameSet, totalGame.blue);
  console.log(gameId);

  return gameId
}

function gamesReducer(gameSet: Game[]) {
  //let totalGame: Game = {}
  // gameSet.forEach(element => {

  // });
  let totalGame = gameSet.reduce((acc, curr) => {
    let red = curr.red ? acc.red + curr.red : acc.red;
    // console.log(`red ${red}`, "acc", acc, "curr", curr);


    let green = curr.green ? acc.green + curr.green : acc.green;
    let blue = curr.blue ? acc.blue + curr.blue : acc.blue;
    return { red, green, blue }
  }, { red: 0, green: 0, blue: 0 } as Game)


  return totalGame

}