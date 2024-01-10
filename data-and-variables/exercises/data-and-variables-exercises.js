// Declare and assign the variables below

// Use console.log to print the 'typeof' each variable. Print one item per line.

// Calculate a space mission below

// Print the results of the space mission calculations below

// Calculate a trip to the moon below

// Print the results of the trip to the moon below

// data-and variables-exercises Jessica Donnelly

let shuttleName = 'Determination';
let shuttleSpeedMph = 17500;
let distanceToMarsKm = 225000000;
let distanceToMoonKm = 38400;
const milesPerKm = 0.621;

console.log(typeof shuttleName)
console.log(typeof shuttleSpeedMph)
console.log(typeof distanceToMarsKm)
console.log(typeof distanceToMoonKm)
console.log(typeof milesPerKm)
console.log("--")

// Calculate a space mission!
// We need to determine how many days it will take to reach Mars.

// Create and assign a miles to Mars variable. 
// You can get the miles to Mars by multiplying the distance to Mars in kilometers by the miles per kilometer.

//  Check your solution
// Next, we need a variable to hold the hours it would take to get to Mars. 
// To get the hours, you need to divide the miles to Mars by the shuttle’s speed.

//  Check your solution
// Finally, declare a variable and assign it the value of days to Mars. 
// In order to get the days it will take to reach Mars, you need to divide the hours it will take to reach Mars by 24.

let milesToMars = distanceToMarsKm * milesPerKm
console.log("Miles to Mars=", milesToMars)

let hoursToMars = milesToMars / shuttleSpeedMph
console.log("Hours to Mars =", hoursToMars)

let daysToMars = hoursToMars / 24
console.log("Days to Mars =", daysToMars)

console.log((shuttleName), "will take", (daysToMars), "days to reach Mars.")
console.log("--")

// Calculate a trip to the Moon
// Repeat the calculations, but this time determine the number of days it would take to travel to the Moon
//  and print to the screen a sentence that says "_____ will take ___ days to reach the Moon.".

let milesToMoon = distanceToMoonKm * milesPerKm
console.log("Miles to the Moon =", milesToMoon)

let hoursToMoon = milesToMoon / shuttleSpeedMph
console.log("Hours to the Moon =", hoursToMoon)

let daysToMoon = hoursToMoon / 24
console.log("Days to the Moon =", daysToMoon)

console.log((shuttleName), "will take", (daysToMoon), "days to reach the Moon.")
console.log("--")
