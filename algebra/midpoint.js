function midpoint(point1, point2){
  let returnedArray = [];
  returnedArray[0] = (point1[0] + point2[0]) / 2;
  returnedArray[1] = (point1[1] + point2[1]) / 2;
  return returnedArray;
}

function midpoint(point1, point2){
  return [(point1[0] + point2[0]) / 2, (point1[1] + point2[1]) / 2];
}
