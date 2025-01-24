// require('dotenv').config({path: './env'})
import dotenv from "dotenv"
import connectDB from "./db/index.js"
import { app } from "./app.js"
dotenv.config({path: './.env'})

connectDB()
.then(() => {
    app.listen(process.env.PORT|| 8000,  () => {
        console.log(`app is listing on ${process.env.PORT}`);
        
    })
})
.catch((err) =>{
    console.log("MOngoDB connection FAILED", err);

})



/*
import express from "express"
const app = express()


( async () => {
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error=>", (err) =>{
            console.log("Error=>", err);
            throw err
            
        })
        app.listen(process.env.PORT, () => {
            console.log(`app is listing on ${process.env.PORT}`);
            
        })

    } catch (error) {
        console.log("ERROR: ", error);
        throw err
        
    }
}) ()*/