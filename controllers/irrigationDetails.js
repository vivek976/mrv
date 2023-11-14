const express=require("express")
const router=express.Router()
const dbConnect=require("../db/connect")
dbConnect(process.env.url)
const irrigation=require("../models/irrigation.schema")
router.post('/irrigationDetails', async (req, res) => {
    try {
      const { transplanting_days_under_submerged_conditions, controlled_irrigation_facilities_available, controlled_drainage_facilities_available, irrigationDetails } = req.body;
  
      
      const newIrrigationTable = new irrigation({
        transplanting_days_under_submerged_conditions,
        controlled_irrigation_facilities_available,
        controlled_drainage_facilities_available,
        table_data: irrigationDetails, 
      });
      const savedIrrigation = await newIrrigationTable.save();

    res.status(201).json(savedIrrigation);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
module.exports=router;
