const letters = ['a', 'd', 'z', 'e', 'r', 'b'];
const basket = [2, 65, 34, 2, 1 ,7, 8];
const spanish = ['único', 'árbol', 'cosas', 'fútbol'];

console.log(basket.sort(function(a, b) {
  return a - b;
}));

// console.log(spanish.sort(function(a, b) {
//   return a.localeCompare(b);
// }));


