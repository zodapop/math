function numberToExpandedForm(number){
  let stringNum       = number + '';
      power           = powerOfTen(findOnesPlace(stringNum)),
      expansionString = '',
      i               = 0,
      sign            = ' + ';
  if(stringNum[0] == '-'){
    i = 1, sign = ' - ', expansionString += '-', power /= 10;
  }
  for(i; i < stringNum.length; i++){
    if(stringNum[i] !== '.' && i !== stringNum.length - 1){
      if(stringNum[i] != 0){
        expansionString += stringNum[i]*power + sign;
      }
      power /= 10;
    }
    else if(i === stringNum.length - 1){
      expansionString += stringNum[i]*power;
    }
  }
  return expansionString;
}

function findOnesPlace(stringNumber){
  for(var i = 0; i < stringNumber.length; i++){
    if(stringNumber[i] == '.'){
      return i - 1;
    }
  }
  return i - 1;
}

function powerOfTen(exp){
  let value = 1;
  while(exp){
    value *= 10;
    exp--;
  }
  return value;
}
