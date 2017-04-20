//<script src="arithmetic/wholeNumbers/isFloat.js"></script>

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

// testRunner([
//   assertEquality(isFloat(16), false, 'integer'),
//   assertEquality(isFloat(291478), false, 'integer2'),
//   assertEquality(isFloat(-29), false, 'negative integer'),
//   assertEquality(isFloat(-21113), false, 'negative integer2'),
//   assertEquality(isFloat(3.5), true, 'is a float'),
//   assertEquality(isFloat(17.23535), true, 'is a float2'),
//   assertEquality(isFloat(-17.23535), true, 'is a neg float'),
//   assertEquality(isFloat(-535.11), true, 'is a neg float2'),
//   assertEquality(isFloat(0), false, 'zero is not a decimal')
// ]);
