'use strict';

const todos = [];
const ul = document.querySelector('ul');
let statusButton,deleteButton;


function addTodo (word) {
  todos.push(word);
}


function showTodos () {
  todos.forEach((todo, index) => {
    const li = document.createElement('li');
    li.innerHTML = index;
    
    const span = document.createElement('span');
    span.innerHTML = todo;
    li.appendChild(span);
    
    createDeleteButton ();
    addDeleteFeature (index);
    li.appendChild(deleteButton);
    
    createStatusButton ();
    addStatusFeature (index);
    li.appendChild(statusButton);
    
    ul.appendChild(li);    
  });
};


function createStatusButton () {
  statusButton = document.createElement('button');
	statusButton.textContent = '作業中';
  statusButton.className = 'working';
}


function addStatusFeature (index) {
  statusButton.addEventListener('click', () => {
    const working = document.getElementsByClassName('working')[index]
    working.classList.toggle('finish');
    if (working.classList.contains('finish')) {
      working.innerHTML = '完了';
    } else {
      working.innerHTML = `作業中`;
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
