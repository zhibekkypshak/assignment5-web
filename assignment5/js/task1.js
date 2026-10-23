// Task 1: variables, operators, concatenation
const missionName = "Orbit-7";   // string
const crewSize = 6;              // number
const isLaunchReady = true;     // boolean
const a = 12, b = 5;   // e.g. fuel tanks / engines

const lines = [
  `Data types: ${typeof missionName}, ${typeof crewSize}, ${typeof isLaunchReady}`,
  `${a} + ${b} = ${a + b}`,
  `${a} - ${b} = ${a - b}`,
  `${a} * ${b} = ${a * b}`,
  `${a} / ${b} = ${a / b}`,
  `${a} % ${b} = ${a % b}`,
  `${a} ** 2 = ${a ** 2}`,
  "Mission " + missionName + " carries " + crewSize + " crew. Launch ready: " + isLaunchReady,
];
lines.forEach(l => console.log(l));
document.getElementById("out").textContent = lines.join("\n");
