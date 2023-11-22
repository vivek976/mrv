/*const express=require("express")
const router=express.Router()
const xlsx = require('xlsx');
const moment = require('moment');
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
      const data = await irrigation.find().lean().exec()
      const worksheetData=data.map(item=>({...item,table_data:JSON.stringify(item.table_data)}))
      const worksheet=xlsx.utils.json_to_sheet(worksheetData)
      const workbook=xlsx.utils.book_new()
      xlsx.utils.book_append_sheet(workbook,worksheet,"sheet1");
      const exportfilepath="filename3.xlsx"
      xlsx.writeFile(workbook,exportfilepath)

    res.status(201).json(savedIrrigation);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
module.exports=router;
*/



const express = require('express');
const router=express.Router()
const mongoose = require('mongoose');
const XLSX = require('xlsx');
const moment = require('moment');
const ExcelJS = require('exceljs');
const dbConnect=require("../db/connect")
dbConnect(process.env.url)
const IrrigationModel=require("../models/irrigation.schema")
router.post('/irrigationDetails', async (req, res) => {
  try {
    const irrigationData = await IrrigationModel.find().lean();

    if (!irrigationData || irrigationData.length === 0) {
      return res.status(404).json({ message: 'No data found' });
    }
    const modifiedData = irrigationData.map((data) => ({
      ...data,
      
      table_data: JSON.stringify(data.table_data),
    }));
    const worksheet = XLSX.utils.json_to_sheet(modifiedData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Irrigation Data');
    const exportfilepath="irrigationDetails.xlsx"
    XLSX.writeFile(workbook,exportfilepath)
    res.send()
    

  
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


module.exports=router;

