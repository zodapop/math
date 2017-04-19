//<script src="woodsPrealgebra/wholeNumberClass.js"></script>
class WholeNumber{
  constructor(number){
    if(!this._isWholeNumber(number)){
      return null;
    }
    this.number = number;
  }
  placeValue(place){
    if(!this._isPowerOfTen(10, place)){
      return null;
    }
    let stringNumber = '' + this.number,
        placeLength  = ('' + place).length,
        onesIndex    = this._findOnesPlace(stringNumber);
    if(place == 1){
      return stringNumber[onesIndex]*1;
    }
    else if(place > 1){
      return stringNumber[onesIndex - placeLength + 1]*1;
    }
    return stringNumber[onesIndex + placeLength - 1]*1;
  }
  _findOnesPlace(stringNumber){
    for(var i = 0; i < stringNumber.length; i++){
      if(stringNumber[i] == '.'){
        return i - 1;
      }
    }
    return i - 1;
  }
  _isPowerOfTen(number){
    if(typeof(number) !== 'number' || number < 0.00000000008 || number > 999999999999999){
      return null;
    }
    while(number < 10){
      number *= 10;
      if(number > 10){
        return false;
      }
    }
    if(number % 10 === 0){
      return true;
    }
    return false;
  }
  _isWholeNumber(number){
    if(number < 999999999999999 && number > 0 && !this._isFloat(number)){ // cannot compute correct answers past these 2 limits
      return true;
    }
    return false;
  }

  _isFloat(number){
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
}
