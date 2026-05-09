class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        // 1. 브루트 포스 - O(N^2), O(1)
        // s.length <= 1000이니 1M 이여서 가능 
        // 2. reverse - O(N), O(N)
        // 3. 투포인터 - O(N), O(N)
        const cleanStr = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase()
        let p1 = 0
        let p2 = cleanStr.length - 1

        while (p1 < p2) {
            if (cleanStr[p1] !== cleanStr[p2]) return false

            // 같으면 다음 인덱스 체크 
            p1 += 1
            p2 -= 1
        }
        return true
    }
}
