// Write a function that takes an array of numbers and returns the sum of all the numbers in the array.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sum = sumArray(numbers);

function sumArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    return sum;
  }
  console.log(sum); 