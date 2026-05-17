class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = []
        const openings = ['(', '{', '[']
        const closing = [')', '}', ']']


        // pop한 요소가 현재 요소와 짝이 맞아야한다. 
        for (let i=0;i<s.length;i++) {
            const cur = s[i]

            if (openings.includes(cur)) {
                stack.push(cur)
            } else {
                // 가장 처음에 닫는 괄호가 나온 경우 
                if (!stack.length) return false    
                

                const lastOpening = stack.pop()
                const lastOpeningIndex = openings.indexOf(lastOpening)

                // 짝이 맞으면 계속 진행 
                if (closing[lastOpeningIndex] === cur) continue 
                else return false
            }


        }

        return true 
    }
}
