function nameToNumber(numberWord){
  let numberWords = {one: 1, two: 2, three: 3 , four: 4, five: 5, six: 6,
                    seven: 7, eight: 8, nine: 9, ten: 10, eleven: 11,
                    twelve: 12, thirteen: 13, fourteen: 14,
                    fifteen: 15, sixteen: 16, seventeen: 17,
                    eighteen: 18, nineteen: 19, twenty: 20,
                    thirty: 30, forty: 40, fifty: 50, sixty: 60, seventy: 70,
                    eighty: 80, ninety: 90, hundred: 100, thousand: 1000,
                    million: 1000000, billion: 1000000000,
                    trillion: 1000000000000},
      number = '',
      answer = 0,
      sign = 1,
      i = 0,
      modifiers = ['thousand', 'million', 'billion', 'trillion'];
  if(numberWord[0] == 'n' && numberWord[1] == 'e'){
    sign = -1;
    i = 9;
  }
  for(i; i < numberWord.length; i++){
    if(numberWord[i] !== ' ' && numberWord[i] !== '-'){
      number += numberWord[i];
    }
    if(numberWords[number] && (numberWord[i + 1] == ' ' || numberWord[i + 1] == '-')){
      if(!existsInArray(number, modifiers)){
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
  answer += numberWords[number]*sign;
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
  for(let i = acceptedArr.length - 1; i > -1; i--){
    for(let j = startIdx; j < string.length; j++){
      if(string[j] == acceptedArr[i][wordIdx]){
        wordIdx++;
        if(wordIdx == acceptedArr[i].length){
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

//console.log(nameToNumber('negative eight billion four hundred thirty-two million six hundred twelve thousand two hundred two'));
