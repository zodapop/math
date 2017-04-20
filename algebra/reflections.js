function xReflect(point){
  point[0] = point[0] * -1;
  return point;
}

function yReflect(point){
  point[1] = point[1] * -1;
  return point;
}

function originReflect(point){
  point[0] = point[0] * -1;
  point[1] = point[1] * -1;
  return point;
}

function reflect(point, about){
  if(!about){
    return 'Please specify what to reflect over. The \'x\'-axis, \'y\'-axis, or \'origin\'. Make sure to surround your choice in quotes!';
  }
  if(about == 'origin'){
    return originReflect(point);
  }
  else if(about == 'x'){
    return xReflect(point);
  }
  else{
    return yReflect(point);
  }
}
