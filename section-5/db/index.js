
import { DB_CONN_STR, DB_NAME, FOOD_COLLECTION_NAME, MERCHANT_COLLECTION_NAME } from './../config/index.js';
import { MongoClient } from 'mongodb';

const dbConnection = await MongoClient.connect(DB_CONN_STR)
console.log("DB Connection success")
export { dbConnection }

