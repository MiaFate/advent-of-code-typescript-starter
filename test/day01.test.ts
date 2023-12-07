// Advent of Code - Day 1
import { readFile } from 'fs/promises';
import { part1, part2, } from '../src/day01';
import { filterLineNumber } from "../src/day01/part1";
import { filteredLineNumber } from '../src/day01/part2';

test('part one test', () => {
  expect(part1("")).toBe(0);
  expect(part1("")).not.toBeNaN();
});

test('part two test', () => {
  expect(part2("")).toBe(0);
  expect(part2("")).not.toBeNaN();
});

describe('part one short test', () => {

  it("should return 142 as a number", async () => {
    const input: string = await readFile('src/day01/resources/inputPart1.txt', 'utf8');
    expect(part1(input)).toBe(142)
  })

  it("shouldn't return undefined", async () => {
    const input: string = await readFile('src/day01/resources/inputPart1.txt', 'utf8');
    expect(part1(input)).not.toBeUndefined()
  })

});

describe('part two short test', () => {

  it("should return 281 as a number", async () => {
    const input: string = await readFile('src/day01/resources/inputShort.txt', 'utf8');
    expect(part2(input)).toBe(281)
  })
  it("shouldn't return 281 undefined", async () => {
    const input: string = await readFile('src/day01/resources/inputShort.txt', 'utf8');
    expect(part2(input)).not.toBeUndefined()
    expect(input).toBe("two1nine\neightwothree\nabcone2threexyz\nxtwone3four\n4nineeightseven2\nzoneight234\n7pqrstsixteen")
  })


});

test('part1 filterLineNumber', () => {
  expect(filterLineNumber("two1nine")).toBe(11)
  expect(filterLineNumber("eightwothree")).toBe(0)
})

test('part2 filteredLineNumber', () => {
  expect(filteredLineNumber("4pvjgzptwoqdrkjthtninesixfour5six")).toBe(46)
  expect(filteredLineNumber("gptkdhsdjz8dgpmddsfdbncgsfdzknxjrlzrcfive")).toBe(85)
})
test('part2 filteredLineNumber', () => {
  expect(filteredLineNumber("4pvjgzptwoqdrkjthtninesixfour5six")).not.toBeNaN()
  expect(filteredLineNumber("")).not.toBeNaN()
  expect(filteredLineNumber("")).not.toBeUndefined()
  expect(filteredLineNumber("eightwo")).not.toBeNull()

})

// describe('part two short test of function', () => {
//   it("shouldn't return NaN", () => {
//     expect(filteredLineNumber("")).not.toBeNaN()
//   })

// });