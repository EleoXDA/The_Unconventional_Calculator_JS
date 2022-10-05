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

function addition() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult += enteredNumber;
  createAndWriteOutput('+', initialResult, enteredNumber);
  writeToLog('addition', initialResult, enteredNumber, currentResult);
}

function subtraction() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult -= enteredNumber;
  createAndWriteOutput('-', initialResult, enteredNumber);
  writeToLog('subtraction', initialResult, enteredNumber, currentResult);

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
