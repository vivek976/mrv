const express=require("express")
const router=express.Router()
const dbConnect=require("../db/connect")
dbConnect(process.env.url)
const harvest=require("../models/harvesting.schema")
router.post("/deleteHarvestingDetails",async (req,res)=>{
    try
    {
        const Harvest=await harvest.deleteOne({_id:req.body.id})
        console.log(Harvest)
        if(Harvest.deletedCount > 0)
        {
            res.send("Deleted sucessfully")
        }
        else
        {
            res.send("document not found or no changes made")
        }

    }catch(error){
        res.status(500).send('something went wrong'+error)
    }
})
module.exports=router