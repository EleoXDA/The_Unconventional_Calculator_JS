const defaltResult = 0;
let currentResult = defaltResult;

function getUserNumberInput() {
  return parseInt(userInput.value);
}

function addition() {
  const enteredNumber = getUserNumberInput();
  const calcDescription = `${currentResult} + ${enteredNumber}`; // it implicitly converts the value to string 
  // we also need to run it before the calculation so that we can get the previous currentResult
  currentResult = currentResult + enteredNumber; // parseFloat() could also be used but input cannot be a number with decimal points
  outputResult(currentResult, calcDescription);
}

function subtraction() {
  const enteredNumber = getUserNumberInput();
  const calcDescription = `${currentResult} - ${enteredNumber}`; // it implicitly converts the value to string 
  // we also need to run it before the calculation so that we can get the previous currentResult
  currentResult = currentResult - enteredNumber; // parseFloat() could also be used but input cannot be a number with decimal points
  outputResult(currentResult, calcDescription);
}

addBtn.addEventListener("click", addition);

