const input = require('readline-sync');

let str = "LaunchCode";


//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
let modifiedStr = str.slice(3) + str.slice(0, 3);

//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`Original String: ${str}`);
console.log(`Modified String: ${modifiedStr}`);

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
const userInput = input.question('Enter the number of letters to relocate: ');

//3) Add validation to your code to deal with user inputs that are longer than the word. 
// In such cases, default to moving 3 characters. 
// Also, the template literal should note the error.
const numToRelocate = parseInt(userInput) || 3;
if (numToRelocate > str.length) {
    console.log('Error: Input is longer than the word. Defaulting to relocating 3 characters.');
  }
  modifiedStr = str.slice(numToRelocate) + str.slice(0, numToRelocate);
  console.log(`Modified String (based on user input): ${modifiedStr}`);


