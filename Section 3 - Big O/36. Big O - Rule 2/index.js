function printFirstItemThenFirstHalfThenSayHi100Times(items) {
    console.log(items[0]);

    var middleIndex = Math.floor(items.length / 2);
    var index = 0;

    while (index < middleIndex) {
        console.log(items[index]);
        index++;
    }

    for (var i = 0; i < 100; i++) {
        console.log('hi');
    }
}

// O(1 + n/2 + 100) -> O(n/2 + 101) -> O(n + 1) -> O(n)

// O(a + 50) -> O(a)

// O(a + 50000000000) -> O(a)


function compressTwoBoxes(boxes) {
    boxes.forEach(function(boxes) {
        console.log(boxes);
    });

    boxes.forEach(function(boxes) {
        console.log(boxes);
    });
}

// O(2n) -> Drop the constants -> O(n)
