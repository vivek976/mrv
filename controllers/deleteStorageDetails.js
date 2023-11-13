const express=require("express")
const router=express.Router()
const dbConnect=require("../db/connect")
dbConnect(process.env.url)
const storage=require("../models/storage.schema")
router.post("/deleteStorageDetails",async (req,res)=>{
    try
    {
        const Storage=await storage.deleteOne({_id:req.body.id})
        console.log(Storage)
        if(Storage.deletedCount > 0)
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