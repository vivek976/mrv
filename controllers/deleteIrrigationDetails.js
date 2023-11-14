const express=require("express")
const router=express.Router()
const dbConnect=require("../db/connect")
dbConnect(process.env.url)
const irrigation=require("../models/irrigation.schema")
router.post("/deleteIrrigationDetails",async (req,res)=>
{
    try
    {
        const Irrigation=await irrigation.deleteOne({_id:req.body.id})
        console.log(Irrigation)
        if(Irrigation.deletedCount>0)
        {
            res.send("deleted Sucessfully")
        }
        else
        {
            res.send("cannot find the id")
        }

    }
    catch(error)
    {
        res.json({messege:error})
    }

})
module.exports=router