const express=require("express")
const router=express.Router()
const dbConnect=require("../db/connect")
dbConnect(process.env.url)
const Threshing=require("../models/threshing.schema")
router.post("/threshingDetails",async(req,res)=>{
    try
    {
        const {applicable, dateOfOperation, machine, labour } = req.body;
        await Threshing.create({applicable:applicable, dateOfOperation:dateOfOperation, machine:machine, labour:labour })
        res.send("created Sucessfully")
    }
    catch(error){
        res.send(error)
    }
})
module.exports=router