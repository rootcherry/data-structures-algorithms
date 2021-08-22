// create a function that reverses a string:
// 'Hi my name is Andrei' should be:
// 'ierdnA si eman yM iH'

let input = 'Hi my name is Andrei';

// for (let i = input.length; i >= 0; i--) {
// 	console.log(input[i]);
// }

function reverse(str) {
	if (!str || str.length < 2 || typeof str !== 'string') {
		return 'hmm that is not good!';
	}

	const backwards = [];
	const totalItems = str.length - 1;

	for(let i = totalItems; i >= 0; i--) {
		backwards.push(str[i]);
	}

	console.log(backwards);

	return backwards.join('');
}

function reverse2(str){
  //check for valid input
  return str.split('').reverse().join('');
}

const reverse3 = str => str.split('').reverse().join('');

const reverse4 = str => [...str].reverse().join('');

reverse(input);

console.log(reverse2('Hi my name is John'));

console.log(reverse3('Hi my name is Jane'));

console.log(reverse4('Hello, World!'));
