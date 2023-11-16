const express=require("express")
const router=express.Router()
const dbConnect=require("../db/connect")
dbConnect(process.env.url)
const irrigation=require("../models/irrigation.schema")
router.post("/updateIrrigationDetails", async (req, res) => {
    try {
      const { transplanting_days_under_submerged_conditions, controlled_irrigation_facilities_available, controlled_drainage_facilities_available, irrigationDetails } = req.body;
  
      
  
      const Irrigation = await irrigation.findByIdAndUpdate(
        req.body.id,
        {
            transplanting_days_under_submerged_conditions:transplanting_days_under_submerged_conditions,
             controlled_irrigation_facilities_available:controlled_irrigation_facilities_available,
              controlled_drainage_facilities_available:controlled_drainage_facilities_available,
              table_data:irrigationDetails 
        },
        { new: true } 
      );
  
      if (!Irrigation) {
        return res.status(404).json({ error: 'irrigation details not found' });
      }
  
      res.json(Irrigation);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  module.exports = router;
              
