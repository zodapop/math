function nameToNumber(numberWord){
  let numberWords = {one: 1, two: 2, three: 3 , four: 4, five: 5, six: 6,
                    seven: 7, eight: 8, nine: 9, ten: 10, eleven: 11,
                    twelve: 12, thirteen: 13, fourteen: 14,
                    fifteen: 15, sixteen: 16, seventeen: 17,
                    eighteen: 18, nineteen: 19, twenty: 20,
                    thirty: 30, forty: 40, fifty: 50, sixty: 60, seventy: 70,
                    eighty: 80, ninety: 90, hundred: 100, thousand: 1000,
                    million: 1000000, billion: 1000000000,
                    trillion: 1000000000000, tenths: 0.1, hundredths: 0.01,
                    thousandths: 0.001, millionths: 0.000001,
                    billionths: 0.000000001},
      number = '',
      answer = 0,
      sign = 1,
      i = 0,
      modifiers = ['billionths', 'millionths', 'thousandths', 'hundredths',
                  'tenths', 'and', 'thousand', 'million', 'billion', 'trillion'];
  if(numberWord[0] == 'n' && numberWord[1] == 'e'){
    sign = -1;
    i = 9;
  }
  for(i; i < numberWord.length; i++){
    if(numberWord[i] !== ' ' && numberWord[i] !== '-'){
      number += numberWord[i];
    }
    else if(number == 'and'){
      number = '';
    }
    if(numberWords[number] && (numberWord[i + 1] == ' ' || numberWord[i + 1] == '-')){
      if(!existsInArray(number, modifiers) && number !== 'hundred'){
        let magnitude = findWord(numberWord, modifiers, i);
        if(magnitude && numberWord[i + 2] == 'h'){
          answer += numberWords[number]*numberWords[magnitude]*100*sign;
          i += 8;
        }
        else if(numberWord[i + 2] == 'h'){
          answer += numberWords[number]*100*sign;
          i += 8;
        }
        else if(magnitude){
          answer += numberWords[number]*numberWords[magnitude]*sign;
        }
        else{
          answer += numberWords[number]*sign;
        }
      }
      number = '';
      i++;
    }
  }
  if(!existsInArray(number, modifiers)){
    answer += numberWords[number]*sign;
  }
  return answer;
}

function existsInArray(item, array){
  for(let i = 0; i < array.length; i++){
    if(item == array[i]){
      return true;
    }
  }
  return false;
}

function findWord(string, acceptedArr, startIdx){
  if(!startIdx){
    startIdx = 0;
  }
  let wordIdx = 0;
  for(var i = acceptedArr.length - 1; i > -1; i--){
    for(let j = startIdx; j < string.length; j++){
      if(string[j] == acceptedArr[i][wordIdx]){
        wordIdx++;
        if(wordIdx == acceptedArr[i].length && (string[j + 1] == ' ' || j == string.length - 1)){
          if(wordIdx == 3){
            return null;
          }
          return acceptedArr[i];
        }
      }
      else{
        wordIdx = 0;
      }
    }
  }
  return null;
}

console.log(nameToNumber('negative eight billion four hundred thirty-two million six hundred twelve thousand two hundred two and two tenths eight thousandths'));
