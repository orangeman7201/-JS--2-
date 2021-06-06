'use strict';

const todos = [];

function updateTodos (word) {
  todos.push(word);
}

function showTodos () {
  todos.forEach((todo, index) => {
    const li = document.createElement('li')
    li.innerHTML = index;

    const span = document.createElement('span')
    span.innerHTML = todo;
    span.className = 'spanClassName';

    const statusButton = document.createElement('button')
    statusButton.textContent = '作業中';
    statusButton.className = 'statusClassName';
    
    const deleteButton = document.createElement('button')
    deleteButton.textContent = '削除';
    deleteButton.className = 'deleteClassName';

    li.append(span);
    li.append(deleteButton);
    li.append(statusButton);
    document.querySelector('ul').appendChild(li);
  });
};


document.querySelector('button').addEventListener('click', () => {

  const ul = document.querySelector('ul');
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  };

  const inputJS = document.getElementById('inputHTML');
  let todoItem = inputJS.value;
  updateTodos (todoItem);
  showTodos();
  inputJS.value = '';
  inputJS.focus();
});
