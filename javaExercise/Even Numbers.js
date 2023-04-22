// Write a function that takes an array of numbers and returns a new array with only the even numbers from the original array.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = evenNumber(numbers);

function evenNumber(numbers) {
    const evenNumbers = numbers.filter(num => num % 2 === 0);
    return evenNumbers;
  }
  console.log(evenNumbers); 