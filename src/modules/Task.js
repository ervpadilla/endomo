import { storeToDo } from "./Storage";
import { Interface, taskInterface } from "./Interface";

export class Task {
    constructor() {

    }

    addTask() {
        const todo = {
            task: document.querySelector("#taskTitle").value,
            description: document.querySelector("#description").value,
            dueDate: document.querySelector("#dueDate").value,
            priority: document.querySelector("#priority").value,
        };
        storeToDo(todo);    
    }
}

export const addTask = document.querySelector("#addTask");
addTask.addEventListener('click', () => {
    const todo = {
        task: document.querySelector("#taskTitle").value,
        description: document.querySelector("#description").value,
        dueDate: document.querySelector("#dueDate").value,
        priority: document.querySelector("#priority").value,
    };
    console.log(todo);
    storeToDo(todo);
    taskInterface().addToList();
});