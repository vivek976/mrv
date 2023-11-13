const express=require("express")
const router=express.Router()
const dbConnect=require("../db/connect")
dbConnect(process.env.url)
const crop=require("../models/crop.schema")
router.post("/updateCropDetails",async(req,res)=>{
    try
    {
        const updatedCrop=await crop.updateOne({_id:req.body.id},{$set:req.body})
        if(updatedCrop.acknowledged){
        res.send(updatedCrop)
        }
        else{
            res.send("no updates are done")
        }
         
    }
    catch(error){
        res.send(error)
    }
})
module.exports=router