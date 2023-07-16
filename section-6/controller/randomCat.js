import fetch from "node-fetch"
import { writeFileSync,readFileSync } from "fs"
import { Buffer } from "buffer"

const randomCatHandler = async (request, response) => {
    // download file, save to server
    // 1. call http to cat-server
    // 2. write to file
    const catServerUrl = "https://cataas.com/c"
    const catResponse = await fetch(catServerUrl)
    const arrBuff = await catResponse.arrayBuffer()
    // console.log(catResponse.body)
    // console.log(typeof arrBuff )
    // blocker
    writeFileSync("cat-from-nodejs.jpg", Buffer.from(arrBuff))
    const data = readFileSync("cat-from-nodejs.jpg")

    response.setHeader("Content-Type","image/jpeg")
    response.send(data)

    // // await saveCatImage(catResponse)
    // // read the file -> send to client
    // response.body.Data = data
    // response.sendFile("/Users/sonluuhoang/sonlh/workspace/mindx/RN25/section-1/cat-from-nodejs.jpg")
}
export { randomCatHandler }
