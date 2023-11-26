const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  phoneNumber: { type: String, required: true, unique: true },
  // Add other patient details as needed
});

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;
