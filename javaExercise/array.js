// Write a function that takes an array of numbers and a number and returns true if the array contains the number, and false otherwise.
const numbers = [1, 2, 3, 4, 5];
const target = 3;
const contains = containsNumber(numbers, target);
console.log(contains); 

function containsNumber(numbers, target) {
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] === target) {
        return true;
      }
      else {
        return false;
    }
    }
  }

  
  