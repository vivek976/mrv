const express=require("express")
const router=express.Router()
const dbConnect=require("../db/connect")
dbConnect(process.env.url)
const drying=require("../models/drying.schema")
router.post("/getDryingDetails",async(req,res)=>{
     try{
        const Drying=await drying.find({_id:req.body.id})
        if(Drying.length==0)
        {
            res.send("id not found")
        }
        else
        {
            res.send(Drying)
        }
    
     }
     catch(error)
     {
         res.send(error)
     }
 
})
module.exports=router