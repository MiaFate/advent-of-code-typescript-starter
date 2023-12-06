// Advent of Code - Day 1 - Part Two

export function part2(input: string): number {
  const arrOfLines: string[] = input.split('\n')//.map((line) => parseInt(line));
  arrOfLines.pop();
  //console.log(arrOfLines);
  let result: number = 0;
  arrOfLines.forEach(line => {
    result += filterLineNumber(line)
  })

  return result;
}

const writedNumbers: string[] = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']

function filterLineNumber(line: string): number {
  let lineFull = line
  writedNumbers.forEach((element, index) => {
    if (line.includes(element)) {
      lineFull = line.replaceAll(element, (index + 1).toString())
      line = lineFull
    }
  });
  console.log(lineFull);


  return 0
}
