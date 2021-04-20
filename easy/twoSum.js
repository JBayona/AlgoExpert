/*
The two sum problem is a common interview question, and it is a variation
of the subset sum problem. There is a popular dynamic programming solution for
the subset sum problem, but for the two sum problem we can actually write an algorithm that runs in O(n) time. The challenge is to find all the pairs of
two integers in an unsorted array that sum up to a given S. 

For example, if the array is [3, 5, 2, -4, 8, 11] and the sum is 7, your program should return [[11, -4], [2, 5]] because 11 + -4 = 7 and 2 + 5 = 7.
*/

// O(n^2)
function twoSum(array, target) {
    var result = [];

    // Check each element in the array
    for(let i = 0; i < array.length; i++) {
        for(let j = i + 1; j < array.length; j++) {
            // Determine if we have those elements  in the array
            if(array[i] + array[j] === target) {
                result.push([array[i], array[j]]);
            }
        }
    }

    return result;
}

// O(n)
function twoSum(array, target) {
    let hash = {};
    var result = [];

    // Check each element in the array
    for(let i = 0; i < array.length; i++) {
        let tmp = target - array[i];
        if(tmp in hash) {
            result.push([hash[tmp], array[i]]);
        }

        hash[array[i]] = array[i];
    }

    return result;
}

console.log(twoSum([3, 5, 2, -4, 8, 11], 7));
