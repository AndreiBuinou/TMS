const createTaskBtn = document.querySelector('.crate-task-btn');
const nameTask = document.getElementById('name-task');
const descriptionTask = document.getElementById('description-task');
const currentTasks = document.querySelector('.list-current-tasks');
//const executedTasks = document.querySelector('.list-executed-tasks');
const modalForm = document.querySelector('.modal-form');
const priorityTask = document.querySelector('.priority-task');

modalForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
});

function createNewElement() {
    const listItem = document.createElement('li');

    const headTask = document.createElement('h2');
    headTask.innerText = nameTask.value;

    const itemTask = document.createElement('p');
    itemTask.innerText = descriptionTask.value;

    const itemPriorityTask = document.createElement('p');
    itemPriorityTask.innerText = priorityTask.options[priorityTask.selectedIndex].text;
    console.log(itemPriorityTask)

    const editButton = document.createElement('button');
    editButton.className = 'all-btn';
    editButton.innerText = 'Редактировать';

    const deleteButton = document.createElement('button');
    deleteButton.className = 'all-btn';
    deleteButton.innerText = 'Удалить';

    const finishButton = document.createElement('button');
    finishButton.className = 'all-btn';
    finishButton.innerText = 'Выполнено';

    listItem.appendChild(headTask);
    listItem.appendChild(itemTask);
    listItem.appendChild(itemPriorityTask);
    listItem.appendChild(deleteButton);
    listItem.appendChild(editButton);
    listItem.appendChild(finishButton);

    return listItem;
}

createTaskBtn.addEventListener('click',() => {
    if (nameTask.value) {
        const listItem = createNewElement(nameTask.value, false);
        currentTasks.appendChild(listItem);
    }
});