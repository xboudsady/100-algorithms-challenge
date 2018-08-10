## Challenge

Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.

**Example**

- For `sequence = [1, 3, 2, 1]`, the output should be almostIncreasingSequence(sequence) = false;
  There is no one element in this array that can be removed in order to get a strictly increasing sequence.

- For `sequence = [1, 3, 2]`, the output should be almostIncreasingSequence(sequence) = true.
  You can remove 3 from the array to get the strictly increasing sequence [1, 2]. Alternately, you can remove 2 to get the strictly increasing sequence [1, 3].

**Hints**

- Nope

**Input/Output**

- [time limit] 4000ms (js)
- [input] array.integer sequence

_Guaranteed constraints:_

`2 ≤ sequence.length ≤ 105`,

`-105 ≤ sequence[i] ≤ 105`.

**[output] boolean**

Return true if it is possible to remove one element from the array in order to get a strictly increasing sequence, otherwise return false.

---

## Approach

---

1.  Create a count variable to store how many times numbers are out of sync.

```typescript
function almostIncreasingSequence(sequence: number[]): boolean {}
```

2.  Create a count variable to store how many times numbers are out of sync.

    We want to return `true` if `count <= 1`, meaning if it's zero, it passes. If its 1 it passes. If it's 2 or more items are out of synce, then it is not in almost increasing sequence.

```typescript
function almostIncreasingSequence(sequence: number[]): boolean {
  let count = 0;

  return count <= 1;
}
```

3.  Now that we know our condition, all we have to do is iterate through the array, and understand situation where we iterate through if we're going to have issue with the number order.

    We'll do a normal `for` loop, because of the logic; because we want access to the index value.

```typescript
function almostIncreasingSequence(sequence: number[]): boolean {
  let count = 0;

  for (let i = 0; i < sequence.length; i++) {}

  return count <= 1;
}
```

4.  We're going to have two nested if statements.

    First one is testing if `sequence[i] <= sequence.[i - 1]`. If that is a `true` statement, meanining the value after it, the second value is less than the first value in order, we're going to add 1 to the count.

```typescript
function almostIncreasingSequence(sequence: number[]): boolean {
  let count = 0;

  for (let i = 0; i < sequence.length; i++) {
    if (sequence[i] <= sequence[i - 1]) {
      count++;
    }
  }

  return count <= 1;
}
```

5.  We're going to do another nest `if` here, because it is an almost increasing sequence. We need to check that if two values back, is less that value, AND the one value ahead is less than one value behind.

    Because if it is, that is our second item that going to break the count. Because we're giving it one pass not two.

    Is our current value we're checking also less than two values before that.

    AND, the sequence our 1 value ahead, is less than or equal to the value before it.

```typescript
function almostIncreasingSequence(sequence: number[]): boolean {
  let count = 0;

  for (let i = 0; i < sequence.length; i++) {
    if (sequence[i] <= sequence[i - 1]) {
      count++;
      if (
        sequence[i] <= sequence[i - 2] &&
        sequence[i + 1] <= sequence[i - 1]
      ) {
        return false;
      }
    }
  }

  return count <= 1;
}

console.log(almostIncreasingSequence([1, 3, 1, 2])); /* false */
console.log(almostIncreasingSequence([1, 3, 2])); /* true */
```

Javascript Version

```javascript
function almostIncreasingSequence(sequence) {
  let count = 0;

  for (let i = 0; i < sequence.length; i++) {
    if (sequence[i] <= sequence[i - 1]) {
      count++;
      if (
        sequence[i] <= sequence[i - 2] &&
        sequence[i + 1] <= sequence[i - 1]
      ) {
        return false;
      }
    }
  }

  return count <= 1;
}

console.log(almostIncreasingSequence([1, 3, 1, 2])); /* false */
console.log(almostIncreasingSequence([1, 3, 2])); /* true */
```
