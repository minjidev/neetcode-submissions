class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        // 각 위치에서 이제까지의 최소값과 비교한다.

        let minPrice = prices[0] 
        let maxProfit = 0
        for (let i=1;i<prices.length;i++) {
            // 오늘 가격이 내렸으면 손해임. 팔지 않는다.
            // 오늘 가격과 min 가격이 같은 경우는 이익이 0.
            const todayPrice = prices[i]
            if (todayPrice < minPrice) {
                // 최소값 갱신
                minPrice = todayPrice
            } else {
                // 가격이 올랐다면? 
                const todayProfit = todayPrice - minPrice
                // 더 수익 많이 낼 수 있는 날이면 maxProfit 갱신 
                if (maxProfit < todayProfit) {
                    maxProfit = todayProfit
                }
            }

  
        }

        return maxProfit
    }
}
