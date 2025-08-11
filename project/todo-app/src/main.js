// This file contains the main JavaScript code for the Todo application.
// It manages the functionality for adding, removing, and displaying todo items.

const todoInput = document.getElementById('todo-input');
const addButton = document.getElementById('add-button');
const todoList = document.getElementById('todo-list');

let todos = [];

function addTodo() {
    const todoText = todoInput.value.trim();
    if (todoText) {
        todos.push(todoText);
        todoInput.value = '';
        renderTodos();
    }
}

function removeTodo(index) {
    todos.splice(index, 1);
    renderTodos();
}

function renderTodos() {
    todoList.innerHTML = '';
    todos.forEach((todo, index) => {
        const li = document.createElement('li');
        li.textContent = todo;
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = () => removeTodo(index);
        li.appendChild(removeButton);
        todoList.appendChild(li);
    });
}

addButton.addEventListener('click', addTodo);