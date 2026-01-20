function sortDescending(arr) {
    return [...arr].sort((a, b) => b - a);
}

const originalArray = [3, 7, 2, 9, 1, 5, 8, 4, 6];
console.log('Original array:', originalArray);
const sortedArray = sortDescending(originalArray);
console.log('Sorted (descending):', sortedArray);
console.log('Original unchanged:', originalArray);

