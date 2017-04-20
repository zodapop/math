//<script src="arithmetic/WholeNumbers/placeValue.js"></script>

function placeValue(number, place){
  if(typeof(number) !== 'number' || !isPowerOf(10, place)){
    return null;
  }
  let stringNumber = '' + number,
      onesIndex = findOnesPlace(stringNumber);
  if(place == 1){
    return stringNumber[onesIndex]*1;
  }
  else if(place > 1){
    return stringNumber[onesIndex - ('' + place).length + 1]*1;
  }
  return stringNumber[onesIndex + ('' + place).length - 1]*1;
}

function findOnesPlace(stringNumber){
  if(!/^-?[0-9]\d+(\.\d+)?$/.test(stringNumber)){
    return null;
  }
  for(var i = 0; i < stringNumber.length; i++){
    if(stringNumber[i] == '.'){
      return i - 1;
    }
  }
  return i - 1;
}

function isPowerOf(base, number){
  if(typeof(base) !== 'number' || typeof(number) !== 'number' || number < 0.00000000008 && number > 0 || number > 999999999999999 || base === 0){ // cannot compute correct answers past these 2 limits
    return null;
  }
  else if(base > 0 && number < 0){
    return false;
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

// testRunner([assertEquality(placeValue(1930, 100), 9, 'integer is base 10 and greater than 1'),
// assertEquality(placeValue(1938.348, 10), 3, 'tens place'),
// assertEquality(placeValue(1938.348, 1), 8, 'ones place'),
// assertEquality(placeValue(1938.348, -1), null, 'negative place'),
// assertEquality(placeValue(1932348.348, 1000), 2, 'thousands place'),
// assertEquality(placeValue(1932348.348411, .001), 8, 'thousandths place'),
// assertEquality(placeValue(1932348.348411, .1), 3, 'tenths place'),
// assertEquality(placeValue(1932348.348411, 0.001), 8, 'sanity check'),
// assertEquality(placeValue(1938.348, 15), null, 'not base 10'),
// assertEquality(placeValue(1938.348, 0.0015), null, 'not base 10 and less than 10')]);
