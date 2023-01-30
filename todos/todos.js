import {
    checkAuth,
    createTodo,
    completeTodo,
    getTodos,
    logout,
    deleteAllTodos,
    getUser,
} from '../fetch-utils.js';
import { renderTodo } from '../render-utils.js';

checkAuth();

const todosEl = document.querySelector('.todos');
const todoForm = document.querySelector('.todo-form');
const logoutButton = document.querySelector('#logout');
const deleteButton = document.querySelector('.delete-button');

let toDoData = [];

todoForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(todoForm);
    await createTodo(data.get('todo'));
    todoForm.reset();

    displayTodos();
});

async function displayTodos() {
    todosEl.textContent = '';

    toDoData = await getTodos();

    for (let todo of toDoData) {
        const toDoEl = renderTodo(todo);

        toDoEl.addEventListener('click', async () => {
            if (todo) await completeTodo(todo.id);
            displayTodos();
        });

        todosEl.append(toDoEl);
    }
}

window.addEventListener('load', async () => {
    displayTodos();
});

logoutButton.addEventListener('click', () => {
    logout();
});

deleteButton.addEventListener('click', async () => {
    const user = await getUser();
    await deleteAllTodos(user);
    displayTodos();
});
