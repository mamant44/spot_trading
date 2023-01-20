require("dotenv").config()
const {Spot} = require('@binance/connector');

const workEnv = [process.env.API_KEY, process.env.SECRET_KEY]

const fetchCurrentPrice = () => {
    const client = new Spot([...workEnv])

    client.aggTrades('USDTUAH', {limit: 50})
        .then(response => client.logger.log(response.data))
        .catch(error => client.logger.error(error.message))
}

fetchCurrentPrice()

const createBuyOrder = () => {
    const client = new Spot(...workEnv)

    client.newOrder('USDTUAH', 'BUY', 'MARKET', {
        quantity: 11,
    }).then(response => client.logger.log(response.data))
        .catch(error => client.logger.error(error))
}

createBuyOrder()

const createSellOrder = () => {
    const client = new Spot(...workEnv)

    client.newOrder('USDTUAH', 'SELL', 'MARKET', {
        quantity: 11,
    }).then(response => console.log(response.data))
        .catch(error => console.log(error))
}

createSellOrder()


const TRAILING_CELL_PERCENT = 0.1;

const trade = () => {
    let higherPrice = 0;

    setInterval(() => {

        createSellOrder();

        const price = fetchCurrentPrice;

        if (price > higherPrice) {
            higherPrice = price
        }

        if (higherPrice + (higherPrice * (TRAILING_CELL_PERCENT / 100)) > price) {
            createBuyOrder()
        }
    }, 100)
}

trade()

// K_LINE_DATA.forEach(priceInfo => {
//     const price = getTestCurrentPrice(priceInfo.p)
//
//     if (price > higherPrice) {
//         higherPrice = price
//     }
//
//     if (higherPrice - (higherPrice * (TRAILING_CELL_PERCENT / 100)) <= price) {
//         createSellOrder()
//     }
//
//     console.log(price)
//     console.log(higherPrice)
// })