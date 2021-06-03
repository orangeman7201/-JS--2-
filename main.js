'use strict';

function addList(sum) {
  const li = document.createElement('li')
  li.textContent = sum;
  document.querySelector('ul').appendChild(li);
};

function multipleCalculator(a, b) {
  let aSum = a;
  let bSum = b;   
  while (aSum < 100) {
    if (aSum < bSum) {
      addList(`Fizz${aSum}`);
      aSum += a;
    } else if (aSum > bSum) {
      addList(`Buzz${bSum}`);
      bSum += b;
    } else {
      addList(`FizzBuzz${aSum}`);
      aSum += a;
      bSum += b;
    }
  }; 
}

function isNumber(number) {
   const regex = /^([1-9]\d*|0)$/;
  return regex.test(number);
};

document.querySelector('button').addEventListener('click', () => {

  const ul = document.querySelector('ul');
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  };
  
  let fizzNum = document.getElementById('fizzInputField').value;
  let buzzNum = document.getElementById('buzzInputField').value;
  const fizzInputNumber = parseFloat(fizzNum);
  const buzzInputNumber = parseFloat(buzzNum);
  
  if ( fizzInputNumber !== '' && buzzInputNumber !== '' && isNumber(fizzNum) && isNumber(buzzNum)) {
    multipleCalculator(fizzInputNumber, buzzInputNumber);
  } else {
    addList('整数を入力してください');
  }
  
});
