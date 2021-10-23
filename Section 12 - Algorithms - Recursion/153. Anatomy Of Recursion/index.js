let counter = 0;
function inception() {
  // console.log(counter);
  if (counter > 3) { // base case - when to stop
    return 'done!';
  }
  counter++;
  return inception(); // recursive case - when counter is greater than 3
}

console.log(inception());

// 1. Identify the base case
// 2. Identify the recursive case
// 3. Get closer and closer and return when needed. Usually you have 2 returns