const strings = ['a', 'b', 'c', 'd'];
// 4 * 4 = 16 bytes of storage
// Variable array is somewhere in memory and the computer knows it.
// When I do array[2], i'm telling the computer, hey go to the array and grab the 3rd item from where the array is stored.

console.log(strings[2]); // O(1)

// array methods

// push - add at the end of the array
strings.push('e'); // O(1)

// pop - remove the last item from the array
strings.pop();
strings.pop(); // O(1)

// unshift - add an item at the beginning
strings.unshift('x'); // O(n)

// splice - add an item in the middle
strings.splice(2, 0, 'alien'); // O(n)

console.log(strings);
