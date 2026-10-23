// Task 6: show input value in real time (keyup)
const inp = document.getElementById("inp");
const live = document.getElementById("live");
inp.addEventListener("keyup", () => { live.textContent = inp.value || "\u00a0"; });
