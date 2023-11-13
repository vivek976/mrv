const mongoose = require('mongoose');

const harvestingSchema = new mongoose.Schema({
  dateOfOperation:{
    type:Date,
    required:true
  },
  machine: {
    applicable: {
      type: Boolean,
      required: true
    },
    type: {
      type: String
    },
    details: {
      type: String
    },
    brand: {
      type: String
    },
    rentCostPerAcre: {
      type: Number
    }
  },
  labour: {
    applicable: {
      type: Boolean,
      required: true
    },
    wagesPerDay: {
      type: Number
    },
    hired: {
      male: {
        type: Number
      },
      female: {
        type: Number
      }
    },
    familyLabour: {
      type: Boolean
    },
    contractual: {
      applicable: {
        type: Boolean
      },
      costPerAcre: {
        type: Number
      }
    }
  }
});

const Harvesting = mongoose.model('Harvesting', harvestingSchema);

module.exports = Harvesting;
