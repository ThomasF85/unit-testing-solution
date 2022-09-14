import { checkTeenagerStatus } from "./teenager.js";

test("returns correct teenager status", () => {
  const teenagerStatus = checkTeenagerStatus(15);
  expect(teenagerStatus).toBe(true);
});
