import { greet } from "./greeting.js";

const testData = [
  ["Luigi", "Howdy Luigi!"],
  ["Dalia", "Howdy Boss!"],
  ["Stefan", "Howdy Coach!"],
  ["Felix", "Howdy Coach!"],
  ["Thomas", "Howdy Coach!"],
  ["Carla", "Howdy Carla!"],
];

test.each(testData)(
  "returns correct greeting message",
  (name, expectedMessage) => {
    const message = greet(name);
    expect(message).toBe(expectedMessage);
  }
);
