//<script src="arithmetic/WholeNumbers/WholeNumberClass.js"></script>
//lesson, save validation for front end inputs! 
class WholeNumber{
  constructor(number){
    this.value = number;
  }
  placeValue(place){
    let stringNumber = '' + this.value,
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
}
