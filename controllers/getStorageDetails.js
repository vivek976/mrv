const express=require("express")
const router=express.Router()
const dbConnect=require("../db/connect")
dbConnect(process.env.url)
const storage=require("../models/storage.schema")
router.post("/getStorageDetails",async(req,res)=>
{
    try{
        const Storage=await storage.find({_id:req.body.id})
        console.log(Storage)
        if(Storage.length==0)
        {
            res.send("Storage details not found")
        }
        else
        {
            res.send(Storage)
        }
        
    }
    catch(error)
    {
        res.send(error)
    }


})
module.exports=router