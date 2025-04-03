"use server"
import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI ?? 'mongodb://localhost:27017/io-farm';

if (!MONGODB_URI || MONGODB_URI === '' || MONGODB_URI === undefined) {
    throw new Error('Please define the MONGODB_URI environment variable');
}

// /** 
//  * Cached connection for MongoDB.
//  */
// let cached = global.mongoose;

// if (!cached) {
//     cached = global.mongoose = { conn: null, promise: null };
// }

// async function dbConnect() {
//     if (cached.conn) {
//         return cached.conn;
//     }

//     if (!cached.promise) {
//         cached.promise = mongoose.connect(MONGODB_URI).then((mongoose) => {
//             return mongoose;
//         });
//     }
//     cached.conn = await cached.promise;
//     return cached.conn;
// }

////////////////////////// other method to connect to MongoDB//////////////////////////

let connection: any = null;
const dbConnect = async () => {

    if (connection) {
        console.log('Using existing MongoDB connection');
        return connection;
    }
    
    try {
        connection = await mongoose.connect(MONGODB_URI);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
    
    // console.log("mongodb connection: ",Boolean(connection.connection.readyState));
    console.log("mongodb connection: ",Boolean(connection));
    return connection;
};

export default dbConnect;

////////////////////////// other method to connect to MongoDB//////////////////////////

// import { MongoClient } from 'mongodb';
// import {nextConnect} from 'next-connect';

// const client = new MongoClient('{YOUR-MONGODB-CONNECTION-STRING}', {
//     // useNewUrlParser: true,
//     // useUnifiedTopology: true,
// });

// async function database(req:any, res:any, next:any) {
//     req.dbClient = client;
//     req.db = client.db('MCT');
//     return next();
// }

// const middleware = nextConnect();

// middleware.use(database);

// export default middleware;