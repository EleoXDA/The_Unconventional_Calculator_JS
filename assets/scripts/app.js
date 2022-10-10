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

// function calculateResult(calculationType) {
//   if (
//     calculationType !== 'ADD' &&
//     calculationType !== 'SUBTRACT' &&
//     calculationType !== 'MULTIPLY' &&
//     calculationType !== 'DIVIDE' ||
//     !enteredNumber
//   ) {
//     return;
//   }

  // if (
  //   calculationType === 'ADD' ||
  //   calculationType === 'SUBTRACT' ||
  //   calculationType === 'MULTIPLY' ||
  //   calculationType === 'DIVIDE'
  // ) { -----------------------------> this was not chosen because it requires a lot of nested if codes

//   const enteredNumber = getUserNumberInput();
//   const initialResult = currentResult;
//   let mathOperator;
//   if (calculationType === 'ADD') {
//     currentResult += enteredNumber;
//     mathOperator = '+';
//   } else if (calculationType === 'SUBTRACT') {
//     currentResult -= enteredNumber;
//     mathOperator = '-';
//   } else if (calculationType === 'MULTIPLY') {
//     currentResult *= enteredNumber;
//     mathOperator = '*';
//   } else if (calculationType === 'DIVIDE') {
//     currentResult /= enteredNumber;
//     mathOperator = '/';
//   }
//   createAndWriteOutput(mathOperator, initialResult, enteredNumber);
//   writeToLog(calculationType, initialResult, enteredNumber, currentResult);
// }

// function addition() {
//   calculateResult('ADD');
// }

// function subtraction() {
//   calculateResult('SUBTRACT');
// }

// function multiplication() {
//   calculateResult('MULTIPLY');
// }

// function division() {
//   calculateResult('DIVIDE');
// }

function calculate(operation) {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  let operator;
  if (operation === 'ADD') {
    currentResult += enteredNumber;
    operator = '+';
  } else if (operation === 'SUBTRACT') {
    currentResult -= enteredNumber;
    operator = '-';
  } else if (operation === 'MULTIPLY') {
    currentResult *= enteredNumber;
    operator = '*';
  } else {
    currentResult /= enteredNumber;
    operator = '/';
  }
  createAndWriteOutput(operator, initialResult, enteredNumber);
  writeToLog(operation, initialResult, enteredNumber, currentResult);
}

addBtn.addEventListener('click', calculate.bind(this, 'ADD'));
subtractBtn.addEventListener('click', calculate.bind(this, 'SUBTRACT'));
multiplyBtn.addEventListener('click', calculate.bind(this, 'MULTIPLY'));
divideBtn.addEventListener('click', calculate.bind(this, 'DIVIDE'));
