const express=require("express")
const router=express.Router()
const xlsx=require("xlsx")
const moment=require("moment")
const dbConnect=require("../db/connect")
dbConnect(process.env.url)
const storage=require("../models/storage.schema")
router.post("/storageDetails",async(req,res)=>
{
    try
    {
    const newStorage=new storage(req.body)
    const Storage=await storage.create(newStorage)
    const data=await storage.find().lean().exec()
    const worksheetData = data.map(item => ({
        ...item,
        dateOfOperation: moment(item.dateOfOperation).format('YYYY-MM-DD'),
        labour: JSON.stringify(item.labour)   
    }));
    
    const worksheet=xlsx.utils.json_to_sheet(worksheetData)
    const workbook=xlsx.utils.book_new()
    xlsx.utils.book_append_sheet(workbook,worksheet,"sheet1");
    const exportfilepath="storageDetails.xlsx"
    xlsx.writeFile(workbook,exportfilepath)
    res.send(Storage)
    }
    catch(error)
    {
        res.send("something went wrong"+ error)
    }


})
module.exports=router
