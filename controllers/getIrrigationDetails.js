const express=require("express")
const router=express.Router()
const dbConnect=require("../db/connect")
dbConnect(process.env.url)
const irrigation=require("../models/irrigation.schema")
router.post("/getIrrigationDetails",async (req,res)=>
{
    try
    {
        const Irrigation=await irrigation.find({_id:req.body.id})
        if(Irrigation.length==0)
        {
            res.send("id not found")
        }
        else{
        res.status(200).send(Irrigation)
        }
    }
    catch(error)
    {
        res.json({message:error})
    }

})
module.exports=router