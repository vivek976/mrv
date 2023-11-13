const express=require("express")
const router=express.Router()
const dbConnect=require("../db/connect")
dbConnect(process.env.url)
const threshing=require("../models/threshing.schema")
router.post("/getThreshingDetails",async(req,res)=>
{
    try{
        const Threshing=await threshing.find({_id:req.body.id})
        if(Threshing.length==0)
        {
            res.send("threshing details not found")
        }
        else
        {
            res.send(Threshing)
        }
        
    }
    catch(error)
    {
        res.send(error)
    }


})
module.exports=router