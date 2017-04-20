function wordConvert(numberWord){
  let numberWords = {one: 1, two: 2, three: 3 , four: 4, five: 5, six: 6,
                    seven: 7, eight: 8, nine: 9, ten: 10, eleven: 11,
                    twelve: 12, thirteen: 13, fourteen: 14,
                    fifteen: 15, sixteen: 16, seventeen: 17,
                    eighteen: 18, nineteen: 19, twenty: 20,
                    thirty: 30, forty: 40, fifty: 50, sixty: 60, seventy: 70,
                    eighty: 80, ninety: 90, hundred: '00', thousand: '000',
                    million: '000000', billion: '000000000',
                    trillion: '000000000000'},
      number = '',
      answer = '',
      sign = ' + ',
      i = 0,
      acceptedArr = ['thousand', 'million', 'billion', 'trillion'];
  if(numberWord[0] == 'n' && numberWord[1] == 'e'){
    sign = ' - ';
    i = 9;
  }
  for(i; i < numberWord.length; i++){
    if(numberWord[i] !== ' ' && numberWord[i] !== '-'){
      number += numberWord[i];
    }
    if(numberWords[number] && (numberWord[i + 1] == ' ' || numberWord[i + 1] == '-')){
      if(number == 'hundred'){
        answer += numberWords[number];
      }
      else if(!existsInArray(number, acceptedArr)){
        if(answer){
          answer += sign;
        }
        else if(sign == ' - '){
          answer += '-';
        }
        let magnitude = findWord(numberWord, acceptedArr, i);
        if(magnitude){
          if(numberWords[number] > 10 && numberWords[number] < 20){
            answer += 10 + numberWords[magnitude] + sign + (numberWords[number] - 10) + numberWords[magnitude];
          }
          else{
            answer += numberWords[number] + numberWords[magnitude];
          }
        }
        else{
          answer += numberWords[number];
        }
      }
      number = '';
    }
  }
  if(numberWords[number]){
    answer += sign + numberWords[number];
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
