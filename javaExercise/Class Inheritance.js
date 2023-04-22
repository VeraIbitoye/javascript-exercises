// Create a class called Person with properties name, age, and gender, and a method called greet that logs "Hello, my name is [name] and I am [age] years old" to the console.
class Person {
    constructor(name, age, gender) {
      this.name = name;
      this.age = age;
      this.gender = gender;
    }
    greet() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old`);
    }
  }

const jane = new Person("Jane", 30, "female");
jane.greet(); 
