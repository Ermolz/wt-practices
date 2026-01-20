const fs = require('fs');

function sortString(str) {
    return str.split('').sort().join('');
}

function findAnagrams(dictionary) {
    const anagramGroups = {};
    
    for (let word of dictionary) {
        const sorted = sortString(word.toLowerCase());
        if (!anagramGroups[sorted]) {
            anagramGroups[sorted] = [];
        }
        anagramGroups[sorted].push(word);
    }
    
    return anagramGroups;
}

function formatAnagrams(anagramGroups) {
    const result = [];
    for (let key in anagramGroups) {
        if (anagramGroups[key].length >= 2) {
            result.push(anagramGroups[key].join(' -- '));
        }
    }
    return result;
}

const dictionary = [
    'автор', 'товар', 'тавро',
    'літо', 'тіло',
    'кума', 'мука', 'умка',
    'кот', 'ток',
    'сон', 'нос'
];

console.log('Dictionary:', dictionary);
const anagramGroups = findAnagrams(dictionary);
const formatted = formatAnagrams(anagramGroups);

console.log('\nAnagram groups (2+ words):');
formatted.forEach(group => console.log(group));

