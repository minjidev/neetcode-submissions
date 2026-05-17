class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = []
        const closeToOpen = {
            ')': '(',
            ']': '[',
            '}': '{',
        };

        for (let ch of s) {
            if (closeToOpen[ch]) {
                // 닫는 괄호인 경우 
                if (stack.length > 0 & stack.at(-1) === closeToOpen[ch]) {
                    // 마지막으로 나온 여는 괄호가 현재 닫는 괄호와 짝이 맞는 경우 pop
                    stack.pop()
                } else {
                    return false
                }
            } else {
                // 여는 괄호인 경우 
                stack.push(ch)
            }

        }
        
        return stack.length === 0
    }
}
