// Run this when the DOM has fully loaded
document.addEventListener('DOMContentLoaded', function () {
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Function to add a task
  function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') {
      alert('Please enter a task');
      return;
    }

    // Create task item
    const listItem = document.createElement('li');
    listItem.textContent = taskText;

    // Create remove button
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.className = 'remove-btn';

    // Remove task when button clicked
    removeBtn.onclick = function () {
      taskList.removeChild(listItem);
    };

    listItem.appendChild(removeBtn);
    taskList.appendChild(listItem);

    taskInput.value = '';
  }

  // Add task on button click
  addButton.addEventListener('click', addTask);

  // Add task on Enter key press
  taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      addTask();
    }
  });
});
