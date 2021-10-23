// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8

function fibonacciIterative(n){
  // Solution 1
  // let array = [n + 1];
  // array[0] = 0;
  // array[1] = 1;

  // for (let i = 2; i <= n; i++) {
  //   array[i] = array[i - 1] + array[i - 2];
  // }
  // return array[n];

  // Solution 2
  let arr = [0, 1];
  for (let i = 2; i < n + 1; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  return arr[n];
}
console.log(fibonacciIterative(3));

function fibonacciRecursive(n) {
  if (n <  2) {
    return n;
  }
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

// console.log(fibonacciRecursive(3));