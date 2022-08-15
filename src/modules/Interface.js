import { Task } from "./Task";

export const taskInterface = () => {
    function addToList() {
        const todoList = document.querySelector("#todos");
        const todo = document.createElement("li");
        const checkbox = document.createElement("input");
        const task = document.createElement("label");

        checkbox.setAttribute("type", "checkbox");
        checkbox.setAttribute("name", "checkbox");

        task.textContent = "AAA"

        todo.appendChild(checkbox);
        todo.appendChild(task);
        todoList.appendChild(todo);
    }

}
