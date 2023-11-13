const mongoose = require('mongoose');

const threshingSchema = new mongoose.Schema({
  applicable: {
    type: Boolean,
    required: true
  },
  dateOfOperation: {
    type: Date
  },
  machine: {
    applicable: {
      type: Boolean
    },
    type: {
      type: String
    },
    details: {
      type: String,
      enum: ['Owned', 'Hired']
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
      type: Boolean
    },
    wagesPerDay: {
      type: Number
    },
    female: {
      type: Number
    },
    familyLabour: {
      male: {
        type: Number
      },
      female: {
        type: Number
      }
    },
    hired: {
      male: {
        type: Number
      },
      female: {
        type: Number
      }
    },
    contractual: {
      applicable: {
        type: Boolean
      },
      costPerArea: {
        type: Number
      }
    }
  }
});

const Threshing = mongoose.model('Threshing', threshingSchema);

module.exports = Threshing;
