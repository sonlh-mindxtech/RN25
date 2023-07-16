// js ->
// const express = require('express')

import { dbConnection } from './db/index.js';
import express from 'express'


import router from "./router/index.js";
const app = express()
const port = 3000


// define behavior to procesxxs request
// Ordering paths matter
app.use(express.json()) // body parser
app.use(router)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
