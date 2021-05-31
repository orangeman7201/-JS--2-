'use strict';

function addList (sum) {
  const li = document.createElement('li')
  li.textContent = sum;
  document.querySelector('ul').appendChild(li);
};

function multipleCalculator (a, b) {
  let aSum = a;
  let bSum = b;   
  while (aSum < 100) {
    if (aSum < bSum){
      addList(`Fizz${aSum}`);
      aSum += a;
    }else if (aSum > bSum ) {
      addList(`Buzz${bSum}`);
      bSum += b;
    }else {
      addList(`FizzBuzz${aSum}`);
      aSum += a;
      bSum += b;
    }
  }; 
}

document.querySelector('button').addEventListener('click', () => {

  let ul = document.querySelector('ul');
  while(ul.firstChild) {
    ul.removeChild(ul.firstChild);
  };

  let x = parseInt(document.querySelectorAll('input')[0].value);
  let y = parseInt(document.querySelectorAll('input')[1].value);
  
  if (Number.isInteger(x) && Number.isInteger(y)) {
    multipleCalculator (x, y);
  }else{
    addList("整数を入力してください");
  }
  
});
