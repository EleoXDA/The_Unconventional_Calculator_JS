const defaltResult = 0;
let currentResult = defaltResult;

function addition(num1, num2) {
  const result = num1 + num2;
  alert("The result is " + result);
}

addition(1, 2);
addition(5, 5);

currentResult = ((currentResult + 10) * 3) / 2 - 1;

let calculationDescription = `(${defaltResult} + 10) * 3 / 2 - 1`;

outputResult(currentResult, calculationDescription);