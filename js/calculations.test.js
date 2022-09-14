import { cubicVolume } from "./calculations.js";

const testData = [
  [2, 3, 4, 24],
  [4, 3, 4, 48],
  [5, 5, 5, 125],
  [1, 0, 3, 0],
  [1, -4, 3, 0],
  [-1, 2, 5, 0],
];

test.each(testData)(
  "returns correct cubic volume",
  (length, width, depth, expectedVolume) => {
    const volume = cubicVolume(length, width, depth);
    expect(volume).toBe(expectedVolume);
  }
);
