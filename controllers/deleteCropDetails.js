const express=require("express")
const router=express.Router()
const dbConnect=require("../db/connect")
dbConnect(process.env.url)
const crop=require("../models/crop.schema")
router.post("/deleteCropDetails",async(req,res)=>{
    try
    {
        const deleteCrop=await crop.deleteOne({_id:req.body.id})
        if(deleteCrop.deletedCount=== 1)
        {
            res.send("crop deleted sucessfully")
        }
        else
        {
            res.status(404).send("crop not found")
        }
    }
    catch (error) {
        console.error("Error deleting crop:", error);
        res.status(500).send("Internal Server Error");
    }

})
module.exports=router