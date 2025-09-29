function renderTasks(tasks) {
  taskList.innerHTML = "";
  tasks.forEach(task => {
    const li = document.createElement("li");
    li.className = task.done ? "done" : "";

    const span = document.createElement("span");
    span.textContent = task.text;
    span.addEventListener("click", () => toggleTask(task.id, !task.done));

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.style.background = "orange";
    editBtn.addEventListener("click", () => {
      const newText = prompt("Update task:", task.text);
      if (newText) updateTask(task.id, newText);
    });

    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.addEventListener("click", () => deleteTask(task.id));

    li.appendChild(span);
    li.appendChild(editBtn);
    li.appendChild(delBtn);
    taskList.appendChild(li);
  });
}

async function updateTask(id, text) {
  await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text })
  });
  async function fetchTasks() {
  try {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error("Failed to fetch tasks: " + res.status);
    const tasks = await res.json();
    renderTasks(tasks);
  } catch (err) {
    taskList.innerHTML = `<li style="color:red;">⚠️ Error: ${err.message}</li>`;
    console.error("Backend connection error:", err);
  }
}

}
