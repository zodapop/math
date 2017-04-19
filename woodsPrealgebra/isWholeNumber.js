function isWholeNumber(number){
  if(number > 0 && !isFloat(number)){
    return true;
  }
  return false;
}

function isFloat(number){
  if(typeof(number) !== 'number'){
    return false;
  }
  let strNum = '' + number;
  for(let i = 0; i < strNum.length; i++){
    if(strNum[i] === '.'){
      return true
    }
  }
  return false;
}
