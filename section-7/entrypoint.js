// js ->
// const express = require('express')

import { dbConnection } from './src/db/index.js';
import express from 'express'

import router from "./src/router/index.js";
import morgan from 'morgan';
const app = express()
const port = 3000


// define behavior to procesxxs request
// Ordering paths matter
app.use(express.json()) // body parser
app.use(morgan('tiny'))
app.use(router)

app.use("/", (req, res) => {
	res.status(200).json({
		"status": "alive"
	})
})

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})
