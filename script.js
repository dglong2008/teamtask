let tasks = [];

document.getElementById('task-form').addEventListener('submit', function (e) {
  e.preventDefault();
  addTask();
});

function addTask() {
  const input = document.getElementById('task-input');
  const value = input.value;

  if (value === '') return; // khong cho them cong viec trong

  tasks.push({ text: value, completed: false });
  input.value = '';
  renderTasks();
}

function renderTasks() {
  const list = document.getElementById('task-list');
  list.innerHTML = '';

  tasks.forEach(function (task) {
    const li = document.createElement('li');

    const span = document.createElement('span');
    span.className = 'task-text';
    span.textContent = task.text;
    li.appendChild(span);

    list.appendChild(li);
  });
}

renderTasks();