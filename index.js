const formElement = document.getElementById("form");
const listElement = document.getElementById("todo-list");
const clearAllBtnElement = document.getElementById("clear-all");
const clearOneBtnElement = document.getElementById("clear-one");

const TODO = [];

const clearList = function () {
  while (listElement.hasChildNodes()) { 
    listElement.firstChild.remove();    
  }
}

const clearOne = function () {
 if (listElement.hasChildNodes()) {
    listElement.firstChild.remove();
  }
}

function clearInputs(event) {
    event.target.todo.value = "";
}

function changeStatus(event) {
    const liElement = event.target.closest('li');
    const checkboxElement = liElement.querySelector('.checkbox');
    checkboxElement.classList.toggle('checked');
    if (liElement.classList.contains('checked')) {
      checkboxElement.textContent = '\u2714'; 
    } else {
      checkboxElement.textContent = '';
    }
}

clearAllBtnElement.addEventListener('click', clearList);
clearOneBtnElement.addEventListener('click', clearOne);

formElement.addEventListener('submit', (event) => {
  event.preventDefault(); 
   const priorityElement = document.querySelector('input[name="priority"]:checked');
   const priorityValue = priorityElement ? priorityElement.value : "lowPriorityTask";
   const todoTask = { 
    todo: event.target.todo.value, 
    priority: priorityValue
  };
  TODO.push(todoTask);
  
  const liElement = document.createElement('li');
  const checkboxElement = document.createElement('span');
  checkboxElement.classList.add('checkbox');
  liElement.appendChild(checkboxElement);
  liElement.innerHTML += `${todoTask.todo} (${todoTask.priority})`;
  liElement.addEventListener('click', changeStatus);
  listElement.append(liElement);
 
  clearInputs(event); 
});