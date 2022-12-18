require("dotenv").config()
const { Spot } = require('@binance/connector')

// TODO: Will implement sell config
const SALE_CONFIG = {
    symbol: 'BTCUSDT',
    side: 'SELL',
    type: 'LIMIT',
    timeInForce: 'GTC',
    quantity: 15,
    price: 40.60
}

// TODO: Will implement buy config
const BUY_CONFIG = {
    symbol: 'USDTUAH',
    side: 'BUY',
    type: 'LIMIT',
    timeInForce: 'GTC',
    quantity: 15,
    price: 39.77
}

const run = () => {
    const client = new Spot(process.env.API_KEY, process.env.SECRET_KEY)

    const response = client.newOrder(BUY_CONFIG)
    console.log(response)
}

run()