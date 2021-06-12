'use strict';

const todos = [];
const ul = document.querySelector('ul');

function addTodo (word) {
  todos.push(word);
}

function showTodos () {
  todos.forEach((todo, index) => {
    const li = document.createElement('li')
    li.innerHTML = index;
    
    const span = document.createElement('span')
    span.innerHTML = todo;
    span.className = 'spanClassName';
    
    // const deleteButton = document.createElement('button')
    // deleteButton.textContent = '削除';
    // deleteButton.className = 'deleteClassName';
    // deleteButton.addEventListener('click', () => {
    //   deleteTodo (index);
    //   updateStatus ();
    //   showTodos ();
    // });

    // const statusButton = document.createElement('button')
    // statusButton.textContent = '作業中';
    // statusButton.className = 'statusClassName';
    createStatusButton ();
    createDeleteButton (todos.length - 1);

    li.append(span);
    li.append(deleteButton);
    li.append(statusButton);
    ul.appendChild(li);
  });
};

function createStatusButton () {
  const statusButton = document.createElement('button')
  statusButton.textContent = '作業中';
  statusButton.className = 'statusClassName';
}

function createDeleteButton (number) {
  const deleteButton = document.createElement('button')
  deleteButton.textContent = '削除';
  deleteButton.className = 'deleteClassName';

  deleteButton.addEventListener('click', () => {
    deleteTodo (number);
    updateStatus ();
    showTodos ();
    });
   }


function deleteTodo (number) {
  todos.splice(number, 1);
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
