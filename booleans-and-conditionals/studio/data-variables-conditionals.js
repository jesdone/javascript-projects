// Jes Donnelly Studio Shuttle Launch
// Initialize Variables below

let date = "Monday 2019-03-18";
let time = "10:05:34 AM";
let astronautCount = 7;
let astronautStatus = "ready";
let averageAstronautMassKg = 80.7;
let crewMassKg= astronautCount * averageAstronautMassKg;
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
let maximumMassLimit = 850000;
let fuelTempCelsius	= -225;
let minimumFuelTemp = -300;
let maximumFuelTemp = -150;
let fuelLevel = 100;
let weatherStatus = "clear";
let preparedForLiftOff = true;

// add logic below to verify total number of astronauts for shuttle launch does not exceed 7



if (astronautCount > 7){
console.log("Crew exceeds maximum, launch scrubbed.");
astronautCount = false;
}
// add logic below to verify all astronauts are ready

else if (astronautStatus !== "ready"){
console.log("Astronaunts are not raedy, launch scrubbed.");
astronautStatus = false;
// add logic below to verify the total mass does not exceed the maximum limit of 850000
}
else if (totalMassKg > maximumMassLimit){
console.log("Total mass exceeds mass limit, launch scrubbed.");
totalMassKg = false;
// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300
}
else if (fuelTempCelsius < -300 || fuelTempCelsius > -150){
console.log("Engine temperature critical, launch scrubbed.");
fuelTempCelsius = false;
}
// add logic below to verify the fuel level is at 100%

else if (fuelLevel !== 100){
console.log("Refuel immediately, launch scrubbed.");
fuelLevel = false;
}
// add logic below to verify the weather status is clear

else if (weatherStatus !== "clear"){
console.log("Inclimate weather, launch scrubbed.");
weatherStatus = false;
}
// Verify shuttle launch can proceed based on above conditions
else{ 
console.log("All syetems are a go! Initializing Space Shuttle Launch Sequence!");
console.log("-------------------------------");
console.log("Date: ", date);
console.log("Time: ", time);
console.log("Astronaunt Count: ", astronautCount);
console.log("Crew Mass: ", crewMassKg);
console.log("Fuel Mass: ",fuelMassKg);
console.log("Shuttle Mass: ", shuttleMassKg);
console.log("Total Mass: ", totalMassKg);
console.log("Fuel Temp: ", fuelTempCelsius);
console.log("Weather Status: ", weatherStatus);
console.log("---------------------------------");
console.log("Astronauts have a safe flight!");
}