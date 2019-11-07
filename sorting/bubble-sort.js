function bubbleSort(array, check = array.length - 1) {
    // Write your code here.
    if (check === 0 || check === -1){
        return array;
    }
    for ( let i = 0; i < array.length; i ++ ) {
        if (array[i] > array[i+1]) {
            [array[i+1], array[i]]= [array[i], array[i+1]]
        }
    }
    return bubbleSort(array, check-1)
}

// Do not edit the line below.
exports.bubbleSort = bubbleSort;
