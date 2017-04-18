function isPowerOf(base, number){
  if(number < 0.00000000008 || number > 999999999999999){ // cannot compute correct answers past these 2 limits
    return null;
  }
  while(number < base){
    number *= base;
    if(number > base){
      return false;
    }
  }
  if(number % base === 0){
    return true;
  }
  return false;
}

// testRunner([assertEquality(isPowerOf(10, 15), false, 'integer not base 10'),
// assertEquality(isPowerOf(10, 1000001), false, 'integer not base 10 2'),
// assertEquality(isPowerOf(10, 1000000), true, 'base 10 positive'),
// assertEquality(isPowerOf(10, 9385720), true, 'base 10 positive 2'),
// assertEquality(isPowerOf(10, 9385720000000000000000000), null, 'greater than upper limit'),
// assertEquality(isPowerOf(7, 63), true, 'different base positive'),
// assertEquality(isPowerOf(7, 707), true, 'different base positive 2'),
// assertEquality(isPowerOf(10, 0.10001), false, 'integer not base 10 and less than 1'),
// assertEquality(isPowerOf(10, 0.000000002), false, 'integer not base 10 and less than 1 2'),
// assertEquality(isPowerOf(10, 0.00001), true, 'integer less than 1 positive'),
// assertEquality(isPowerOf(10, 0.00000000001), null, 'lower limit'),
// assertEquality(isPowerOf(4, 0.0625), true, 'integer less than 1 positive 2'),
// assertEquality(isPowerOf(7, 7), true, 'integer equals power'),
// assertEquality(isPowerOf(10, 10), true, 'integer equals power 2')]);
