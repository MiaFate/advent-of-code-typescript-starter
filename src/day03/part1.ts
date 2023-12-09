// Advent of Code - Day 3 - Part One

interface MatchedNumber {
  foundNumber: number;
  numberLong: number;
  position: number;
  line: number;
}
export function part1(input: string): number {
  if (input.trim() == "") return 0
  let result = 0

  const arrayOfLines: string[] = input.split('\n');
  const numbersObject: MatchedNumber[] = []

  //look for numbers in arrayOfLines line by line replacing with dots on cleanArrayOfLines and adding the numbers found to numbersObject
  const cleanArrayOfLines = arrayOfLines.map((line, index) => {
    const re = /\w+/g
    return line.replace(re, (match, offset) => {
      numbersObject.push({ foundNumber: parseInt(match), numberLong: match.length, position: offset as number, line: index })
      return (".".repeat(match.length))
    })
  })

  //create a matrix of dots and symbols from clean array of lines
  const matrixOfLines = cleanArrayOfLines.map(line => {
    const arr = line.split('')
    return arr
  })

  //for each number found in the input will check if is surrounded by any symbol
  numbersObject.forEach(element => {
    if (checkNumbers(element, matrixOfLines)) {
      result += element.foundNumber
    }
  })

  return result;
}

function checkNumbers({ numberLong, position, line }: MatchedNumber, matrixOfLines: string[][]): boolean {

  const topLineExist = line - 1 >= 0;
  const botLineExist = line + 1 < matrixOfLines.length;
  const leftPositionExist = position - 1 >= 0;
  const rightPositionExist = (index: number) => position + 1 < matrixOfLines[index].length;

  //if any of this conditions is true the number must be added else the number will be ignored
  for (let index = 0; index < numberLong; index++) {

    if (topLineExist && leftPositionExist && matrixOfLines[line - 1][position - 1] !== '.') { //check top - left
      return true
    }
    if (topLineExist && matrixOfLines[line - 1][position] !== '.') { //check top - middle
      return true
    }
    if (topLineExist && rightPositionExist(line - 1) && matrixOfLines[line - 1][position + 1] !== '.') { //check top - right
      return true
    }

    if (leftPositionExist && matrixOfLines[line][position - 1] !== '.') { //check left
      return true
    }
    if (rightPositionExist(line) && matrixOfLines[line][position + 1] !== '.') { //check right
      return true
    }

    if (botLineExist && leftPositionExist && matrixOfLines[line + 1][position - 1] !== '.') { // check bottom left
      return true
    }
    if (botLineExist && matrixOfLines[line + 1][position] !== '.') { // check bottom middle
      return true
    }
    if (botLineExist && rightPositionExist(line + 1) && matrixOfLines[line + 1][position + 1] !== '.') { //check bottom right
      return true
    }

    position += 1

  }
  return false


}
