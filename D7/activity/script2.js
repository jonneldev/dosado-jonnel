function addTask() {
    // Get the task input element and its value
    const taskInput = document.getElementById("task-input");
    const taskText = taskInput.value.trim();

    // Check if input is not empty
    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    // Create a new list item (li) element for the task
    const taskItem = document.createElement("li");

    // Create a text node for the task and add it to the list item
    const taskTextNode = document.createTextNode(taskText);
    taskItem.appendChild(taskTextNode);

    // Create a remove button for the task
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.onclick = function() {
        removeTask(taskItem);
    };

    // Add the remove button to the task item
    taskItem.appendChild(removeButton);

    // Add the task item to the task list
    document.getElementById("task-list").appendChild(taskItem);

    // Clear the input field for the next task
    taskInput.value = "";
}

function removeTask(taskItem) {
    // Remove the specified task item from the task list
    taskItem.remove();
}
