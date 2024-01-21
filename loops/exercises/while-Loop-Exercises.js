//Define three variables for the LaunchCode shuttle - 
// one for the starting fuel level, 
// another for the number of astronauts aboard, 
// and the third for the altitude the shuttle reaches.

let fuelLevel = 30000;
let numAstronauts = 6;
let altitude = 150000;


/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. 
  Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */
  const input = require('readline-sync');

  let num = input.question('Please enter the starting fuel level for the shutlle a number greater than 5000 but less than 30000:');
  num = Number(num);
  
  while (num <= 5000) {
     num = input.question('Invalid input. Please enter a positive number:');
     num = Number(num);
  }


//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.
const input = require('readline-sync');

let nums = input.question('Please enter the number of astronauts on the shuttle: ');
nums = Number(nums);

while (nums <= 0) {
   nums = input.question('Invalid input. Please enter a positive number:');
   nums = Number(nums);
}
  
//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. 
// Each iteration, decrease the fuel level by 100 units for each astronaut aboard. 
// Also, increase the altitude by 50 kilometers.
while (fuelLevel-100*numAstronauts >= 0) {
  altitude += 50;
  fuelLevel -= 100*numAstronauts;
  }



/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”

If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/
let output = `The shuttle gained an altitude of ${altitude} km.`;

if (altitude >= 2000) {
output += " Orbit achieved!";
}
