'use strict';

const todos = [];
const ul = document.querySelector('ul');
let statusButton,deleteButton;


function addTodo (word) {
  const addItem = {};
  addItem[word] = 'working';
  todos.push(addItem) ;
}


function showTodos () {
  todos.forEach((todo, index) => {
    const li = document.createElement('li');
    li.innerHTML = index;
    
    const span = document.createElement('span');
    span.innerHTML = Object.keys(todo);
    li.appendChild(span);
    
    createDeleteButton ();
    addDeleteFeature (index);
    li.appendChild(deleteButton);
    
    createStatusButton (Object.values(todo));
    addStatusFeature (Object.keys(todo), index);
    li.appendChild(statusButton);
    
    ul.appendChild(li);
   });
}


function createStatusButton (status) {
  statusButton = document.createElement('button');
  if (status == 'working finish') {
    statusButton.className = 'working finish';
    statusButton.textContent = '完了';
  } else {
    statusButton.className = 'working';
    statusButton.textContent = '作業中';
  }
}


function addStatusFeature (todo, index) {
  statusButton.addEventListener('click', () => {
    const working = document.getElementsByClassName('working')[index];
    working.classList.toggle('finish');
    if (working.classList.contains('finish')) {
      working.innerHTML = '完了';
      todos[index][todo] = 'working finish';
    } else {
      working.innerHTML = `作業中`;
      todos[index][todo] = 'working';
    }
  });
}


function createDeleteButton () {
  deleteButton = document.createElement('button');
	deleteButton.textContent = '削除';
	deleteButton.className = 'deleteClassName';
}


function addDeleteFeature (number) {
  deleteButton.addEventListener('click', () => {
    todos.splice(number, 1);
    updateStatus ();
    showTodos ();
  });
}


function updateStatus () {
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  };
}


document.getElementById('submit-button').addEventListener('click', () => {
  updateStatus ();
    
  const inputJS = document.getElementById('input-html');
  let todoItem = inputJS.value;
  addTodo(todoItem);
  showTodos();
  inputJS.value = '';
  inputJS.focus();
});
