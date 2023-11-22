const express = require("express");
const router = express.Router();
const xlsx = require('xlsx');
const moment = require('moment');
const dbConnect = require("../db/connect");
const harvest = require("../models/harvesting.schema");

dbConnect(process.env.url);

router.post("/harvestingDetails", async (req, res) => {
    try {
        const { dateOfOperation, machine, labour } = req.body;
        
        await harvest.create({ dateOfOperation, machine, labour });
        
        const data = await harvest.find().lean().exec();
        
        const worksheetData = data.map(item => ({
            ...item,
            dateOfOperation: moment(item.dateOfOperation).format('YYYY-MM-DD'),
            machine: JSON.stringify(item.machine), 
            labour: JSON.stringify(item.labour)   
        }));
        
        const worksheet = xlsx.utils.json_to_sheet(worksheetData);  
        const workbook = xlsx.utils.book_new();
        xlsx.utils.book_append_sheet(workbook, worksheet, "sheet2");
        const exportfilepath = "harvestingDetails.xlsx";
        
        xlsx.writeFile(workbook, exportfilepath);
        res.send("Created successfully");
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
