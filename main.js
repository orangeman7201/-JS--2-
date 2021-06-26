'use strict';

const todos = [];
const ul = document.querySelector('ul');
const table = document.querySelector('table');
let statusButton,deleteButton;


function addTodo(word) {
  const addItem = {};
  addItem[word] = 'working';
  todos.push(addItem) ;
}

function createTd(todo, index) {
  const tr = document.createElement('tr');
  const td1 = document.createElement('td');
  td1.innerHTML = index;
  tr.appendChild(td1);
  
  const td2 = document.createElement('td');
  td2.innerHTML = Object.keys(todo);
  tr.appendChild(td2);
  
  createDeleteButton();
  addDeleteFeature(index);
  tr.appendChild(deleteButton);
  
  createStatusButton(Object.values(todo));
  addStatusFeature(Object.keys(todo), index);
  tr.appendChild(statusButton);

  table.appendChild(tr);
}

function showFinish() {
  updateStatus();
  todos.forEach((todo, index) => {
    if (`${todos[index][Object.keys(todo)]}`.includes('finish')) {
      createTd(todo, index);
    }
  });
}

function showWorking() {
  updateStatus();
  todos.forEach((todo, index) => {
    if (todos[index][Object.keys(todo)] === 'working') {
      createTd(todo, index);
    }
  });
}

function showTodos() {
  updateStatus();
  todos.forEach((todo, index) => {
    createTd(todo, index);
 });
}

function createStatusButton(status) {
  statusButton = document.createElement('button');
  if(status == 'working finish') {
    statusButton.textContent = '完了';
  } else {
    statusButton.textContent = '作業中';
  }
}

function addStatusFeature(todo, index) {
  statusButton.addEventListener('click', () => {
    if(`${todos[index][todo]}`.includes('finish')) {
      todos[index][todo] = 'working';
    } else {
      todos[index][todo] = 'working finish';
    }
  radioFunction();
  });
}

function createDeleteButton() {
  deleteButton = document.createElement('button');
	deleteButton.textContent = '削除';
	deleteButton.className = 'deleteClassName';
}

function addDeleteFeature(number) {
  deleteButton.addEventListener('click', () => {
    todos.splice(number, 1);
    updateStatus ();
    radioFunction();
  });
}

function updateStatus() {
  while (table.firstChild) {
    table.removeChild(table.firstChild);
  };
  const tr = document.createElement('tr');
  tr.innerHTML = '<th>ID</th><th>コメント</th><th align="left">状態</th>';
  table.appendChild(tr);
}

function getRadioValue(){
  const radios = document.getElementsByName('status');
  let result;
  for(let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      result = radios[i].value;
      break;
    }
  }
  return result;
}

function radioFunction() {
  if (getRadioValue() === 'all') {
    showTodos();
  } else if (getRadioValue() === 'working'){
    showWorking();
  } else if (getRadioValue() === 'working finish') {
    showFinish();
  }
}

document.getElementById('submit-button').addEventListener('click', () => {
  updateStatus ();
  const inputJS = document.getElementById('input-html');
  let todoItem = inputJS.value;
  addTodo(todoItem);
  radioFunction();
  inputJS.value = '';
  inputJS.focus();
});
