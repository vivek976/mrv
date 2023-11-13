const express=require("express")
const router=express.Router()
const dbConnect=require("../db/connect")
dbConnect(process.env.url)
const threshing=require("../models/threshing.schema")
router.post("/deleteThreshingDetails",async (req,res)=>{
    try
    {
        const Threshing=await threshing.deleteOne({_id:req.body.id})
        console.log(threshing)
        if(Threshing.deletedCount > 0)
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