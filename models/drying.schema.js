const mongoose = require('mongoose');

const dryingSchema = new mongoose.Schema({
  dateOfOperation: {
    type: Date,
    required: true
  },
  machine: {
    applicable: {
      type: Boolean,
      
    },
    details: {
      type: String,
      enum: ['Owned', 'Hired'],
      required: function () {
        return this.machine.applicable === 'Applicable';
      }
    },
    brand: {
      type: String,
      required: function () {
        return this.machine.applicable === 'Applicable' && this.machine.details === 'Hired';
      }
    },
    rentCostPerAcre: {
      type: Number,
      required: function () {
        return this.machine.applicable === 'Applicable' && this.machine.details === 'Hired';
      }
    }
  },
  labour: {
    applicable: {
      type: Boolean
        },
    wagesPerDay: {
      type: Number,
      required: function () {
        return this.labour.applicable === 'Applicable';
      }
    },
    hired: {
      male: {
        type: Number,
        required: function () {
          return this.labour.applicable === 'Applicable';
        }
      },
      female: {
        type: Number,
        required: function () {
          return this.labour.applicable === 'Applicable';
        }
      }
    },
    familyLabour: {
      male: {
        type: Number,
        required: function () {
          return this.labour.applicable === 'Applicable';
        }
      },
      female: {
        type: Number,
        required: function () {
          return this.labour.applicable === 'Applicable';
        }
      }
    },
    contractuals: {
      applicable: {
        type: Boolean
      },
      costPerAcre: {
        type: Number,
        required: function () {
          return this.labour.contractuals.applicable === 'Applicable';
        }
      }
    }
  }
});

const Drying = mongoose.model('Drying', dryingSchema);

module.exports = Drying;
