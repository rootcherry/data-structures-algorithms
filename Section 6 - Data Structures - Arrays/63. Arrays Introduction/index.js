const strings = ['a', 'b', 'c', 'd'];
// 4 * 4 = 16 bytes of storage

console.log(strings[2]);

// array methods

// push - add at the end of the array
strings.push('e'); // O(1)

// pop - remove the last item from the array
strings.pop();
strings.pop(); // O(1)

console.log(strings);
