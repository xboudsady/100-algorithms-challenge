## Challenge

1.  Write a function that returns the sum of two numbers.
2.  Write a function that returns the sum of all numbers regardless of # of parameters

**Example**

For `param1 = param2 = 2`, the output should be `add(params1, params2) = 3`.

**Hints**

- Arithmetic Operators
- Rest Operator
- forEach()

**Input/Output**

- **[time limit] 4000ms (js)**
- **[input] integer params1**

Guranteed constraints:

-1 ≤ params ≤ 1000.

**[input] integer params2**

Guranteed constratins: -100 ≤ params2 ≤ 1000.

**[output] integer**

The sum of the two inputs.

---

## Approach - typescript

---

For the setup, we first create a function that takes two parameters, and since we're using typescript, we'll be passing setting the data type also.

```typescript
function add(param1: number, param2: number): number {
  // Code block here...
}
```

### Part 1.

1.  For Part I, we simply add the two parameters, and return the value

```typescript
function add(param1: number, param2: number): number {
  return param1 + param2;
}

console.log(add(1, 2)); // --> 3
console.log(add(3, 2)); // --> 5
```

2.  For Part II, we need to be able to add up any number of parameters passed in.

- How would we handle that, since theres is no fix number of parameters in thie function?

- We will need to use the rest operator,

  > The **rest parameter** syntax allows us to represent an indefinite number of arguments as an array

- This will allow us to take any #'s of parameters, to an array
- Which, we can then loop through the array, using the `.forEach()` method.

  1.  The setup

      - Use the `...` before our parater to use the rest operator, give it a type number, and array


  ```typescript
  function add2(...param1: number[]): number {
    /* Code block here... */
  }
  ```

  2.  Create a variable to store 0,
      - so we can add to the variable as we loop through the array.


  ```typescript
  function add2(...param1: number[]): number {
    let total = 0; /* Sore initial value of our total */
  }
  ```

  3.  Use the `.forEach()` method to loop through the array,
      - and use a call back function to execute the code block as it iterate


  ```typescript
  function add2(...param1: number[]): number {
    let total = 0;

    param1.forEach(num => {
      /* Code block here ... */
    });
  }
  ```

  4.  We then add the value to `total` each time we iterate,
      - until the last item in item in the array


  ```typescript
  function add2(...param1: number[]): number {
    let total = 0;

    param1.forEach(num => {
      total += num; /* Increment by next number in array */
    });
  }
  ```

  5.  We then return the value of total


  ```typescript
  functiona add(...param1: number[]): number {
      let total = 0;

      param1.forEach((num) => {
          total += num;
      });

      return total;                   /* Returning the total */
  }

  /* Output */

  console.log(add2(1,2,3,4,5)); /* --> 15 */
  console.log(add2(2,3)); /* --> 5 */
  ```

Javascript Version

```javascript
// Part 1

function add(param1, param2) {
  return param1 + param2;
}

console.log(add(1, 2)); // --> 3
console.log(add(2, 3)); // --> 5

// Part 2

function add2(...param1) {
  let total = 0;

  param1.forEach(num => {
    total += num;
  });

  return total;
}

console.log(add2(1, 2, 3, 4, 5)); // --> 15
console.log(add2(2, 3)); // --> 5
```
