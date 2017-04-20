function cartesianLocation(x,y){
  let returnedString = ['Quadrant 1', 'Quadrant 2', 'Quadrant 3', 'Quadrant 4',
                       'Lies on the positive X axis', 'Lies on the negative X axis',
                       'Lies on the positive Y axis', 'Lies on the negative Y axis',
                       'That\'s the origin!'];
  if(x === 0 && y === 0){
    return returnedString[8];
  }
  else if(x === 0 && y > 0){
    return returnedString[6];
  }
  else if(x === 0 && y < 0){
    return returnedString[7];
  }
  else if(x > 0 && y == 0){
    return returnedString[4];
  }
  else if(x < 0 && y == 0){
    return returnedString[5];
  }
  else if(x > 0 && y > 0){
    return returnedString[0];
  }
  else if(x < 0 && y > 0){
    return returnedString[1];
  }
  else if(x < 0 && y < 0){
    return returnedString[2]
  }
  else{
    return returnedString[3];
  }
}
