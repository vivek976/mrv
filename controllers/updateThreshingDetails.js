const express = require("express");
const router = express.Router();
const dbConnect = require("../db/connect");
dbConnect(process.env.url);
const Threshing = require("../models/threshing.schema");

router.post("/updateThreshingDetails", async (req, res) => {
  try {
    const { applicable, dateOfOperation, machine, labour } = req.body;

    if (applicable === undefined || dateOfOperation === undefined) {
      return res
        .status(400)
        .json({ error: 'Incomplete data. Both "applicable" and "dateOfOperation" are required.' });
    }

    const updatedThreshing = await Threshing.findByIdAndUpdate(
      req.body.id,
      {
        applicable: applicable,
        dateOfOperation: dateOfOperation,
        machine: machine,
        labour: labour,
      },
      { new: true } 
    );

    if (!updatedThreshing) {
      return res.status(404).json({ error: 'Threshing details not found' });
    }

    res.json(updatedThreshing);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
