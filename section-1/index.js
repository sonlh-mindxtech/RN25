// js ->
// const express = require('express')
import express from 'express'
// import { helloHandler } from './controller'
const app = express()
const port = 3000

// define behavior to process request
app.get('/', (req, res) => {
    res.send('Hello World!')
})
// app.get('/hello', helloHandler)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
