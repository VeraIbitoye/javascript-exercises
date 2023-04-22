// Write a function that takes an array of numbers and returns the minimum number in the array.

const numbers = [1, 5, 2, 8, 3, 9, 10, 4];
const minNumber = Min(numbers);

function Min(numbers) {
    let minimum = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] < minimum) {
        minimum = numbers[i];
      }
    }
    return minimum;
  }
  console.log(minNumber); 