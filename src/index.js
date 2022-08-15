import * as Task from "./modules/Task";
import Interface from "./modules/Interface";

export const openModal = document.querySelector("#newTask");
export const modal = document.querySelector("#taskModal");

openModal.addEventListener('click', () => {
    modal.showModal();
});
