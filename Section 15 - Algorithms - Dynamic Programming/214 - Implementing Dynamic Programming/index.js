// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233...

let slowCalculations = 0;
let dynamicProgrammingCalculations = 0;

function fibonacci(n) { // O(2^n)
  slowCalculations++;
  if (n < 2) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

function fibobacciMaster(n) { // O(n)
  let cache = {}; // hashtable
  return function fib(n) { // closure --> const fasterFib = function fib(n) {}
    dynamicProgrammingCalculations++;
    if (n in cache) {
      return cache[n];
    } else {
      if (n < 2) {
        return n;
      } else {
        cache[n] = fib(n - 1) + fib(n - 2);
        return cache[n];
      }
    }
  }
}

const fasterFib = fibobacciMaster();

console.log('Slow..................: ' + fibonacci(35) + ' - we did ' + slowCalculations + ' calculations.');
console.log('Dynamic Programming...: ' + fasterFib(35) + ' - we did ' + dynamicProgrammingCalculations + ' calculations.');
