const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// function merge (a, lb, mid, ub) {
//   let i = lb;
//   let j = mid + 1;
//   let k = lb;
//   let b = [];

//   while (i <= mid && j <= ub) {
//     if (a[i] <= a[j]) {
//       b[k] = a[i];
//       i++;
//     } else {
//       b[k] = a[j];
//       j++;
//     }
//     k++;
//   }

//   if (i > mid) {
//     while (j <= ub) {
//       b[k] = j[k];
//       j++;
//       k++;
//     }
//   } else {
//     while (i <= mid) {
//       b[k] = a[i];
//       i++;
//       k++;
//     }
//   }

//   for (k = lb; k <= ub; k++) {
//     a[k] = b[k];
//   }
// }

// Solution
function mergeSort (array) {
  if (array.length === 1) {
    return array
  }
  // Split Array in into right and left
  const length = array.length;
  const middle = Math.floor(length / 2)
  const left = array.slice(0, middle) 
  const right = array.slice(middle)
  // console.log('left:', left);
  // console.log('right:', right);

  return merge(
    mergeSort(left),
    mergeSort(right)
  )
}

function merge(left, right){
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while(leftIndex < left.length && 
        rightIndex < right.length){
     if(left[leftIndex] < right[rightIndex]){
       result.push(left[leftIndex]);
       leftIndex++;
     } else{
       result.push(right[rightIndex]);
       rightIndex++
    }
  }  
  // console.log(left, right)
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

const answer = mergeSort(numbers);
console.log(answer);
