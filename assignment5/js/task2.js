// Task 2: change paragraph text on click
const text = document.getElementById("text");
const updates = [
  "Engines warming up. T-minus 10 minutes.",
  "All systems nominal. Cleared for launch.",
  "Liftoff! Orbit-7 is on its way.",
  "Standby. Awaiting launch window."
];
let step = 0;
function nextStatus() { step = (step + 1) % updates.length; return updates[step]; }
document.getElementById("btn").addEventListener("click", () => {
  text.textContent = nextStatus();
});
