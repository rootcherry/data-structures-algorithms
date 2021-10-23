// Write two functions that finds the factorial of any number.
// One should use recursive, the other should just use a for loop.

function findFactorialRecursive(number) { // O(n)
  // if (number === 0) {
  //   return 1;
  // }
  // return number * findFactorialRecursive(number - 1);
    if (number === 2) {
      return 2;
    }
    return number * findFactorialRecursive(number - 1);
}

console.log(findFactorialRecursive(6));

function findFactorialIterative(number) { // O(n)
  // if (num === 0) {
  //   return 1;
  // }
  // let total = 1;
  // for (let i = number; i > 1; i--) {
  //   total *= i;
  // }
  // return total;
  let answer = 1;
  if (number === 2) {
    answer = 2;
  }
  for (let i = 2; i <= number; i++) {
    answer *= i;
  }
  return answer;
}

// console.log(findFactorialIterative(5));
