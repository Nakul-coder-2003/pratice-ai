//package import
import express from "express"
import dotenv from "dotenv"

//configration
dotenv.config();
const app = express();
const port = 3000;

//middleware
app.use(express.json());
app.use(cookieParser());

//api
app.get("/api",(req,res)=>{
    res.send("hello");l
})
// server running
app.listen(port,()=>{
    connectDB()
    console.log(`server is running on ${port}`)
})
