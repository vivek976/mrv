const express = require('express');
const router = express.Router();
const dbConnect = require('../db/connect');
const Drying = require('../models/drying.schema');
dbConnect(process.env.url);
router.post('/dryingDetails', async (req, res) => {
  try {
    const {
      dateOfOperation,
      machine,
      labour
    } = req.body;

    
    if (!dateOfOperation || (machine.applicable && (!machine.details || !machine.brand || !machine.rentCostPerAcre)) || (labour.applicable && (!labour.wagesPerDay || !labour.hired || !labour.familyLabour || !labour.contractuals))) {
      return res.status(400).json({ error: 'Incomplete data. Please provide all required fields.' });
    }

    const dryingData = {
      dateOfOperation,
      machine,
      labour
    };

    const newDrying = new Drying(dryingData);
    await newDrying.save();

    res.status(201).json({ message: 'Drying details inserted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
