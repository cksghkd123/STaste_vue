import client from ".";

const MARKET_API = {
    getMarkets() {
        return client.get('/stores')
    },
    getMarketFoods(marketId: number) {
        return client.get(`/store/${marketId}/menu`)
    },

}

export default MARKET_API