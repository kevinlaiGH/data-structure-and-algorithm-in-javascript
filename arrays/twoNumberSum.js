// https://leetcode.com/problems/two-sum/

// Solution 2) Write a function that will sort the array ascending/ use in built function

// if target sum = 10

// sorted array = [ -4, -1, 1, 3, 5, 6, 8, 11 ]

// program runs like this: -4 + 11 = 7 < 10 so we need to move left pointer from L to R
// next integer is -1 and 11 => perfect, we got 10 (target sum)!
// next integer 1


// [3, 5, -4, 8, 11, 1, -1, 6] => sort: [-4, -1, 1, 3, 5, 6, 8, 11]

function twoNumberSum(array, targetSum) {
	array.sort((a,b) => (a-b))

	let left = 0;
	let right = array.length - 1;


	while (left < right) {
		const currentSum = array[left] + array[right]
		if (currentSum == targetSum) {
			return [array[left], array[right]]
		} else if (currentSum < targetSum ) {
			left ++
		} else {
			right--
		}
	}
	return []
}

exports.twoNumberSum = twoNumberSum;
