// Advent of Code - Day 1 - Part One

export function part1(input: string): number {
  const arrOfLines: string[] = input.split('\n')//.map((line) => parseInt(line));
  arrOfLines.pop();
  let result: number = 0;

  arrOfLines.forEach(line => {
    result += filterLineNumber(line)
  })

  return result;
}

function filterLineNumber(line: string): number {
  const arrayOfNumbers = line.split("").filter(x => {
    if (!isNaN(parseInt(x))) {
      return x
    }
  })
  const addedNumbers = arrayOfNumbers.length > 1 ? (arrayOfNumbers[0] + arrayOfNumbers[arrayOfNumbers.length - 1]) : (arrayOfNumbers[0] + arrayOfNumbers[0])


  return parseInt(addedNumbers);
}
