/*
Given two strings s and t, check if s is a subsequence of t.

A subsequence of a string is a new string that is formed from the original
string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

Example 1:

Input: s = "abc", t = "ahbgdc"
Output: true
Example 2:

Input: s = "axc", t = "ahbgdc"
Output: false

https://leetcode.com/problems/is-subsequence/
https://www.algoexpert.io/questions/Validate%20Subsequence
*/

// Time O(N) Where N is the length of T
// Space O(1)
var isSubsequence = function(s, t) {
    let index = 0;
    for(let i = 0; i < t.length; i++) {
        if(index < s.length && t[i] === s[index]) {
            index++;
        }
    }
    // If we find that it´s a subsequence
    if(index === s.length) {
        return true;
    }
    return false;
};

