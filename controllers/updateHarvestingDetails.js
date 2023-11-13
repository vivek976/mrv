const express=require("express")
const router=express.Router()
const dbConnect=require("../db/connect")
dbConnect(process.env.url)
const harvest=require("../models/harvesting.schema")
router.post("/updateHarvestingDetails",async(req,res)=>{
      try
      {
        const Harvest=await harvest.updateOne({_id:req.body.id},{$set:req.body})
        console.log(Harvest.ok)
        if (Harvest.acknowledged) 
        {
            res.send("updated sucessfully")
        }
        else
        {
            res.send("document not found or no changes made")
        }
      }
      catch(error)
      {
        res.status(500).send("something went wrong"+error)
      }

})
module.exports=router