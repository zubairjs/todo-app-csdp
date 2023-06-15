// Select DOM Elements
const addTodoItem = document.getElementById('add');
const deleteTodoItem = document.getElementById('delete');
const todoList = document.getElementById('todo-list');
const todoInput = document.getElementById('todo-item');
const todoCompleted = document.getElementById('completed-list');

// Event Listener: Add Todo Button
addTodoItem.addEventListener('click', (e) => {
  e.preventDefault();
  e.stopPropagation();
  addTodo();
});

// Feature: Add Todo
function addTodo() {
  const newTodoContainer = document.createElement('div');
  newTodoContainer.classList.add('item-container');

  const todoItem = document.createElement('input');
  todoItem.setAttribute('type', 'checkbox');

  const todoLabel = document.createElement('label');
  todoLabel.textContent = ` ${todoInput.value}`;

  const deleteButton = document.createElement('button');
  deleteButton.classList.add('delete');
  deleteButton.textContent = 'Delete';

  newTodoContainer.append(todoItem, todoLabel, deleteButton);
  todoList.appendChild(newTodoContainer);
  todoInput.value = '';
}
// Feature: Complete Todo
todoList.addEventListener('click', (e) => {
  const parent = e.target.parentNode;
  if (e.target.nodeName === 'INPUT') todoCompleted.appendChild(parent);
});

// Feature: Delete Todo

todoCompleted.addEventListener('click', (e) => {
  const parent = e.target.parentNode;
  if (e.target.nodeName === 'BUTTON') parent.remove();
});

todoList.addEventListener('click', (e) => {
  const parent = e.target.parentNode;
  if (e.target.nodeName === 'BUTTON') parent.remove();
});

// Reset field

const resetField = document.querySelector('#reset');
resetField.addEventListener('click', (e) => {
  e.preventDefault();
  todoInput.value = '';
});
