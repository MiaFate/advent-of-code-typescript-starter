// Advent of Code - Day 1
import { readFile } from 'fs/promises';
import { part1, part2 } from '../src/day01';

test('part one test', () => {
  expect(part1("")).toBe(0);
});

test('part two test', () => {
  expect(part2("")).toBe(0);
});

test('part two test 2', async () => {
  const input: string = await readFile('src/day01/resources/inputShort.txt', 'utf8');
  expect(part2(input)).toBe(281)
});
