//Part Three section one

let language = 'JavaScript';

//1. Use string concatenation and two slice() methods to print 'JS' from 'JavaScript'

console.log(language.slice(0,1)+language.slice(4,5));

//2. Without using slice(), use method chaining to accomplish the same thing.

function getSubstring(input, start, end) {
    return input.substring(start, end);
  }
  language = 'JavaScript';
  console.log(getSubstring(language, 0, 1) + getSubstring(language, 4, 5));

//3. Use bracket notation and a template literal to print, "The abbreviation for 'JavaScript' is 'JS'."

let abbreviation = `${language[0]}${language[4]}`;
console.log(`The abbreviation for '${language}' is '${abbreviation}'.`);

//4. Just for fun, try chaining 3 or more methods together, and then print the result.

let result = language
  .toUpperCase()      // Convert the string to uppercase
  .slice(0, 4)        // Get the first four characters
  .replace('JAVA', ''); // Replace 'JAVA' with an empty string

console.log(result);


//Part Three section Two

//1. Use the string methods you know to print 'Title Case' from the string 'title case'.

let notTitleCase = 'title case';
