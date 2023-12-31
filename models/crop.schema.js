const mongoose=require("mongoose")
const schema=mongoose.Schema({
    sowingDepth:{
        type:Number,
        required:true
    },
    plant_Height_After_30_days:{
        type:Number,
        required:true
    },
    plant_Height_After_60_days:{
        type:Number,
        required:true
    },
    plant_Height_After_90_days:{
        type:Number,
        required:true
    },
    floweringDate:{
        type:Date,
        required:true
    },
    leavesNumberAt60Days:{
        type:Number,
        required:true
    },
    aboveGroundBiomass:{
        type:Number,
        required:true
    },
    grainYeild:{
        type:Number,
        required:true
    },
    yeildOrAcre:{
        type:Number,
        required:true
    }
})
module.exports=mongoose.model("cropDetails",schema)