const modalWindow = document.querySelector('.modal-window');
const addTaskBtn = document.querySelector('.add-task-btn');
const closeModalBtn = document.querySelector('.close-modal-btn');

addTaskBtn.addEventListener('click', () => {
    modalWindow.style.display = 'block';
});

closeModalBtn.addEventListener('click', () => {
    modalWindow.style.display = 'none';
});

modalWindow.addEventListener('click', (e) => {
    if (e.target === modalWindow) {
        modalWindow.style.display = 'none';
    }
});