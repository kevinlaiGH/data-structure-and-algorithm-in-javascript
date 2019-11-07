function findClosestValueInBst(tree, target) {
    // Write your code here.
    return helper(tree, target, Infinity)

}

function ClosestValueBst(tree, target, closest){
    if (tree === null ) return closest;
    if (Math.abs(target- closest) > Math.abs(target - tree.value)) {
    closest = tree.value;
    }
    if (target <tree.value) {
        return helper(tree.left, target, closest)
    } else if (target > target.value) {
        return helper(tree.right, target, closest)
    } else {
        return null
    }

}

// Do not edit the line below.
exports.findClosestValueInBst = findClosestValueInBst;