function add(a, b){
  return a + b;
}

function subtract(a, b){
  return a - b;
}

function multiply(a, b){
  return a * b;
}

function divide(a, b){
  return a / b;
}

function power(a, b){
  return Math.pow(a, b);
}


function evaluate(string){
  let nums = stringToInt(findNum(string)),
      ops  = findOperands(string);
}
