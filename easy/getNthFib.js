/*
The Fibonacci sequence is defined as follows: the first number of the sequence is 0, the second
number is 1, and the nth number is the sum of the (n - 1)th and (n - 2)th numbers. Write a function that takes in an integer n and returns the nth Fibonacci number.

Sample input: 6
Sample output: 5(0, 1, 1, 2, 3, 5)

https://www.algoexpert.io/questions/Nth%20Fibonacci
*/

// O(2^n) time | O(n) space
function getNthFib(n) {
    // Write your code here.
    if(n === 2) {
        return 1;
    }

    if(n === 1) {
        return 0;
    }
    
    return  getNthFib(n-1) + getNthFib(n-2);
}

// O(n) time | O(n) space
let hash = {};

function getNthFib(n) {
    // Write your code here.
    if(n === 2) {
        return 1;
    }

    if(n === 1) {
        return 0;
    }
    
    if(n in hash) {
        return hash[n];
    }
    
    hash[n] = getNthFib(n-1) + getNthFib(n-2);
    
    return hash[n];
}

// O(n) time | O(1) space

function getNthFib(n) {
    const lastTwo = [0, 1];
    let counter = 3;
    while(counter <= n) {
        const nextFib = lastTwo[0] + lastTwo[1];
        lastTwo[0] = lastTwo[1];
        lastTwo[1] = nextFib;
        counter++;
    }

    return n > 1 ? lastTwo[1] : lastTwo[0];
}

console.log(getNthFib(6));
