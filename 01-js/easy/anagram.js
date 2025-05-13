/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function sorted(str) {
    return str.split('').sort().join('');
}

function isAnagram(str1, str2) {
    str1 = str1.replace('/\s/g',' ').trim().toLowerCase();
    str2 = str2.replace('/\s/g',' ').trim().toLowerCase();

    const sortedStr1 = sorted(str1);
    const sortedStr2 = sorted(str2);


    if (sortedStr1.length != sortedStr2.length){
        return false;
    }

    let n = sortedStr1.length;
    
    for (let i = 0; i < n; i++){
              if (sortedStr1[i] != sortedStr2[i]){
            return false;
        }
    }

    return true;
}

module.exports = isAnagram;
