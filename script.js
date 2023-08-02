// Get elements from the DOM
const todoInput = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");

// Add click event listener to the "Add" button
addBtn.addEventListener("click", () => {
    const todoText = todoInput.value;
    if (todoText.trim() !== "") {
        createTodoItem(todoText);
        todoInput.value = "";
    }
});

// Create a new to-do item
function createTodoItem(text) {
    const todoItem = document.createElement("div");
    todoItem.className = "todo-item";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "checkbox";
    checkbox.addEventListener("change", () => toggleTodoItem(todoItem));

    const todoText = document.createElement("span");
    todoText.textContent = text;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";
    deleteBtn.addEventListener("click", () => deleteTodoItem(todoItem));

    todoItem.appendChild(checkbox);
    todoItem.appendChild(todoText);
    todoItem.appendChild(deleteBtn);

    todoList.appendChild(todoItem);
}

// Toggle the style of a to-do item when checked
function toggleTodoItem(todoItem) {
    const checkbox = todoItem.querySelector(".checkbox");
    const todoText = todoItem.querySelector("span");

    if (checkbox.checked) {
        todoText.style.textDecoration = "line-through";
        todoItem.style.backgroundColor = "#d4fada"; // Faded green color
        playDingSound();
    } else {
        todoText.style.textDecoration = "none";
        todoItem.style.backgroundColor = "transparent";
    }

    todoList.appendChild(todoItem);
}

// Delete a to-do item
function deleteTodoItem(todoItem) {
    todoList.removeChild(todoItem);
}

// Play a 'ding' sound
function playDingSound() {
    const audio = new Audio("ring.mp3"); // Replace with the actual sound file
    audio.play();
}
