// Task 7: calculator
document.getElementById("eq").addEventListener("click", () => {
  const a = parseFloat(document.getElementById("a").value);
  const b = parseFloat(document.getElementById("b").value);
  const op = document.getElementById("op").value;
  const res = document.getElementById("res");
  if (isNaN(a) || isNaN(b)) { res.textContent = "Enter both values"; return; }
  let r;
  switch (op) {
    case "+": r = a + b; break;
    case "-": r = a - b; break;
    case "*": r = a * b; break;
    case "/": r = b === 0 ? "Cannot divide by zero" : a / b; break;
  }
  res.textContent = r;
});
