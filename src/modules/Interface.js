export default class Interface {
    constructor() {

    }

    loadInterface() {
        
    }
}

export const openModal = document.querySelector("#newTask");
export const modal = document.querySelector("#taskModal");

openModal.addEventListener('click', () => {
    modal.showModal();
});