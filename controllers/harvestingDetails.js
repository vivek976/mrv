const express=require("express")
const router=express.Router()
const dbConnect=require("../db/connect")
dbConnect(process.env.url)
const harvest=require("../models/harvesting.schema")
router.post("/harvestingDetails",async(req,res)=>{
    try
    {
        const { dateOfOperation, machine, labour } = req.body;
        await harvest.create({ dateOfOperation:dateOfOperation, machine:machine, labour:labour })
        res.send("created Sucessfully")
    }
    catch(error){
        res.send(error)
    }
})
module.exports=router