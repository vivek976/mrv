const express=require("express")
const router=express.Router()
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
        res.send("crop is created")
    }catch(error)
    {
        res.send("something went wrong")
    }
     
})
module.exports=router