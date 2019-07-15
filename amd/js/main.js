define(['modules/add'], function(add) {
  console.log('add', add)
  const number1 = document.querySelector('#number-1');
  const number2 = document.querySelector('#number-2');
  const total = document.querySelector('#total');
  const submitAdd = document.querySelector("#submit");

  submitAdd.addEventListener('click', () => {
    total.innerHTML = add.sum(parseInt(number1.value), parseInt(number2.value));
  });
});
