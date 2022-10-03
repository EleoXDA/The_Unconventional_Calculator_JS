const defaltResult = 0;
let currentResult = defaltResult;

function addition() {
  currentResult = currentResult + userInput.value;
  outputResult(currentResult, '');
}

addBtn.addEventListener("click", add);

