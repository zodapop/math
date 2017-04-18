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

// testRunner([assertEquality(findOnesPlace('252342.342'), 5, 'index before decimal point is ones place'),
// assertEquality(findOnesPlace('-252342.342'), 6, 'index before decimal point is ones place with negative'),
// assertEquality(findOnesPlace('252.342'), 2, 'index before decimal point is ones place 2'),
// assertEquality(findOnesPlace('-252.342'), 3, 'index before decimal point is ones place with negative 2'),
// assertEquality(findOnesPlace('2520000'), 6, 'last index is ones place'),
// assertEquality(findOnesPlace('25dog000'), null, 'not a real number'),
// assertEquality(findOnesPlace('25.000.'), null, 'not a real number'),
// assertEquality(findOnesPlace('25.000'), 1, 'trailing 0s are fine'),
// assertEquality(findOnesPlace('--25000'), null, 'double negative sign'),
// assertEquality(findOnesPlace('2222'), 3, 'last index is ones place 2')]);
