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
   let regex = new RegExp(/^[0-9]+(\.[0-9]+)?$/);
  return regex.test(number);
};

document.querySelector('button').addEventListener('click', () => {

  const ul = document.querySelector('ul');
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  };

  const fizzInputNumber = parseFloat(document.getElementById('fizzInputField').value);
  const buzzInputNumber = parseFloat(document.getElementById('buzzInputField').value);

  // console.log(isNumber(fizzInputNumber));
  
  if (Number.isInteger(fizzInputNumber) && Number.isInteger(buzzInputNumber) && fizzInputNumber !== '' && buzzInputNumber !== '') {
    multipleCalculator(fizzInputNumber, buzzInputNumber);
  } else {
    addList('整数を入力してください');
  }
  
});
