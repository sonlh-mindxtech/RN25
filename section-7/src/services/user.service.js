import { DB_NAME, USER_COLLECTION_NAME, SALT_ROUND, TOKEN_SECRET, TOKEN_EXPIRED_IN } from "./../config/index.js"
import { dbConnection } from "./../db/index.js"
import { hash, compare } from "bcrypt"
import pkg from 'jsonwebtoken';
const { sign } = pkg

const createUser = async (userData) => {
    let plainPsd = userData["password"]
    const psdHashValue = await hash(plainPsd, SALT_ROUND)
    // TODO: verify username before insert to database
    return dbConnection.db(DB_NAME).collection(USER_COLLECTION_NAME).insertOne({
        name: userData["name"],
        phoneNumber: userData["phoneNumber"],
        username: userData["username"],
        password: psdHashValue,
        customAddress: []
    })
}

const signUserIn = async (credential) => {
    const username = credential["username"]
    const promptedPsd = credential["password"]

    const result = await dbConnection.db(DB_NAME).collection(USER_COLLECTION_NAME).findOne({
        username: username
    })
    const hashedPsd = result["password"]
    const compareResult = await compare(promptedPsd, hashedPsd)
    if (!compareResult) throw new Error("Invalid Credential.")
    const token = await sign(JSON.parse(JSON.stringify(result)), TOKEN_SECRET, { expiresIn: TOKEN_EXPIRED_IN })
    return token
}


export default { createUser, signUserIn }

export { createUser, signUserIn }
