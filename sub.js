'use strict';

const todos = [];
const ul = document.querySelector('ul');

const statusButton = document.createElement('button');
statusButton.textContent = '作業中';
statusButton.className = 'statusClassName';

const deleteButton = document.createElement('button')
deleteButton.textContent = '削除';
deleteButton.className = 'deleteClassName';


function addTodo (word) {
    todos.push(word);
}

function showTodos () {
  if (todos.length == 1) {
    const li = document.createElement('li');
    li.innerHTML = 0;

    const span = document.createElement('span');
    span.innerHTML = todos[0];
    li.appendChild(span);
    li.appendChild(statusButton);
    createDeleteButton ();
    li.appendChild(deleteButton);
    ul.appendChild(li);
  } else {
      const todo0 = document.querySelectorAll('li')[0];
      const copy = todo0.cloneNode(true);
        copy.li.innerHTML = todos.length - 1;
        copy.span.innerHTML = todos[length - 1];
        copy.deleteButton.addEventListener('click', () => {
          deleteTodo (todos.length - 1);
        });
        ul.appendChild(copy);
  }
};

function createDeleteButton () {
  deleteButton.addEventListener('click', () => {
    todos.splice(todos.length - 1, 1);
  });
}

document.getElementById('submit-button').addEventListener('click', () => {
   
  const inputJS = document.getElementById('input-html');
  let todoItem = inputJS.value;
  addTodo(todoItem);
  showTodos();
  inputJS.value = '';
  inputJS.focus();
});
