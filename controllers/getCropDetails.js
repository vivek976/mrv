const express=require("express")
const router=express.Router()
const dbConnect=require("../db/connect")
dbConnect(process.env.url)
const crop=require("../models/crop.schema")
router.post("/getCropDetails",async(req,res)=>{
    try{
        const cropInfo=await crop.find({_id:req.body.id})
        res.send(cropInfo)
    }
    catch(error)
    {
        res.send(error)
    }

})
module.exports=router