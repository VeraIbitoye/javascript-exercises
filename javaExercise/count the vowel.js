// a function that takes a string as input and returns the number of vowels in the string.
 
const myName = "ibitoye veracity";
const vowelCount = countVowels(myName);
console.log(vowelCount); 

function countVowels(str) {
    const vowels = 'aeiou';
    let count = 0;
    
    for (let i = 0; i < str.length; i++) {
      if (vowels.includes(str[i])) {
        count++;
      }
    } 
    return count;
  }
 
  