export function renderTodo(todo) {
    const toDoBox = document.createElement('div');
    const toDoItem = document.createElement('p');

    toDoItem.textContent = todo.todo;
    toDoBox.append(toDoItem);
    toDoBox.classList.add('todo');

    if (todo.complete === false) {
        toDoBox.classList.add('incomplete');
    } else {
        toDoBox.classList.add('complete');
    }

    return toDoBox;
}
// create a div and a p tag

// depending on whether the todo is complete, give the div the appropriate css class ('complete' or 'incomplete')

// add the 'todo' css class no matter what

// put the todo's text into the p tag

// append stuff

// return the div
