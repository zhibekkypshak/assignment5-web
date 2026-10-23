// Task 8: Mission planner (to-do). Tasks are kept in an array (no storage).
let tasks = [];
let nextId = 1;
const form = document.getElementById("form");
const titleEl = document.getElementById("title");
const descEl = document.getElementById("desc");
const err = document.getElementById("err");
const list = document.getElementById("tasks");

function render() {
  list.innerHTML = "";
  if (tasks.length === 0) {
    const p = document.createElement("p");
    p.className = "empty";
    p.textContent = "No objectives yet. Add your first one.";
    list.appendChild(p);
    return;
  }
  tasks.forEach(t => {
    const card = document.createElement("div");
    card.className = "task" + (t.done ? " done" : "");

    const head = document.createElement("div");
    head.className = "task-head";
    const name = document.createElement("span");
    name.className = "name";
    name.textContent = t.title;

    const doneBtn = document.createElement("button");
    doneBtn.className = "icon";
    doneBtn.title = "Mark as completed";
    doneBtn.textContent = t.done ? "Undo" : "Done ✓";
    doneBtn.addEventListener("click", () => { t.done = !t.done; render(); });

    const delBtn = document.createElement("button");
    delBtn.className = "icon del";
    delBtn.title = "Delete";
    delBtn.textContent = "Delete";
    delBtn.addEventListener("click", () => { tasks = tasks.filter(x => x.id !== t.id); render(); });

    head.append(name, doneBtn, delBtn);
    const desc = document.createElement("p");
    desc.textContent = t.description;
    card.append(head, desc);
    list.appendChild(card);
  });
}

form.addEventListener("submit", e => {
  e.preventDefault();
  const title = titleEl.value.trim();
  const description = descEl.value.trim();
  if (!title || !description) { err.textContent = "Please fill in both title and description."; return; }
  err.textContent = "";
  tasks.push({ id: nextId++, title, description, done: false });
  titleEl.value = "";
  descEl.value = "";
  render();
});
render();
