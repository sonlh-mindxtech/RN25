import { Router } from "express"
// Full URL
import { randomCatHandler } from "../controller/randomCat.js"

const baseRouter = Router()

baseRouter.get('/random-cat/c',randomCatHandler)
baseRouter.get('/random-quote/c',randomQuoteHandler)

export default baseRouter


// import { getPayment } from './../controller/payment'
// import { Router } from "express"
// import { paymentRouter } from './payment'
// // Full URL

// const baseRouter = Router()

// baseRouter.get('/payment/:paymentId', getPayment)

// baseRouter.use(paymentRouter)
// export default baseRouter

