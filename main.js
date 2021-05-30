'use strict';

const todos = {
  掃除:'家事',
  洗濯:'家事'
};

function addTodo () {
  let task = prompt ('タスクを入力してください!');
  let genre = prompt ('ジャンルを入力してください!');
  alert ('タスクを追加しました');
  todos[task] = genre;
};

function showTodo () {
  console.log ('==========\nタスク一覧\n==========');
  const keys = Object.keys(todos);
  keys.forEach((key, index) => {
    console.log(`${index}: [内容]: ${key} [ジャンル]: ${todos[key]}`)
  });
}


showTodo ();
addTodo ();
showTodo ();