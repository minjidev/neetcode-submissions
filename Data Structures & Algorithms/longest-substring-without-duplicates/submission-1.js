class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        // 각 캐릭터의 coutnMap = { charCode: number } 로 출현 횟수 기록
        // O(n)을 돌면서 Map에 횟수를 증가시키고, 만약 현재 문자에 해당하는 charCode 의 값 >= 1 maxLen에 저장 
        // 쭉 가면서 maxLen을 갱신 
        // 공간 복잡도도 O(n)

        // char.charCodeAt(0)
        // char.codePointAt(0)

        let countMap = new Map()

        let startPos = 0
        let maxLen = 0
        for (let i=0;i<s.length;i++) {
            const curCharCode = s[i].charCodeAt(0)
            const curCharCodeCount = countMap.get(curCharCode)
            if (curCharCodeCount > 0) {
                // 중복 숫자임  - 여기부터 다시 세야한다. 
                // 즉 이전 값까지를 maxLen 에 저장 
                const curLen = i - startPos
                maxLen = Math.max(maxLen, curLen)
                startPos = i
                
                countMap = new Map()
                
            } 

            countMap.set(curCharCode, (curCharCodeCount ?? 0) + 1)
        }

        return maxLen || 1
    }
}

