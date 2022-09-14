import { checkTeenagerStatus } from "./teenager.js";

const testData = [
  [3, false],
  [12, false],
  [13, true],
  [19, true],
  [20, false],
  [42, false],
];

test.each(testData)(
  "returns correct teenager status",
  (age, expectedStatus) => {
    const teenagerStatus = checkTeenagerStatus(age);
    expect(teenagerStatus).toBe(expectedStatus);
  }
);
