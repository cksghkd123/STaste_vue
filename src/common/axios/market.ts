import client from ".";

const MARKET_API = {
    getMarkets() {
        return client.get('/markets')
    },
    getMarketDetails(marketId: number) {
        return client.get(`/market/${marketId}/menu`)
    },


}

export default MARKET_API