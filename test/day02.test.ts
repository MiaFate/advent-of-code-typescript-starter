// Advent of Code - Day 2
import { readFile } from 'fs/promises';
import { part1, part2 } from '../src/day02';

test('part one test', () => {
  expect(part1("")).toBe(0);
});

test('part two test', () => {
  expect(part2("")).toBe(0);
});

test('part one test 2', async () => {
  const input: string = await readFile('src/day02/resources/inputPart1.txt', 'utf8');
  expect(part1(input)).toBe(8)
});

test('part two test 2', async () => {
  const input: string = await readFile('src/day02/resources/inputPart2.txt', 'utf8');
  expect(part2(input)).toBe(0)
});
