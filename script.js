const openTaskFormBtn = document.getElementById('open-task-form-btn');
const addOrUpdateTaskBtn = document.getElementById('add-or-update-task-btn');
const cancelBtn = document.getElementById('cancel-btn');
const tasksContainer = document.getElementById('tasks-container');
const titleInput = document.getElementById('title-input');
const dateStart = document.getElementById('date-start');
const dateEnd = document.getElementById('date-end');
const descriptionInput = document.getElementById('description-input');

const confirmCloseDialog = document.getElementById('confirm-close-dialog');
const discardBtn = document.getElementById('discard-btn');

const taskForm = document.getElementById('task-form');

const bookBtn = document.getElementById('bookBtn');
const sagaBtn = document.getElementById('sagaBtn');
const formContainer = document.getElementById('form-container');

// Função para anexar o event listener ao botão de fechar
    function setupCloseButton() {
    const currentCloseTaskFormBtn = document.getElementById('close-task-form-btn');    
        if (currentCloseTaskFormBtn) {
            currentCloseTaskFormBtn.addEventListener('click', () => {
            confirmCloseDialog.showModal(); // quando clicar no x vai subir um modal confirmando a ação
        });
    }
}  

// Função para anexar o event listener ao botão cancelar
    function setupCancelButton() {
        if (confirmCloseDialog) {
            confirmCloseDialog.addEventListener('click', () => {
            confirmCloseDialog.close();
            })
        }
    }

// Função para anexar o event listener ao botão descartar
    function setupDiscardButton() {
        const discardBtn = document.getElementById('discard-btn');
        if (discardBtn) {
            discardBtn.addEventListener('click', () => {
            confirmCloseDialog.close();
            formContainer.classList.toggle('hidden');
        }) // quando clicar em descartar e nao tiver nenhuma info cadastrada esconde o form
    }}

bookBtn.addEventListener('click', () => {
    formContainer.innerHTML =
      `<div class="d-flex flex-column align-items-center">
        <form class="task-form" id="task-form"> 

<div class="p-2 d-flex justify-content-end">
    <input class="close-task-form-btn" 
         type="button" 
         id="close-task-form-btn" 
         aria-label="close" 
         value="x">
    </div>
            
<div class="p-2">
    <label 
    class="task-form-label col-form-label col-form-label-sm" 
    for="title-input">Título</label>    
        <input required type="text" 
        class="form-control form-control-sm" 
        id="title-input" 
        value=""/>
      </div>

<div class="p-2">    
    <label 
    class="task-form-label col-form-label col-form-label-sm" 
    for="date-start">Data de início</label>
      <input type="date" 
      class="form-control form-control-sm" 
      id="date-start" 
      value="" />
    </div>

<div class="p-2">
  <label class="task-form-label" for="description-input">Sinopse</label>
    <textarea class="form-control form-control-sm" id="description-input" cols="30" rows="5"></textarea>
      </div>
        
<div class="task-form-footer">
          <input id="add-or-update-task-btn" class="btn large-btn" type="submit" value="ok">
            </div>
                </form>
                    </div>`;
                setupCloseButton();
                setupDiscardButton();
                });

  sagaBtn.addEventListener('click', () => {
    formContainer.innerHTML =
      `<div class="d-flex flex-column align-items-center">
        <form class="task-form" id="task-form"> 

<div class="p-2 d-flex justify-content-end">
    <input class="close-task-form-btn" 
         type="button" 
         id="close-task-form-btn" 
         aria-label="close" 
         value="x">
    </div>
            
<div class="p-2">
    <label 
    class="task-form-label col-form-label col-form-label-sm" 
    for="saga-input">Saga</label>    
        <input required type="text" 
        class="form-control form-control-sm" 
        id="saga-input" 
        value=""/>
      </div>

<div class="p-2">
    <label 
    class="task-form-label col-form-label col-form-label-sm" 
    for="title-input">Título do livro:</label>    
        <input required type="text" 
        class="form-control form-control-sm" 
        id="title-input" 
        value=""/>
      </div>

      <button>+</button>

<div class="p-2">    
    <label 
    class="task-form-label col-form-label col-form-label-sm" 
    for="date-start">Data de início</label>
      <input type="date" 
      class="form-control form-control-sm" 
      id="date-start" 
      value="" />
    </div>

<div class="p-2">
  <label class="task-form-label" for="description-input">Sinopse</label>
    <textarea class="form-control form-control-sm" id="description-input" cols="30" rows="5"></textarea>
      </div>
        
<div class="task-form-footer">
          <input id="add-or-update-task-btn" class="btn large-btn" type="submit" value="ok">
            </div>
                </form>
                    </div>`;
    setupCloseButton();
    setupDiscardButton();
})

const taskData = [];
let currentTask = {};

taskForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const dataArrIndex = taskData.findIndex((item) => item.id === currentTask.id);
    const taskObj = 
    {
        id: `${titleInput.value.toLowerCase().split(" ").join("-")}-${Date.now()}`,
        title: titleInput.value,
        date_start: dateStart.value,
        description: descriptionInput.value,
    }

    if (dataArrIndex === -1) {
        taskData.unshift(taskObj);
      }

      taskData.forEach(({id, title, date_start, description}) => {
      tasksContainer.innerHTML += ` <div class="task" id="${id}"></div>
             <p><strong>Title: </strong>${title}</p>
                    <p><strong>Date Start: </strong>${date_start}</p>
                           <p><strong>Description: </strong>${description}</p>
                         <button  type="button" class="btn">Edit</button>
                           <button type="button" class="btn">Delete</button>
      `
    }
)
    
}) 
// preventDefault() navegador não atualiza ao subir info no form
// split coleta strings com o separador definido (" "), (","), ("") + join coleta as strings e acrescenta uma string de separação ("-"), (","), ("|"), etc
