const defaltResult = 0;
let currentResult = defaltResult;

function addition() {
  currentResult = currentResult + parseInt(userInput.value);
  outputResult(currentResult, '');
}

addBtn.addEventListener("click", addition);

