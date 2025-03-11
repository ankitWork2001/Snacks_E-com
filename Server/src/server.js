import express from "express";
import connectDB from "./config/db.js";


const app=express();
app.use(express.json());

connectDB().then(()=>{
    console.log(process.env.MONGO_URL);
    app.listen(process.env.PORT,()=>{
        console.log("Server Listening on port",process.env.PORT)
    })
}).catch((err)=>{
    console.log("Error",err);
})
