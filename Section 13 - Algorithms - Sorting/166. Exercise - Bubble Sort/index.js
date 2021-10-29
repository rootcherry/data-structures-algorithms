const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {
  let end = array.length;
  let flag = false;
  for (let i = 0; i < end - 1; i++) {
    for (let j = 0; j < end - 1 - i; j++) {
      let temp;
      if (array[j] > array[j + 1]) {
        temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        flag = true;
      }
    }
    if (flag === false) {
      break;
    }
  }
}
  
bubbleSort(numbers);
console.log(numbers);

// Solution
// const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// function bubbleSort(array) {
//   const length = array.length;
//   for (let i = 0; i < length; i++) {
//     for (let j = 0; j < length; j++) { 
//       if(array[j] > array[j+1]) {
//         //Swap the numbers
//         let temp = array[j]
//         array[j] = array[j+1];
//         array[j+1] = temp;
//       }
//     }        
//   }
// }

// bubbleSort(numbers);
// console.log(numbers);