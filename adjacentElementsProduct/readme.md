## Challenge

Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

**Example**

For `inputArray = [3, 6, -2, -5, 7, 3]`, the output should be adjacentElementsProduct`(inputArray) = 21`.

`7` and `3` produce the largest product.

**Hints**

- None

**Input/Output**

- **[time limit] 4000ms (js)**
- **[input] array.integer inputArray**

An array of integers containing at least two elements.

Guaranteed constraints:

`2 ≤ inputArray.length ≤ 10, -1000 ≤ inputArray[i] ≤ 1000.`

- **[output] integer**

The largest product of adjacent elements.

---

## Approach

---

1.  The Setup

    ```typeScript
    function adjacentElementsProduct(inputArray: number[]): number {
        // Code block here...
    }
    ```

2.  We'll need to setup an intial baseline value

    - We don't want to set the intial value to zero, because we need to account for negative values in the array
    - Instead, we'll instantiate the largest product to be equal to the first input
    - This sets our first baseline, or starting point...
    - Then return the it's value

    ```typescript
    function adjacentElementsProduct(inputArray: number[]): number {
      let largestProduct = inputArray[0] * inputArray[1];

      return largestProduct;
    }
    ```

3.  Then we'll want to iterate over our array in a `for` loop

    - Start the loop by instantiating `i = 1` because we already took care of zero,
    - zero wont mulitply anythign but the one to it's right, as there's nothing to its left
    - in our loopn condition we use `inputArray.length - 1` because we don't want a results of `NaN` because there is no number to the right to multiply by
    - Then create a local variable with its value the `inputArray[i]` index mulitplied by its `inputarray[i] + 1`, which is the next number to to it's right


    ```typescript
    function adjacentElementsProduct(inputArray: number[]): number {
      let largestProduct = inputArray[0] * inputArray[1];

        for (let i = 1; i < inputArray.length - 1; i++) {
            const product = inputArray[i] * inputArray[i + 1];
        }

      return largestProduct;
    }
    ```

4.  We then use a ternary operator to compare the results of the multiplication

    - Start by re-assigning our or first variable, also the base line variable
    - If the our baseline variable `largestProduct` in the first step is less than our `product` from our loop, then return `product`
    - If it's not... return `largestProduct` back to itself
    - The loop continues until `largestProduct` is larger than `product`

    ```typescript
    function adjacentElementsProduct(inputArray: number[]): number {
      let largestProduct = inputArray[0] * inputArray[1];

      for (let i = 1; i < inputArray.length - 1; i++) {
        const product = inputArray[i] * inputArray[i + 1];

        largestProduct = largestProduct < product ? product : largestProduct;
      }

      return largestProduct;
    }

    console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3])); // --> 21
    ```

    Javascript Version

    ```javascript
    function adjacentElementsProduct(inputArray) {
      let largestProduct = inputArray[0] * inputArray[1];

      for (let i = 1; i < inputArray.length - 1; i++) {
        const product = inputArray[i] * inputArray[i + 1];

        largestProduct = largestProduct < product ? product : largestProduct;
      }

      return largestProduct;
    }

    console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));
    ```
