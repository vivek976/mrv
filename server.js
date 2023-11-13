require('dotenv').config();
const express=require("express")
const routes=require("./routes/apis")
const app=express()
const dbConnect=require("./db/connect")
app.use(express.json())
app.get("/",async (req,res)=>{
    await dbConnect(process.env.url)
    res.send("connected")
})
app.use("/api/v1/",routes)
const port=process.env.PORT||5000
app.listen(port,()=>{
    console.log(`connected sucessfully to port ${port}`)
})