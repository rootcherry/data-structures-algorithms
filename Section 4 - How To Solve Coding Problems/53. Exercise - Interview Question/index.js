// Given 2 arrays, create a function that let's a user know (true/false) wether these two arrays contain any common items
// For example:
// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'i'];
// should return false.
// ------
// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'x'];
// should return true.

// arrays, function, boolean, comparison items two arrays

// inputs arr1, arr1 - outputs return true/false

// O(n^2) -> O(n)

// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'i'];

// const array3 = ['a', 'b', 'c', 'x'];
// const array4 = ['z', 'y', 'x'];

// // 2 params - arrays - no size limit
// // return true or false

// function compareItems(arr1, arr2) {
//     // loop arr 1
//     for (let i = 0; i < arr1.length; i++) {
//         // loop arr 2
//         for (let j = 0; j < arr2.length; j++) {
//             // if/else
//             if (arr1[i] === arr2[j]) {
//                 // output
//                 return true;
//             }
//         }
//     }
//     // output
//     return false;

//     // O(a*b)
// }

// console.log(compareItems(array1, array2));
// console.log(compareItems(array3, array4));

// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'i'];

// array1 ==> obj {
//     a: true,
//     b: true,
//     c: true,
//     x: true
// }
// array2[index] === obj.properties;

function compareItems2(arr1, arr2) {
    // loop through 1st arr and create obj where properties === items in the arr
    // loop through 2nd arr and check if item in second array exists on created obj

    

    // O(a + b)
}
