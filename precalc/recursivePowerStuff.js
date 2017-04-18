function factorial(n){
  if(n == 0 || n == 1){
    return 1;
  }
  return n * factorial(n - 1);
}

function sigma(n){
  if(n === 1){
    return 1;
  }
  return n + sigma(n - 1);
}

function eulersNumber16Digits(n){
  if(n === 0){
    return 1 - 0.0000000000000005;
  }
  else if(!n){
    n = 17;
  }
  return 1/factorial(n) + eulersNumber16Digits(n - 1);
}

function powerIndex(base, exponent){
  if(exponent === 0){
    return 1;
  }
  let number = base;
  while(--exponent){
    number *= base;
  }
  return number;
}

function naturalLog(x, n){ // decent approximation for ln(x), where x < 500, and x > .000x
  if(n === 1 && x >= 0.5){
    return (x - 1)/x;
  }
  else if(n == 1){
    return x - 1;
  }
  else if(!n){
    n = 10000;
  }
  if(x >= 0.5){
    return powerIndex((x-1)/x, n)/n + naturalLog(x, n - 1);
  }
  else{
    return powerIndex(-1, n + 1)*powerIndex(x - 1, n)/n + naturalLog(x, n - 1);
  }
}

function ePowerSeries(x, n){ //decent approximation for exponents less than or equal to 100, guaranteed precision up to 5 decimal places, 16 decimal places for 75 and below
  if(n === 1){
    return x + 1;
  }
  else if(!n){
    n = 154;
  }
  return powerIndex(x, n)/factorial(n) + ePowerSeries(x, n - 1);
}

function power(base, exponent){
  if(base === 0 && exponent > 0){
    return 0;
  }
  else if(base === 0 && exponent <= 0){
    return undefined;
  }
  else if(exponent !== 0 && base > 0){
    return ePowerSeries(exponent*naturalLog(base));
  }
  else if(exponent !== 0 && base < 0){
    return ePowerSeries(exponent*naturalLog(-base));
  }
  else{
    return 1;
  }
}
