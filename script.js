function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    const li = document.createElement("li");
    li.textContent = taskText;

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.classList.add("remove-btn"); // ✅ this is what was missing

    removeButton.onclick = function () {
        taskList.removeChild(li);
    };

    li.appendChild(removeButton);
    taskList.appendChild(li);

    taskInput.value = "";
}
