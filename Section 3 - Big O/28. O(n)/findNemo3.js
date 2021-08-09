const nemo = ['nemo'];
const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank'];
const large = new Array(100000).fill('nemo');

function findNemo(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 'nemo') {
            console.log('Found NEMO!');
        }
    }
}

// findNemo(nemo);
// findNemo(everyone);
findNemo(large); // O(n) --> Linear Time

// ES5
// function compressAllBoxes(boxes) {
//     boxes.forEach(function(item) {
//         console.log(item);
//     });
// }


// ES6 
// const compressAllBoxes = boxes => {
//     boxes.forEach(box => console.log(item));
// }