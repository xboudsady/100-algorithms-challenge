## Challenge

Given a rectangular matrix of characters, add a border of asterisks **(\*)** to it.

**Example**

For

```javascript
picture = ["abc", "ded"];
```

the output should be

```javascript
addBorder(picture) = ["*****",
                    "*abc*",
                    "*ded*",
                    "*****"]
```

**Hints**

- concat()
- unshift()
- push()

**Input/Output**

- **[time limit] 4000ms (js)**
- **[input] array.string picture**

A non-empty array of non-empty equal-length strings.

_Guaranteed constraints_:

1 ≤ picture.length ≤ 5,

1 ≤ picture[i].length ≤ 5.

- **[output] array.string**

The same matrix of characters, framed with a border of asterisks of width 1.

---

## Approach - typescript

---

### 1. The setup

```typescript
function addBorder(picture: string[]): string[] {}
```

### 2. All the strings are going to be even in length. To find the size of our wall, all we have to do is take the first value, get the length of it and then add 2.

- Initialize a variable to hold the value of our wall length
- And this is going to be of type number, we don't have to explicitly say. It will implicitly assign it.
- Start by creating `'*'` in the assignment.
- Use the `'*'.repeat()` method
  - > The `repeat()` method constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.

* Then pass in the parameter `'*'.repeat(picture[0].length + 2)`
* Use index zero, as it will be an array of character, the `.length()` will count the number of index in the array of character, then we add 2 which gives us a wall 2 characters longer than the string elements

```typescript
function addBorder(picture: string[]): string[] {
  const wall = "*".repeat(picture[0].length + 2);
}
```

### 3. Now we need to consider creating a starting wall, and and ending wall.

- We can do that by taking our `picture` parameter when we pass in, and modify it.
- Take the `picture` parameter, and use `.unshift(wall)`
  - > The `unshift()` method adds one or more elements to the beginning of an array and returns the new length of the array.
- Then we use `.push(wall)` to push the wall built in the loop to the **end** of the `picture` array of chracters
  - > The `push()` method adds one or more elements to the end of an array and returns the new length of the array.

```typescript
function addBorder(picture: string[]): string[] {
  const wall = "*".repeat(picture[0].length + 2);

  picture.unshift(wall);
  picture.push(wall);

  return picture;
}
```

### 4. Then we need to need to concat the walls with the values, & concat (\*) to each string element

- We use a `for` loop to take care of that for us.
  - We set `i = 1` as we already shifted the array when we used `.unshift()` eariler which gave it a new zero index [0], which is our wall symbol
  - Use `picture.length -1` bcause we don't want to include our last element (which was our wall in the `.push()` in the previous step)
  - We the concat `(*)` to the string element in the array which puts it in front of it
  - then in the `.concat(picture[i], '*')` we pass in a second paramter to put it at the end

```typescript
function addBorder(picture: string[]): string[] {
  const wall = "*".repeate(picture[0].length + 2);

  picture.unshift(wall);
  picture.push(wall);

  for (let i = 1; i < picture.length - 1; i++) {
    picture[i] = "*".concat(picture[i], "*");
  }

  return picture;
}

console.log(addBorder(["abc", "ded"])); // --> [ '*****', '*abc*', '*ded*', '*****']
```

Javascript Version

```javascript
function addBorder(picture) {
  const wall = "*".repeat(picture[0].length + 2);

  picture.unshift(wall);
  picture.push(wall);

  for (let i = 1; i < picture.length - 1; i++) {
    picture[i] = "*".concat(picture[i], "*");
  }

  return picture;
}

console.log(addBorder(["abc", "ded"])); // --> [ '*****', '*abc*', '*ded*', '*****']
```
