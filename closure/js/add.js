const add = (function(){
  const sum = (number1, number2) => {
    return number1 + number2;
  }
  return {
    sum,
  }
})();

window.add = add;
