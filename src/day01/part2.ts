// Advent of Code - Day 1 - Part Two

export function part2(input: string): number {
  const arrayOfLines: string[] = input.split('\n')

  if (arrayOfLines[arrayOfLines.length - 1] == "") {
    arrayOfLines.pop();
  }

  let result = 0;
  arrayOfLines.forEach(line => {
    result += filteredLineNumber(line);
  })

  return result;
}


export function filteredLineNumber(line: string): number {
  const writtenNumbers: string[] = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']

  const arr: number[] = [];


  writtenNumbers.forEach((element, index) => {
    let partialLine: string = line;
    if (partialLine.includes(element)) {
      while (partialLine.includes(element)) {
        arr[partialLine.indexOf(element)] = index + 1;
        partialLine = partialLine.replace(element, ("-".repeat(element.length)).toString());
      }
      partialLine = line;
    }
  });

  line.split('').forEach((element, index) => {
    if (!isNaN(parseInt(element))) {
      arr[index] = parseInt(element);
    }
  })

  const finalArr: string[] = arr.filter(element => {
    if (!isNaN(element)) {
      return element;
    }
  }).map(element => {
    return element.toString();
  })

  const first: string = finalArr[0] ?? "0";
  const last: string = finalArr.at(-1) ?? '';

  const addedNumbers: number = finalArr.length > 1 ? parseInt(first + last) : parseInt(first + first);

  return addedNumbers
}