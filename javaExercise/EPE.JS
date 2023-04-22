// Challenge: Given the following object: { name: "Tom", age: 20, city: "London" },
// loop through all its properties and log their names and values to the console.
const person = { name: "Tom", age: 20, city: "London" };

for (const property in person) {
  console.log(property + ": " + person[property]);
}
