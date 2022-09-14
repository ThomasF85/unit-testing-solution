# Challenges JS Unit Testing

You will use the JavaScript files in the js folder for these challenges.

## Teenager tests

- Open the `teenager.test.js` file and think about whether the tests here are fully testing the functionality of the `checkTeenagerStatus` function
- Edit the test or write new tests so the function is tested better
- If some of your test cases fail, think about whether the tests are wrong or whether the function implementation is wrong and fix it

**Optional**: You can use jest `each` to test multiple values with one test function

## Calculations tests

1. Test the function `cubicVolume` in `calculations.js` (create a new test file, make sure the function can be imported, think about how many tests or test cases you should have)

2. We want to add a new specification to the function: If one of the three arguments is a negative number, the function should return 0.
   - Write tests or test cases to test the new functionality first (Test Driven Development)
   - Your tests should fail now. Fix the function now, so that the new specification is implemented. Your tests should then pass.

## Greeting tests

The function `greet` in `greeting.js` has the following specifications:

- If the passed argument is the name of one of the coaches (`Stefan`, `Felix` or `Thomas`) it should return the string: "Howdy Coach!"
- If the passed argument is `Dalia` it should return "Howdy Boss!"
- If the passed argument is any other name it should return "Howdy name!" (where name is the value of the passed argument, e.g.: `greet("Luigi")` should return "Howdy Luigi!")

Write tests to test the functionality first (Test Driven Development).
Fully implement the function afterwards, so the tests pass.

## Extra challenge: Utilities tests

The file `utilities.js` contains the function `toggleBookmark`. A test for this function already exist.
You can find the test in the file `utilities.test.js`. The test is deactivated.

- Activate the test by replacing `test.skip(...)` with `test(...)`. The test should fail.
- Correctly implement the function `toggleBookmark` according to the following specifications, until the test passes:

1. The function receives an array of card objects and an id.
2. The function should return a new array of card objects of the same length as the array passed as an argument.
3. The returned array of card objects should contain the same card objects as the array passed as an argument and in the same order (except for the card object with matching id, see 4.).
4. The card object with the id matching the id passed as an argument should be replaced with a new card object in the returned array. The new card object should be identical to the original card object, except for the value of the bookmarked property, which should be flipped.
