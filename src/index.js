import Interface from './modules/Interface'

document.addEventListener('DOMContentLoaded', Interface.loadInterface);

const modal = document.querySelector("#taskModal");
const openModal = document.querySelector("#newTask");

openModal.addEventListener('click', () => {
    modal.showModal();
})

