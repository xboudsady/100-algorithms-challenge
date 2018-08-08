## Challenge

Given an array of strings, return another array containing all of its longest strings.

**Example**

For `inputArray = ["aba", "aa", "ad", "vcd", "aba"]`, the output should be `allLongestStrings(inputArray) = ["aba", "vcd", "aba"]`.

**Hints**

- None

**Input/Output**

- **[time limit] 4000ms (js)**
- **[input] array.string inputArray**

A non-empty array.

_Guaranteed constraints:_

`1 ≤ inputArray.length ≤ 10`,

`1 ≤ inputArray[i].length ≤ 10`.

- **[output] array.string**

Array of the longest strings, stored in the same order as in the inputArray.

---

## Approach

---

1.  Setup

    ```typescript
    function allLongestStrings(inputArray: string[]): string[] {}
    ```

2.  First objective is find out, what the longest length of the largest string is, in our array.

    Start by creating a variable to hold the value of `0` our counter.

    ```typescript
    function allLongestStrings(inputArray: string[]): string[] {
      let longestLength = 0;
    }
    ```

    Then we will iterate through each one usig the `forEach()` method.

    ```typescript
    function allLongestStrings(inputArray: string[]): string[] {
        let longestLength = 0;

        inputArray.forEach(((word: string) => {
            // Code Block here...
        )};
    }
    ```

    Now we want to compare the length of the `word` in array loop, to our `longestLength` variable which is set at zero..

    We use a ternary operator to test. Is `longestLength < word.length`, if it is `true`, then return `word.length` else if `false` return `longestLength` and set it equal to itself.

    ```typescript
    function allLongestStrings(inputArray: string[]): string[] {
        let longestLength = 0;

        inputArray.forEach(((word: string) => {
            longestLength = longestLength < word.length ? : longestLength;
        )};
    }
    ```

3.  Now we need a way to return the longest word.

    We start by initializeing a variable to hold our longest word in an empty array.

    ```typescript
    function allLongestStrings(inputArray: string[]): string[] {
        let longestLength = 0;
        const longestWords = [];

        inputArray.forEach(((word: string) => {
            longestLength = longestLength < word.length ? : longestLength;
        )};

        return longestWords;
    }
    ```

    No we iterate one more time through that array.

    ```typescript
    function allLongestStrings(inputArray: string[]): string[] {
        let longestLength = 0;
        const longestWords = [];

        inputArray.forEach(((word: string) => {
            longestLength = longestLength < word.length ? : longestLength;
        )};

        inputArray.forEach((word: string) => {
            // Code block here...
        )};

        return longestWords;
    }
    ```

    Test to condition in the loop. If the `word` in the array matches our `longestLength` variable we found in the previous loop.

    If it's true, we push that word into our empty array called `longestWords`.

    ```typescript
    function allLongestStrings(inputArray: string[]): string[] {
        let longestLength = 0;
        const longestWords = [];

        inputArray.forEach(((word: string) => {
            longestLength = longestLength < word.length ? : longestLength;
        )};

        inputArray.forEach((word: string) => {
            if(word.length === longestLength) {
                longestWords.push(word);
            }
        )};

        return longestWords;
    }

    console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"])); // --> ['aba', 'vcd', aba']
    ```

Javascript Version

```javascript
function allLongestStrings(inputArray) {
  let longestLength = 0;
  const longestWords = [];

  inputArray.forEach(word => {
    longestLength = longestLength < word.length ? word.length : longestLength;
  });

  inputArray.forEach(word => {
    if (word.length === longestLength) {
      longestWords.push(word);
    }
  });

  return longestWords;
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));
```
