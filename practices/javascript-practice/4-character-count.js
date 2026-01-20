function countCharacters(str) {
    const charCount = {};
    for (let char of str) {
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }
    return charCount;
}

const testString = "hello world";
console.log('Input string:', testString);
const result = countCharacters(testString);
console.log('Character counts:');
for (let char in result) {
    console.log(`  '${char}': ${result[char]}`);
}

