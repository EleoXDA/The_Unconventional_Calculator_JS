const defaltResult = 0;
let currentResult = defaltResult;

function addition(num1, num2) {
  const result = num1 + num2;
  return result;
}

addBtn.addEventListener("click", add);

outputResult(currentResult, calculationDescription);