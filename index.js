require("dotenv").config()
const ccxt = require("ccxt")
const axios = require("axios")

console.log(process.env.SECRET_KEY)

const run = () => {
    const binanceClient = new ccxt.binance({
        apiKey: process.env.API_KEY,
        secret: process.env.SECRET_KEY
    })

    console.log({binanceClient})
}

run()