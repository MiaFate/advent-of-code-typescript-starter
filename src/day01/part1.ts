// Advent of Code - Day 1 - Part One

export function part1(input: string): number {
  const arrayOfLines: string[] = input.split('\n');
  if (arrayOfLines[arrayOfLines.length - 1] == "") {
    arrayOfLines.pop()
  }
  let result = 0;

  arrayOfLines.forEach(line => {
    result += filterLineNumber(line)
  })
  return result;
}

export function filterLineNumber(line: string): number {
  const arrayOfNumbers: string[] = line.split("").filter(element => {
    if (!isNaN(parseInt(element))) {
      return element;
    }
  })

  const first: string = arrayOfNumbers[0] ?? '0'
  const last: string = arrayOfNumbers.at(-1) ?? ''
  const addedNumbers: number = arrayOfNumbers.length > 1 ? parseInt(first + last) : parseInt(first + first);

  return addedNumbers
}
