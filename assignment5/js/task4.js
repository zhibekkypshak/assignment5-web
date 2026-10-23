// Task 4: add / remove list items
const list = document.getElementById("list");
document.getElementById("add").addEventListener("click", () => {
  const li = document.createElement("li");
  li.textContent = "Crew member " + (list.children.length + 1);
  list.appendChild(li);
});
document.getElementById("remove").addEventListener("click", () => {
  if (list.lastElementChild) list.removeChild(list.lastElementChild);
});
