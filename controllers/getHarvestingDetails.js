const express=require("express")
const router=express.Router()
const dbConnect=require("../db/connect")
dbConnect(process.env.url)
const harvest=require("../models/harvesting.schema")
router.post("/getHarvestingDetails",async(req,res)=>{
     try{
        const harvestInfo=await harvest.find({_id:req.body.id})
        res.send(harvestInfo)
     }
     catch(error)
     {
         res.send(error)
     }
 
})
module.exports=router