const defaltResult = 0;
let currentResult = defaltResult;

function addition() {
  const result = currentResult + userInput.value;
  return result;
}

addBtn.addEventListener("click", add);

outputResult(currentResult, calculationDescription);