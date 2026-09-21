let tasks = [];

document.getElementById('task-form').addEventListener('submit', function (e) {
  e.preventDefault();
  addTask();
});

function addTask() {

}

function renderTasks() {
  const list = document.getElementById('task-list');
  list.innerHTML = '';

  tasks.forEach(function (task) {
    const li = document.createElement('li');
    li.textContent = task.text;
    list.appendChild(li);
  });
}

renderTasks();
