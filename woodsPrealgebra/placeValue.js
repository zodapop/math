//<script src="woodsPrealgebra/placeValue.js"></script>

function placeValue(number, place){
  if(!number || !place || place <= 0 || !isPowerOf(10, place)){
    return null;
  }
  let stringNumber = '' + number,
      onesIndex = findOnesPlace(stringNumber);
  if(place == 1){
    return stringNumber[onesIndex]*1;
  }
  return stringNumber[adjustPlace(place, onesIndex)]*1;
}

function adjustPlace(desiredPlace, onesIdx){
  let currentPlace = 1;
  if(currentPlace < desiredPlace){
    onesIdx++;
    while(currentPlace !== desiredPlace){
      currentPlace /= 10;
      onesIdx++;
    }
    return onesIdx;
  }
  while(currentPlace !== desiredPlace){
    currentPlace *= 10;
    onesIdx--;
  }
  return onesIdx;
}

function findOnesPlace(stringNumber){
  for(let i = 0; i < stringNumber.length; i++){
    if(stringNumber[i] == '.'){
      return i - 1;
    }
  }
  return i;
}

function isPowerOf(base, number){
  if(number < 0.00000000008 || number > 999999999999999){ // cannot compute correct answers past these 2 limits
    return null;
  }
  while(number < base){
    number *= base;
    if(number > base){
      return false;
    }
  }
  if(number % base === 0){
    return true;
  }
  return false;
}
