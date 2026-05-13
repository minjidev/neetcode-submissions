class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        // 슬라이딩 윈도우
        const charIndex = new Map()
        let left = 0
        let maxLen = 0

        for (let right=0;right<s.length;right++) {
            const ch = s[right]
            
            // map에 있고 그 위치가 윈도우 안이면 left 점프 
            if (charIndex.has(ch) && left <= charIndex.get(ch)) {
                left = charIndex.get(ch) + 1
            }

            // 매번 갱신
            charIndex.set(ch, right)
            maxLen = Math.max(maxLen, right - left + 1)
        }

        return maxLen
    }
}

