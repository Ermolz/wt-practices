function findMaxProcedural(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

function findMaxFunctional(arr) {
    return arr.reduce((max, current) => current > max ? current : max);
}

const testArray = [3, 7, 2, 9, 1, 5, 8, 4, 6];
console.log('Test array:', testArray);
console.log('Max (procedural):', findMaxProcedural(testArray));
console.log('Max (functional):', findMaxFunctional(testArray));

