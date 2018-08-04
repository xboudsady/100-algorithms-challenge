function absoluteValuesSumMinization(a) {
    const isEven = a.length % 2 === 0;

    if (isEven) {
        return a[(a.length / 2) - 1];
    } else {
        return a[Math.floor(a.length / 2)];
    }
}

console.log(absoluteValuesSumMinization([2, 4, 7])); // --> 4
// console.log(absoluteValuesSumMinization([2, 4, 7, 6])); // --> 4
// console.log(absoluteValuesSumMinization([2, 3, 7, 6, 6])); // --> 7
// console.log(absoluteValuesSumMinization([2, 4, 7, 6, 6, 8])); // --> 7