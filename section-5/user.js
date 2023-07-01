// {
//     "name":"Luu Hoang Son",
//     "phoneNumber": "+84 971636141",
//     "password":"son1234",
//     "username":"sonlh123",
//   }

import { DB_NAME, USER_COLLECTION_NAME } from "./config/index.js"
import { dbConnection } from "./db/index.js"
import { hash, compare } from "bcrypt"
import pkg from 'jsonwebtoken';
const { sign,verify } = pkg
const SALT_ROUND = 10
const TOKEN_SECRET = '09f26e402586e2faa8da4c98a35f1b20d6b033c6097befa8be3486a829587fe2f90a832bd3ff9d42710a4da095a2ce285b009f0c3730cd9b8e1af3eb84df6611'

const createUser = async (userData) => {
    let plainPsd = userData["password"]
    const psdHashValue = await hash(plainPsd, SALT_ROUND)
    // TODO: verify username before insert to database

    await dbConnection.db(DB_NAME).collection(USER_COLLECTION_NAME).insertOne({
        name: userData["name"],
        phoneNumber: userData["phoneNumber"],
        username: userData["username"],
        password: psdHashValue,
        customAddress: []
    })
}

const userSignIn = async (credential) => {
    const username = credential["username"]
    const promptedPsd = credential["password"]

    const result = await dbConnection.db(DB_NAME).collection(USER_COLLECTION_NAME).findOne({
        username: username
    })
    const hashedPsd = result["password"]
    const compareResult = await compare(promptedPsd, hashedPsd)
    if (!compareResult) throw new Error("Invalid Credential.")

    const token = await sign(JSON.parse(JSON.stringify(result)), TOKEN_SECRET, { expiresIn: '40s' })
    return token
}

const tk = await userSignIn({
    "password": "son1234",
    "username": "sonlh123",
})

// createUser({
//     "name": "Luu Hoang Son",
//     "phoneNumber": "+84 971636141",
//     "password": "son1234",
//     "username": "sonlh123",
// })

// const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDlmZGZlNDNlOTE4OWFiMmVhNmQ4NjEiLCJuYW1lIjoiTHV1IEhvYW5nIFNvbiIsInBob25lTnVtYmVyIjoiKzg0IDk3MTYzNjE0MSIsInVzZXJuYW1lIjoic29ubGgxMjMiLCJwYXNzd29yZCI6IiQyYiQxMCRtZmhiOHo5SDRhZmhMVFlSRlZDb0plSWguZUdMOURkRmlqSGs0YUYvVGp5czE0ejZWS0FWTyIsImlhdCI6MTY4ODIwMDY4OSwiZXhwIjoxNjg4MjAwNzI5fQ.W0WvPuqXzT8wX8tLOu9nPpMilZWw3pnr-9emWaHtPmI"
console.log(tk)
const r = verify(tk,TOKEN_SECRET)
console.log(r)

// {
//     "password": "son1234",
//     "username": "sonlh123",
// }

POST '/sign-up'
POST '/sign-in'
