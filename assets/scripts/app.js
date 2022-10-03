const defaltResult = 0;
let currentResult = defaltResult;

function addition() {
  currentResult = currentResult + parseInt(userInput.value); // parseFloat() could also be used but input cannot be a number with decimal points
  outputResult(currentResult, '');
}

addBtn.addEventListener("click", addition);

