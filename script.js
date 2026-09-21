let tasks = [];

document.getElementById('task-form').addEventListener('submit', function (e) {
  e.preventDefault();
  addTask();
});

function addTask() {
  const input = document.getElementById('task-input');
  const value = input.value.trim(); // sua theo gop y review cua Long

  if (value === '') return; // khong cho them cong viec trong

  tasks.push({ text: value, completed: false });
  input.value = '';
  renderTasks();
}

function renderTasks() {
  const list = document.getElementById('task-list');
  list.innerHTML = '';

  tasks.forEach(function (task, index) {
    const li = document.createElement('li');
    li.textContent = task.text;
    if (task.completed) {
      li.classList.add('completed');
    }

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.completed;
    checkbox.addEventListener('change', function () {
      toggleComplete(index);
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'Xoa';
    deleteBtn.addEventListener('click', function () {
      deleteTask(index);
    });

    li.prepend(checkbox);
    li.appendChild(deleteBtn);

    const span = document.createElement('span');
    span.className = 'task-text';
    span.textContent = task.text;
    li.appendChild(span);

    list.appendChild(li);
  });
}

function toggleComplete(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

renderTasks();