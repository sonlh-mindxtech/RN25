// js ->
// const express = require('express')
import express from 'express'
// import { helloHandler } from './controller'
import router from "./router/index.js";
const app = express()
const port = 3000


// define behavior to process request
// Ordering paths matter
app.use(router)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
