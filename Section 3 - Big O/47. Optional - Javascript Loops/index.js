const nemo = ['nemo'];
const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank'];
const large = new Array(100000).fill('nemo');
const performance = require('perf_hooks').performance;

function findNemo(array) {
    let t0 = performance.now();
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 'nemo') {
            console.log('Found NEMO!');
        }
    }
    // let t1 = performance.now();
    // console.log('Call to find Nemo took ' + (t1 - t0) + ' miliseconds');
}

findNemo(everyone);
// findNemo(everyone);
// findNemo(large);

// forEach
const findNemo2 = array => {
    array.forEach(fish => {
        if (fish === 'nemo') {
            console.log('Found NEMO!');
        }
    });
}

// for ... of
const findNemo3 = array => {
    for (let fish of array) {
        if (fish === 'nemo') {
            console.log('Found NEMO!');
        }
    }
}

findNemo2(everyone);
findNemo3(everyone);
