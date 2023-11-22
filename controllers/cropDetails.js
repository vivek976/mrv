const express=require("express")
const router=express.Router()
const xlsx=require('xlsx')
const moment = require('moment');
const dbConnect=require("../db/connect")
dbConnect(process.env.url)
const crop=require("../models/crop.schema")
router.post("/cropDetails",async(req,res)=>{
    const {
        sowingDepth,
        plant_Height_After_30_days,
        plant_Height_After_60_days,
        plant_Height_After_90_days,
        floweringDate,
        leavesNumberAt60Days,
        aboveGroundBiomass,
        grainYeild,
        yeildOrAcre
    }=req.body
    try
    {
        crop.create({
            sowingDepth:sowingDepth,
            plant_Height_After_30_days:plant_Height_After_30_days,
            plant_Height_After_60_days:plant_Height_After_60_days,
            plant_Height_After_90_days:plant_Height_After_90_days,
            floweringDate:floweringDate,
            leavesNumberAt60Days:leavesNumberAt60Days,
            aboveGroundBiomass:aboveGroundBiomass,
            grainYeild:grainYeild,
            yeildOrAcre:yeildOrAcre
       })
        const data = await crop.find().lean().exec()
        const worksheetData=data.map(item=>({...item,floweringDate:moment(item.floweringDate).format('YYYY-MM-DD')}))
        const worksheet=xlsx.utils.json_to_sheet(worksheetData)
        const workbook=xlsx.utils.book_new()
        xlsx.utils.book_append_sheet(workbook,worksheet,"sheet1");
        const exportfilepath="cropDetails.xlsx"
        xlsx.writeFile(workbook,exportfilepath)
        res.send("crop is created")
        
    }catch(error)
    {
        res.send(error+"something went wrong")
    }
     
})
module.exports=router
