// Task 3: change background color and font size
const box = document.getElementById("box");
const colors = ["#2a1f6b", "#0f4c5c", "#5c1f4a", "#3d5c0f", "#141830"];
let c = 0, size = 16;
document.getElementById("bg").addEventListener("click", () => {
  c = (c + 1) % colors.length;
  box.style.backgroundColor = colors[c];
});
document.getElementById("fs").addEventListener("click", () => {
  size = size >= 36 ? 16 : size + 4;
  box.style.fontSize = size + "px";
});
