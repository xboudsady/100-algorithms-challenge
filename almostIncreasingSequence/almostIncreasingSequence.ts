function almostIncreasingSequence(sequence: number[]): boolean {
  // Set our counter
  let count = 0;

  // First loop through our array of numbers
  for (let i = 0; i < sequence.length; i++) {
    // Compare current number, to it's previous number
    if (sequence[i] <= sequence[i - 1]) {
      // Incrase counter of array
      count++;
      // Check if our current number after count++ is less than 2 numbers back AND the number ahead of it is less than the number before it
      if (
        sequence[i] <= sequence[i - 2] &&
        sequence[i + 1] <= sequence[i - 1]
      ) {
        return false;
      }
    }
  }
  // Evaluate if number of count is more than 1, meaning 2 or more out of increasing sequence
  return count <= 1;
}

console.log(almostIncreasingSequence([1, 3, 1, 2]));
console.log(almostIncreasingSequence([1, 3, 2]));
