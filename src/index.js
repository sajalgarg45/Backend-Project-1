import dotenv from 'dotenv';
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
});
connectDB();

// Approach 1
// import mongoose from 'mongoose';
// import { DB_Name } from './constants.js';
// import connectDB from "./db";
// require('dotenv').config();

/*
import express from 'express';
const app = express();
( async ()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`)
        app.on("error", (error)=>{
            console.log("Error connecting to database")
            throw error
        })
        app.listen(process.env.PORT, ()=>{
            console.log(`Server is running on port ${process.env.PORT}`)
        })
    }catch(error){
        console.error(error);
    }
})()
*/