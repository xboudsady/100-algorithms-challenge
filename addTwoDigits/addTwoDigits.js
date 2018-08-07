function addTwoDigits(n) {
    const nums = n.toString().split("");

    return nums.reduce((accumulator, currentValue) => {
        return parseInt(accumulator) + parseInt(currentValue);
    });
}

console.log(addTwoDigits(29));