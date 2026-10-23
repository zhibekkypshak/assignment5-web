// Task 5: mouseover / mouseout
const box = document.getElementById("hover");
const original = "#0e1126";
const label = box.querySelector("span");
box.addEventListener("mouseover", () => { box.style.backgroundColor = "#3b1020"; box.style.boxShadow = "0 0 60px rgba(255,93,115,.5)"; label.textContent = "Contact detected!"; });
box.addEventListener("mouseout", () => { box.style.backgroundColor = original; box.style.boxShadow = "none"; label.textContent = "Scanner idle"; });
