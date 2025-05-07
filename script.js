const openTaskFormBtn = document.getElementById('open-task-form-btn');
const taskForm = document.getElementById('task-form');
const confirmCloseDialog = document.getElementById('confirm-close-dialog');
const closeTaskFormBtn = document.getElementById('close-task-form-btn');
const addOrUpdateTaskBtn = document.getElementById('add-or-update-task-btn');
const cancelBtn = document.getElementById('cancel-btn');
const discardBtn = document.getElementById('discard-btn');
const tasksContainer = document.getElementById('tasks-container');
const titleInput = document.getElementById('title-input');
const dateStart = document.getElementById('date-start');
const dateEnd = document.getElementById('date-end');
const descriptionInput = document.getElementById('description-input');

const taskData = [];
let currentTask = {};

openTaskFormBtn.addEventListener('click', () => 
    taskForm.classList.toggle('hidden')) // quando clicar em add a new book abre o form

closeTaskFormBtn.addEventListener('click', () => 
    confirmCloseDialog.showModal()) // quando clicar no x vai subir um modal confirmando a ação

cancelBtn.addEventListener('click', () => 
    confirmCloseDialog.close()) // quando clicar em cancelar fecha o modal

discardBtn.addEventListener('click', () => {
    confirmCloseDialog.close()
    taskForm.classList.toggle('hidden')}) // quando clicar em descartar e nao tiver nenhuma info cadastrada esconde o form

taskForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const dataArrIndex = taskData.findIndex((item) => item.id === currentTask.id);
    const taskObj = 
    {
        id: `${titleInput.value.toLowerCase().split(" ").join("-")}-${Date.now()}`,
        title: titleInput.value,
        date_start: dateStart.value,
        date_end: dateEnd.value,
        description: descriptionInput.value,
    }

    if (dataArrIndex === -1) {
        taskData.unshift(taskObj);
      }

      taskData.forEach(({id, title, date_start, date_end, description}) => {
      tasksContainer.innerHTML += ` <div class="task" id="${id}"></div>
             <p><strong>Title: </strong>${title}</p>
                    <p><strong>Date Start: </strong>${date_start}</p>
                    <p><strong>Date End: </strong>${date_end}</p>
                           <p><strong>Description: </strong>${description}</p>
                         <button  type="button" class="btn">Edit</button>
                           <button type="button" class="btn">Delete</button>
      `
    }
)
taskForm.classList.toggle("hidden")
    
}) 
// preventDefault() navegador não atualiza ao subir info no form
// split coleta strings com o separador definido (" "), (","), ("") + join coleta as strings e acrescenta uma string de separação ("-"), (","), ("|"), etc