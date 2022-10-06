const defaltResult = 0;
let currentResult = defaltResult;
let logEntries = [];

function getUserNumberInput() {
  return parseInt(userInput.value);
}

function createAndWriteOutput(
  operator,
  resultBeforeCalculation,
  calculationNumber
) {
  const calcDescription = `${resultBeforeCalculation} ${operator} ${calculationNumber}`;
  outputResult(currentResult, calcDescription);
}

function writeToLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdentifier,
    previousResult: prevResult,
    number: operationNumber,
    result: newResult,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function calculateResult(calculationType) {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  let mathOperator;
  if (calculationType === 'ADD') {
    currentResult += enteredNumber;
    mathOperator = '+';
  } else {
    currentResult -= enteredNumber;
    mathOperator = '-';
  }
  createAndWriteOutput(mathOperator, initialResult, enteredNumber);
  writeToLog(calculationType, initialResult, enteredNumber, currentResult);
}

function addition() {
  calculateResult('ADD');
}

function subtraction() {
  calculateResult('SUBTRACT');
}

function multiplication() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult *= enteredNumber;
  createAndWriteOutput('*', initialResult, enteredNumber);
  writeToLog('multiplication', initialResult, enteredNumber, currentResult);
}

function division() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult /= enteredNumber;
  createAndWriteOutput('/', initialResult, enteredNumber);
  writeToLog('division', initialResult, enteredNumber, currentResult);
}

addBtn.addEventListener('click', addition);
subtractBtn.addEventListener('click', subtraction);
multiplyBtn.addEventListener('click', multiplication);
divideBtn.addEventListener('click', division);
