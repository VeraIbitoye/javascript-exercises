// a function that takes a string as input and capitalizes
// the first letter of each word in the string except for a certain words (e.g 'the', 'of' 'and')
// which should be in lowercase
 
let sentence = "the girl and dog of"
let statement = sentence.split(" ");
statement[1] = statement[1].charAt(0).toUpperCase() + statement[1].slice(1);
statement[3] = statement[3].charAt(0).toUpperCase() + statement[3].slice(1);
let capitalizedSentence = statement.join(" ");

console.log(capitalizedSentence);
