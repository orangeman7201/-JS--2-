'use strict';

let todo = new Array('==========','タスク一覧','==========','買い物','洗濯');
console.log (todo.join('\n'));

function Addtodo () {
let word = prompt ('タスクを入力してください!');
alert ('新しいタスクを追加しました');
todo.push(word);
console.log (todo.join('\n'));
}

Addtodo ();
