function findThreeLargestNumbers(array) {
    // Write your code here.
    const threeLargest = [null, null, null];

    // we dont know how many elements in array, so we use for...of to take care of every array with different length
    for (const num of array){
        updateLargest(threeLargest, num);
    }
    return threeLargest;
}

function updateLargest(threeLargest, num){
    if (threeLargest[2] === null || num  > threeLargest[2]) {
        shiftAndUpdate(threeLargest, num, 2);
    } else if (threeLargest[1] === null || num > threeLargest[1]) {
        shiftAndUpdate(threeLargest, num, 1);
    } else if (threeLargest[0] === null || num > threeLargest[2]) {
        shiftAndUpdate(threeLargest, num, 0);
    }
}

function shiftAndUpdate(array, num, index){
    for ( let i = 0; i <= index ; i++){
        if (i === index){
            array[i] = num;
        } else {
            array[i] = array[i+1];
        }
    }
}

// Do not edit the line below.
exports.findThreeLargestNumbers = findThreeLargestNumbers;