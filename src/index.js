import dotenv from "dotenv";
import connectDB from "./db/dbconnection.js";
import { app } from "./app.js";


dotenv.config()

// async always return a promis
connectDB()
    .then(() => {
        app.on("error", (error) => {
            console.log("ERROR:", error);
            throw error
            
        })

        app.listen(process.env.PORT || 8000, () => {
            console.log(`server is running on :${process.env.PORT}`);
        }) 
        })
    .catch((err) => {
        console.log("mongodb connection fail !!!", err);
    })