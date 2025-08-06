const addBtn = document.getElementById('add-btn');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

addBtn.addEventListener('click', addTask);

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === '') {
    alert('Please enter a task!');
    return;
  }

  // Create task item
  const li = document.createElement('li');
  li.classList.add('task-item');

  // Task content
  li.innerHTML = `
    <span>${taskText}</span>
    <div class="task-actions">
      <button class="complete-btn">✔</button>
      <button class="delete-btn">🗑</button>
    </div>
  `;

  // Add to list
  taskList.appendChild(li);

  // Clear input
  taskInput.value = '';

  // Add event listeners
  li.querySelector('.complete-btn').addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  li.querySelector('.delete-btn').addEventListener('click', () => {
    li.remove();
  });
}
