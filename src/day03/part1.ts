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
      //console.log(numero);

      result += numero.numero
    }
    //console.log(result);

  })

  // console.log(numbers);
  // console.log(matrixOfLines);

  return result;
}

function checkNumbers(numero: MatchedNumber, matrixOfLines: string[][]): boolean {

  // const coord = []
  let posicion = numero.posicion
  for (let index = 0; index < numero.largo; index++) {
    //console.log(posicion);


    if ((numero.linea - 1) >= 0 && matrixOfLines[numero.linea - 1][posicion - 1] !== '.') {//
      return true
    }
    if ((numero.linea - 1) >= 0 && matrixOfLines[numero.linea - 1][posicion] !== '.') {
      return true
    }
    if ((numero.linea - 1) >= 0 && matrixOfLines[numero.linea - 1][posicion + 1] !== '.') {
      return true
    }

    if ((posicion - 1) >= 0 && matrixOfLines[numero.linea][posicion - 1] !== '.') {
      return true
    }
    // if (matrixOfLines[numero.linea][posicion] !== '.') {
    //   return true
    // }
    if ((posicion + 1) <= (matrixOfLines[numero.linea].length - 1) && matrixOfLines[numero.linea][posicion + 1] !== '.') {
      return true
    }
    // && (posicion - 1 >= 0)
    if ((numero.linea + 1 < matrixOfLines[numero.linea].length) && matrixOfLines[numero.linea + 1][posicion - 1] !== '.') {
      return true
    }
    if ((numero.linea + 1 < matrixOfLines[numero.linea].length) && matrixOfLines[numero.linea + 1][posicion] !== '.') {
      return true
    }
    if ((numero.linea + 1 < matrixOfLines[numero.linea].length) && matrixOfLines[numero.linea + 1][posicion + 1] !== '.') {
      return true
    }
    // coord.push([numero.linea, posicion])
    posicion += 1

  }
  // console.log(coord);
  return false


}
// console.log(input.replace(re, (match, offset) => {
//   console.log(offset);
//   numbers.push({ largo: match.length, numero: parseInt(match), posicion: offset as number })
//   return ("n".repeat(match.length))
// }))


// arrayOfLines.forEach(element => {
// });
// const matrixOfLines = arrayOfLines.map(line => {
//   const arr = line.split('')
//   return arr
// })
// matrixOfLines.forEach((line, lineIndex)=>{
//   line.forEach((element, elementIndex)=>{
//     if (matrixOfLines[lineIndex][]) {

//     }
//   })
// })

