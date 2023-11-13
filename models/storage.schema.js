const mongoose = require('mongoose');

const storageSchema = new mongoose.Schema({
  applicable: {
    type: Boolean,
    required: true
  },
  dateOfOperation: {
    type: Date
  },
  materialUsed: {
    type: String,
    enum: ['Bag', 'Container']
  },
  totalAmountForMaterial: {
    type: Number
  },
  costPerAcre: {
    type: Number
  },
  transportationCost: {
    type: Number
  },
  labour: {
    applicable: {
      type: Boolean
    },
    wagesPerDay: {
      type: Number
    },
    male: {
      type: Number
    },
    female: {
      type: Number
    }
  }
});

const Storage = mongoose.model('Storage', storageSchema);

module.exports = Storage;
