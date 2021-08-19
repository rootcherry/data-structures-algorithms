function compressBoxesTwice(boxes) {
    boxes.forEach(function(boxes) {
        console.log(boxes);
    });

    boxes.forEach(function(boxes) {
        console.log(boxes);
    });
}

// Big O Notation

// O(2n) -> O(n)

function compressBoxesTwice(boxes, boxes2) {
    boxes.forEach(function(boxes) {
        console.log(boxes);
    });

    boxes2.forEach(function(boxes) {
        console.log(boxes);
    });
}

// Big O Notation

// O(a + b)

// rule 1: worst case
// rule 2: remove constants
// rule 3: different terms for inputs
// rule 4: drop non dominants
