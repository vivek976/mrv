const express=require("express")
const router=express.Router()
const dbConnect=require("../db/connect")
dbConnect(process.env.url)
const storage=require("../models/storage.schema")
router.post("/storageDetails",async(req,res)=>
{
    try
    {
    const newStorage=new storage(req.body)
    const Storage=await storage.create(newStorage)
    res.send(Storage)
    }
    catch(error)
    {
        res.send("something went wrong"+ error)
    }


})
module.exports=router