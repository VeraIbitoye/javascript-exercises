// Write a function that takes an array of numbers and returns the average of all the numbers in the array.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const average = calAverage(numbers);
console.log(average); 

function calAverage(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    return sum / numbers.length;
  }
  