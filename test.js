//<script src="test.js"></script>
function assertEquality(cb, expected, testName){
  if(cb == expected){
    return 'passed';
  }
  return testName;
}

function testRunner(testsArr){
  let returnedString = '',
      passed         = 0;
  for(let i = 0; i < testsArr.length; i++){
    if(testsArr[i] == 'passed'){
      passed++;
    }
    else{
      returnedString += 'Failed: ' + testsArr[i] + '\n'
    }
  }
  returnedString += passed + ' tests passed out of ' + testsArr.length;
  console.log(returnedString);
}
