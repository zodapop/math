function distance(point1, point2){
  return Math.pow(Math.pow(point2[0] - point1[0], 2) + Math.pow(point2[1] - point1[1], 2),1/2);
}
