function knapsackProblem(items, capacity) {
    for ( let i = 0; i < items.length; i++) {
        const knapsackValues = [];
        for (let i = 0; i < items.length + 1; i++) {
            const row = new Array(capacity + 1).fill(0);
            knapsackValues.push(row);
        }
    }

}

knapsackProblem([[1, 2], [4, 3], [5, 6], [6, 7]], 10)


exports.knapsackProblem = knapsackProblem;
