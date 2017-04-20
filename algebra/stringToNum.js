function findNum(str, val){
  let nums   = [],
      numStr = '';
  for(let i = 0; i < str.length; i++){
    if(str.charCodeAt(i) > 47 && str.charCodeAt(i) < 58 || str[i] == '.' || i == 0 && str[i] == '-'
    || str[i] == '-' && str[i - 1] == '('){
      numStr += str[i];
    }
    else if(str[i] == 'x'){
      if(numStr){
        nums.push(numStr);
        numStr = '';
      }
      numStr += val;
    }
    else if(str[i] == '(' && str[i - 1] == '-' && i == 1){
      numStr += '1';
      nums.push(numStr);
      numStr = '';
    }
    else if(numStr){
      nums.push(numStr);
      numStr = '';
    }
  }
  if(numStr){
    nums.push(numStr);
  }
  for(let j = 0; j < nums.length; j++){
    nums[j] *= 1;
  }
  return nums;
}

function powerIndex(base, exponent){
  if(exponent === 0){
    return 1;
  }
  let number = base;
  while(--exponent){
    number *= base;
  }
  return number;
}

function trim(string){
  let newS = '';
  for(let i = 0; i < string.length; i++){
    if(string[i] !== ' '){
      newS += string[i];
    }
  }
  return newS;
}

function findOperands(str){
  let ops = [];
  for(let i = 0; i < str.length; i++){
    if(str[i] == '(' && (str[i - 1] == ')' || str[i - 1] == 'x' || str.charCodeAt(i - 1) > 47 && str.charCodeAt(i - 1) < 58 || str[i - 1] == '-' && i == 1)){
      ops.push('*');
      ops.push('(');
    }
    else if(str[i] == 'x' && str.charCodeAt(i - 1) > 47 && str.charCodeAt(i - 1) < 58){
      ops.push('*');
    }
    else if(str[i] == '%' || str.charCodeAt(i) > 39 && str.charCodeAt(i) < 44
    || str[i] == '-' && i !== 0 && str[i - 1] !== '(' || str[i] == '/' || str[i] == '^'){
       ops.push(str[i]);
    }
  }
  return ops;
}

function removeAt(arr, idx){
  for(let i = idx; i < arr.length - 1; i++){
    arr[i] = arr[i + 1];
  }
  arr.length--;
}

function insertAt(arr, idx, item){
  for(let i = arr.length - 1; i >= idx; i--){
    arr[i + 1] = arr[i];
  }
  arr[idx] = item;
}

function add(a, b){
  return a + b;
}

function modulo(a, b){
  return a % b;
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

function arithmeticSwitch(numArr, opsArr, operand, idx){
  if(operand == '^'){
    numArr[idx] = powerIndex(numArr[idx], numArr[idx + 1]);
    removeAt(numArr, idx + 1);
    removeAt(opsArr, idx);
  }
  else if(operand == '*'){
    numArr[idx] = multiply(numArr[idx], numArr[idx + 1]);
    removeAt(numArr, idx + 1);
    removeAt(opsArr, idx);
  }
  else if(operand == '/'){
    numArr[idx] = divide(numArr[idx], numArr[idx + 1]);
    removeAt(numArr, idx + 1);
    removeAt(opsArr, idx);
  }
  else if(operand == '%'){
    numArr[idx] = modulo(numArr[idx], numArr[idx + 1]);
    removeAt(numArr, idx + 1);
    removeAt(opsArr, idx);
  }
  else if(operand == '+'){
    numArr[idx] = add(numArr[idx], numArr[idx + 1]);
    removeAt(numArr, idx + 1);
    removeAt(opsArr, idx);
  }
  else{
    numArr[idx] = subtract(numArr[idx], numArr[idx + 1]);
    removeAt(numArr, idx + 1);
    removeAt(opsArr, idx);
  }
}

function evaluate(string, val, numArr, opsArr){
  if(string){
    let trimmedString = trim(string);
    numArr = findNum(trimmedString, val);
    opsArr = findOperands(trimmedString);
  }
  let seek    = ['(', '^', 'm/d/modulo', '+', '-'],
      seekIdx = 0,
      idx     = 0;
  while(opsArr.length){
    if(opsArr[idx] == seek[seekIdx] && seekIdx === 0){
      let parenCount = 1,
          newOpsArr  = [],
          newNumArr  = [];
      removeAt(opsArr, idx);
      newNumArr.push(numArr[idx]);
      removeAt(numArr, idx);
      while(parenCount){
        if(opsArr[idx] == ')'){
          if(parenCount == 1){
            insertAt(numArr, idx, 'placeholder');
            removeAt(opsArr, idx);
          }
          else{
            newOpsArr.push(opsArr[idx]);
            removeAt(opsArr, idx);
          }
          parenCount--;
        }
        else if(opsArr[idx] == '('){
          parenCount++;
          newOpsArr.push(opsArr[idx]);
          removeAt(opsArr, idx);
        }
        else{
          newOpsArr.push(opsArr[idx]);
          removeAt(opsArr, idx);
          newNumArr.push(numArr[idx]);
          removeAt(numArr, idx);
        }
      }
      numArr[idx] = evaluate('', 0, newNumArr, newOpsArr);
    }
    else if(seekIdx == 2){
      if(opsArr[idx] == '*'){
        arithmeticSwitch(numArr, opsArr, '*', idx);
        idx--;
      }
      else if(opsArr[idx] == '/'){
        arithmeticSwitch(numArr, opsArr, '/', idx);
        idx--;
      }
      else if(opsArr[idx] == '%'){
        arithmeticSwitch(numArr, opsArr, '%', idx);
        idx--;
      }
    }
    else if(opsArr[idx] == seek[seekIdx]){
      arithmeticSwitch(numArr, opsArr, seek[seekIdx], idx);
      idx--;
    }
    if(idx == opsArr.length){
      idx = -1;
      seekIdx++;
    }
    idx++;
  }
  return numArr[0];
}

console.log(evaluate('4(3x + 2)/2', 15));
