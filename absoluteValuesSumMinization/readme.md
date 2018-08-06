## Challenge

---

Given a sorted array of integers **a**, find an integer **x** from **a** such that the value of

```javascript
abs(a[0] - x) + abs(a[1] - x) + ... + abs(a[a.length -1] - x)
```

is the smallest possible (here **abs** denotes the aboslute value). If there are several possible answers, output the smallest one.

**Example**
For a = [2, 4, 7], the output should be absoluteValuesSumMinization(a) = 4.

For a = [2,4,7,6], the output should be absoluteValuesSumMinization(a) = 4.

**Hints**

- Math.floor()

**Input/Output**

- **[time limit] 4000ms (js)**
- **[input] array.integer a**

A non-empty array of integers,sorted in ascending order.

_Guranteed constraints:_

1 ≤ a.lenth ≤ 200,
-106 ≤ a[i] ≤ 106.

- **[output] integer**

---

## Approach - typescript

---

Simply speaking ...

Trying to get the median value in a way. One way that we're going to deal when its an even array, is we're going to take the left element, because we'll have 2 numbers.

How do we find out if it's even or odd?

### 1. We can create a variable to check for our passing array length, and use % to see if it's equal to zero. (Even number, no remainder)

```typescript
function absoluteValuesSumMiniation(a: number[]): number {
  const isEven = a.length === 0;
}
```

### 2. We use the ternary operator return if its even or odd

```typescript
function absoluteValuesSumMiniation(a: number[]): number {
    const isEven = a.length === 0;

    return isEven ? :;
}
```

### 3. If it's even...

    - We take the length of the array and divide by 2 to get us halfway point of the array
    - Then we -1 to take the value to the left

```typescript
function absoluteValuesSumMiniation(a: number[]): number {
    const isEven = a.length === 0;

    return isEven ? a[a.length / 2 -1] :;
}
```

### 4. If it's odd...

    - We take the length of the array and divide by 2 to get us halfway point of the array
    - Because its odd, it wont be divisible by 2 and; so we use **Math.floor()** to get an whole number instead of a float

```typescript
function absoluteValuesSumMiniation(a: number[]): number {
    const isEven = a.length === 0;

    return isEven ? a[(a.length / 2) - 1] : a[Math.floor(a.length / 2);
}
```

Javascript version

```javascript
function absoluteValuesSumMinization(a) {
  const isEven = a.length % 2 === 0;

  if (isEven) {
    return a[a.length / 2 - 1];
  } else {
    return a[Math.floor(a.length / 2)];
  }
}
```

### Example Output

```typescript
console.log(absoluteValuesSumMinization([2, 4, 7])); // --> 4
console.log(absoluteValuesSumMinization([2, 4, 7, 6])); // --> 4
console.log(absoluteValuesSumMinization([2, 3, 7, 6, 6])); // --> 7
console.log(absoluteValuesSumMinization([2, 4, 7, 6, 6, 8])); // --> 7
```
