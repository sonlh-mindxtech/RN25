import { Router } from "express"
// Full URL
import { randomCatHandler } from "../controller/randomCat.js"

const baseRouter = Router()

baseRouter.get('/random-cat/c',verifyUser, mw1,mw2,randomCatHandler)
// BTVN
// Viet api endpoint lấy random 1 tác giả từ api: https://lucifer-quotes.vercel.app/api/quotes
// Các bước như randomCat
// goi api -> edit -> send modified response to client
// baseRouter.get('/random-quote/c',randomQuoteHandler)

export default baseRouter
.post('/sign-up',signUpHandler)

// import { getPayment } from './../controller/payment'
// import { Router } from "express"
// import { paymentRouter } from './payment'
// // Full URL

// const baseRouter = Router()

// baseRouter.get('/payment/:paymentId', getPayment)

// baseRouter.use(paymentRouter)
// export default baseRouter

