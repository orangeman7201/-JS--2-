'use strict';

const todos = ['買い物','洗濯'];

function addTodo () {
  const task = prompt ('タスクを入力してください!');
  alert ('新しいタスクを追加しました');
  todos.push(task);
}

function showTodo () {
  console.log('==========\nタスク一覧\n==========')
  todos.forEach((todo, index) => {
    console.log(`${index}:${todo}`);
  });
}

showTodo ();
addTodo ();
showTodo ();