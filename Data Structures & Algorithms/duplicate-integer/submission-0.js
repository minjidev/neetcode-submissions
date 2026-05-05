class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const numSet = new Set(nums)

        // nums = []
        // nums = [1, 1, 1]
        // nums = [1]
        // nums = [3, 1, 2, 2]
        
        // O(1) 
        return numSet.size !== nums.length
    }
}
