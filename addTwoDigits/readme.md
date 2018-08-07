## Challenge

You are given a two-digit integer `n`. Return the sum of its digits.

**Example**

For `n = 29`, the output should be `addTwoDigits(n) = 11`.

**Hint**

- `split()`
- `parseInt()`
- `toString()`
- `reduce()`

**Input/Output**

- **[execution time limit] 4 seconds (js)**

- **[input] integer `n`**

- A positive two-digit integer.

_Guaranteed constraints:_

10 ≤ n ≤ 99.

- **[output] integer**

The sum of the first and second digits of the input number.

---

## Approach

---

1.  The Setup

    ```typescript
    function addTwoDigits(n: any): number {}
    ```

2.  We want to tur the passing argument in the parameter to a string, so we can split it.

    - Initialize a variable called `nums`
    - Assign the value `n` which is the parameter to `n.toString()` to covert it to a string of character
    - Then we use `.split()` to create an array of characters

    ```typescript
    function addTwoDigits(n: any): number {
      const nums = n.toString().split("");
    }
    ```

3.  Then use `reduce()` to call a function to add up the value, and return its value

    - The `reduce()` method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.

    * The `reduce()` method takes in a `function` with two parameters,
      - The first is the `accumulator` the number to be added
      - The second is the `currentValue`
      - In the fucntion code block, we add the `accumulator + currentValue`

    ```typescript
    function addTwoDigits(n: any): number {
      const nums = n.toString().split("");

      return nums.reduce((a: string, b: string) => {
        return a + b;
      });
    }
    ```

4.  Convert the added string back into an integer.

    - Since the return value is two `strings` added together, we need to convert them to `int` by using the `parstInt()` method.

    ```typescript
    function addTwoDigits(n: any): number {
      const nums = n.toString().split("");

      return nums.reduce((a: string, b: string) => {
        return parseInt(a) + parseInt(b);
      });
    }

    console.log(addTwoDigits(29)); /* --> 11 */
    ```

5.  Alternate Solution

    - We can return the sum of both `parseInt()`, of index[0], and index[1] of the `num` array of character during our previous step

    ```typescript
    function addTwoDigits(n: any): number {
      const nums = n.toString().split("");

      return parseInt(nums[0]) + parseInt(nums[1]);
    }
    ```

Javascript Version

```javascript
function addTwoDigits(n) {
  const nums = n.toString().split("");

  return nums.reduce((accumulator, currentValue) => {
    return parseInt(accumulator) + parseInt(currentValue);
  });
}

console.log(addTwoDigits(29));
```
