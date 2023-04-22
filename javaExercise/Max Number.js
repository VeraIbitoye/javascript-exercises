// Write a function that takes an array of numbers and returns the maximum number in the array.
const numbers = [1, 5, 2, 8, 3, 9, 10, 4];
const maxNumber = Max(numbers);

function Max(numbers) {
    let maximum = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > maximum) {
        maximum = numbers[i];
      }
    }
    return maximum;
  }
  console.log(maxNumber); 