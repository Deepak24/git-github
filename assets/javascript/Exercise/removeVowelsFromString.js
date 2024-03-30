/**
 * Description : Remove vowels from string
 */
const string1 = "The quick browm for jumps over the lazy dog";

function getStrNoVowels(str1) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let result = "";
    for (let char of str1) {
        if(!vowels.includes(char.toLowerCase())) {
            result += char;
        }
    }
    return result;
}

const updatedStr = getStrNoVowels(string1);
console.log(updatedStr);