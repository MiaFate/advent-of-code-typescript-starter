// Advent of Code - Day 3 - Part One
interface MatchedNumber {
  numero: number;
  largo: number;
  posicion: number;
  linea: number;
}
export function part1(input: string): number {
  if (input.trim() == "") return 0
  const re = /\w+/g
  let result = 0
  const arr = [[1, 3, 4], [2, 3, 4, 4, 6]]

  console.log(arr[1].length);
  console.log(arr.length);


  const arrayOfLines: string[] = input.split('\n');
  const numbers: MatchedNumber[] = []

  const cleanArrayOfLines = arrayOfLines.map((line, index) => {
    return line.replace(re, (match, offset) => {
      numbers.push({ numero: parseInt(match), largo: match.length, posicion: offset as number, linea: index })
      return (".".repeat(match.length))
    })
  })

  const matrixOfLines = cleanArrayOfLines.map(line => {
    const arr = line.split('')
    return arr
  })

  numbers.forEach(numero => {
    if (checkNumbers(numero, matrixOfLines)) {
      result += numero.numero
    }

  })

  return result;
}

function checkNumbers(numero: MatchedNumber, matrixOfLines: string[][]): boolean {

  let posicion = numero.posicion
  for (let index = 0; index < numero.largo; index++) {

    if ((numero.linea - 1) >= 0 && (posicion - 1) >= 0 && matrixOfLines[numero.linea - 1][posicion - 1] !== '.') {//
      return true
    }
    if ((numero.linea - 1) >= 0 && matrixOfLines[numero.linea - 1][posicion] !== '.') {
      return true
    }
    if ((numero.linea - 1) >= 0 && (posicion + 1 <= matrixOfLines[numero.linea - 1].length - 1) && matrixOfLines[numero.linea - 1][posicion + 1] !== '.') {
      return true
    }

    if ((posicion - 1) >= 0 && matrixOfLines[numero.linea][posicion - 1] !== '.') {
      return true
    }
    if ((posicion + 1) <= (matrixOfLines[numero.linea].length - 1) && matrixOfLines[numero.linea][posicion + 1] !== '.') {
      return true
    }

    if ((numero.linea + 1 < matrixOfLines.length) && (posicion - 1 >= 0) && matrixOfLines[numero.linea + 1][posicion - 1] !== '.') {
      return true
    }
    if ((numero.linea + 1 < matrixOfLines.length) && matrixOfLines[numero.linea + 1][posicion] !== '.') {
      return true
    }
    if ((numero.linea + 1 < matrixOfLines.length) && (posicion + 1 < matrixOfLines[numero.linea + 1].length) && matrixOfLines[numero.linea + 1][posicion + 1] !== '.') {
      return true
    }
    posicion += 1

  }
  return false


}


