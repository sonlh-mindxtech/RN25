import { Router } from "express"
import { signInHandler, signUpHandler } from "../controller/users.js"
import { orderHandler } from "../controller/orders.js"
import { authorizationStatus } from "../middleware/authorization.js"
const router = Router()

// ...
router.post('/sign-up', signUpHandler)
router.post('/sign-in', signInHandler)
router.post('/order', authorizationStatus, orderHandler)
export default router


// import { getPayment } from './../controller/payment'
// import { Router } from "express"
// import { paymentRouter } from './payment'
// // Full URL

// const baseRouter = Router()

// baseRouter.get('/payment/:paymentId', getPayment)

// baseRouter.use(paymentRouter)
// export default baseRouter

