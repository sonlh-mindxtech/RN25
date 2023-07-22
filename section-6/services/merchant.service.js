import { DB_NAME,MERCHANT_COLLECTION_NAME } from "./../config/index.js"
import { dbConnection } from "./../db/index.js"
import pkg from 'jsonwebtoken';

const queryMerchant = async (options) => {
	return dbConnection.db(DB_NAME).collection(MERCHANT_COLLECTION_NAME).find({}).toArray()
}

export { queryMerchant }
