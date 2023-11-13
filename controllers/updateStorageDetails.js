const express=require("express")
const router=express.Router()
const dbConnect=require("../db/connect")
dbConnect(process.env.url)
const storage=require("../models/storage.schema")
router.post("/updateStorageDetails",async(req,res)=>{
      try
      {
        const Storage=await storage.updateOne({_id:req.body.id},{$set:req.body})
        console.log(Storage)
        if (Storage.acknowledged) 
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