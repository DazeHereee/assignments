/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/
function sorted(str) {
    return str.split('').sort().join('');
}

function countVowels(str) {
    let count = 0;
    for(const char of str) {
      const vowels = ['a', 'e', 'i', 'o', 'u'];
      if(vowels.includes(char.toLowerCase())) count++;
    }
    return count;
}

module.exports = countVowels;