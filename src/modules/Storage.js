export let todos = [];

export const storeToDo = (todo) => {
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}