function maxFor(arr) {
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) max = arr[i];
    }

    return max;
}

function maxReduce(arr) {
    return arr.reduce((max, value) => value > max ? value : max);
}

function sortString(str) {
    return str.split('').sort().join('');
}

// Демонстрація
const demoArray = [-10, -4, -111, -8, -23, -7];

// console.log("=== maxFor ===");
// console.log(maxFor(demoArray));
//
// console.log("=== maxReduce ===");
// console.log(maxReduce(demoArray));

//let x = Number.MAX_SAFE_INTEGER + 1;
//console.log((x++) < x); // false

//console.log(sortString("nodejs")); // dejnos



// function sortArray(arr, comparator) {
//     const arrCopy = [...arr];
//
//     arrCopy.sort(comparator);
//
//     return arrCopy;
// }
//
// const descendingComparator = (a, b) => b - a;
//
// const numbers = [5, 2, 9, 1, 7];
// const sortedNumbers = sortArray(numbers, descendingComparator);
//
// console.log("Start:", numbers);
// console.log("Sorted:", sortedNumbers);

// let x = new Number(0);
// let y = 0;
// let z = new Number(0);
//
// console.log(x == y);
// console.log(y == z);
// console.log(x == z);
//
// const text = "Hello world";
// const charCount = {};
//
// for (const char of text) {
//     charCount[char] = (charCount[char] || 0) + 1;
// }
//
// console.log(charCount);

const dictionary = [
    "listen", "silent", "enlist", "tinsel",
    "save", "vase",
    "angel", "glean", "angle",
    "evil", "vile", "live", "veil",
    "dusty", "study",
    "stone", "tones", "notes",
    "brag", "grab",
    "banana", "apple"
];

function sortLetters(word) {
    return word.split('').sort().join('');
}

function findAnagrams(words) {
    const map = {};

    words.forEach(word => {
        const key = sortLetters(word);
        if (!map[key]) {
            map[key] = [];
        }
        map[key].push(word);
    });

    const anagramGroups = Object.values(map).filter(group => group.length > 1);

    return anagramGroups;
}

const anagrams = findAnagrams(dictionary);

console.log("Anagrams:");
anagrams.forEach((group, index) => {
    console.log(`${group.join('-')}`);
});