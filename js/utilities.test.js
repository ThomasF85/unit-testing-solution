import { toggleBookmark } from "./utilities.js";

const card1Original = {
  id: "9612928f3ea5",
  question: "Question 1",
  answer: "Answer 1",
  tag: "Tag 1",
  bookmarked: false,
};

// The following code creates a copy of the object card1Original, but overwrites the
// bookmarked property of the new object
const card1Toggled = { ...card1Original, bookmarked: true };

const card2Original = {
  id: "18089f46e428",
  question: "Question 2",
  answer: "Answer 2",
  tag: "Tag 2",
  bookmarked: true,
};

const card2Toggled = { ...card2Original, bookmarked: false };

const card3Original = {
  id: "01ff6f1b936d",
  question: "Question 3",
  answer: "Answer 3",
  tag: "Tag 3",
  bookmarked: false,
};

const card3Toggled = { ...card3Original, bookmarked: true };

const cards = [card1Original, card2Original, card3Original];

test.skip("toggleBookmark returns an array with toggled bookmarked property for the correct card object", () => {
  const cardsToggled1 = toggleBookmark(cards, card1Original.id);
  const cardsToggled2 = toggleBookmark(cards, card2Original.id);
  const cardsToggled3 = toggleBookmark(cards, card3Original.id);

  expect(cardsToggled1).toEqual([card1Toggled, card2Original, card3Original]);
  expect(cardsToggled2).toEqual([card1Original, card2Toggled, card3Original]);
  expect(cardsToggled3).toEqual([card1Original, card2Original, card3Toggled]);

  // test that the original array has not been modified:
  expect(cards).toEqual([card1Original, card2Original, card3Original]);

  // test that the cards have not been modified:
  expect(card1Original).toEqual({
    id: "9612928f3ea5",
    question: "Question 1",
    answer: "Answer 1",
    tag: "Tag 1",
    bookmarked: false,
  });
  expect(card2Original).toEqual({
    id: "18089f46e428",
    question: "Question 2",
    answer: "Answer 2",
    tag: "Tag 2",
    bookmarked: true,
  });
  expect(card3Original).toEqual({
    id: "01ff6f1b936d",
    question: "Question 3",
    answer: "Answer 3",
    tag: "Tag 3",
    bookmarked: false,
  });
});
