const defaltResult = 0;
let currentResult = defaltResult;

function addition() {
  currentResult = currentResult + userInput.value;
}

addBtn.addEventListener("click", add);

outputResult(currentResult, calculationDescription);