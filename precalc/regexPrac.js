let regex = /\-\s*\(/,
    string = '    -      (2+1)';

let exists = regex.search(string);
console.log(exists);

function factorial(n){
  if(n == 0 || n == 1){
    return 1;
  }
  return n*factorial(n-1);
}

function add(a, b){
  return a + b;
}

function eulersNumber(){
  if(!n){
    n = 100;
  }
  return add(1/factorial(n), eulersNumber(n-1));
}
